<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { selfEvaluation, profileData } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const copiedField = ref<string | null>(null)
const particleBurst = ref(false)

const copyToClipboard = async (text: string, field: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedField.value = field
    particleBurst.value = true
    setTimeout(() => {
      copiedField.value = null
      particleBurst.value = false
    }, 2000)
  } catch {
    // fallback
  }
}

// 复制成功的粒子效果
const particles = ref<Array<{ id: number; x: number; y: number; dx: number; dy: number }>>([])

const triggerParticles = (e: MouseEvent) => {
  const newParticles = Array.from({ length: 20 }, (_, i) => ({
    id: Date.now() + i,
    x: e.clientX,
    y: e.clientY,
    dx: (Math.random() - 0.5) * 200,
    dy: (Math.random() - 0.5) * 200,
  }))
  particles.value = newParticles
  setTimeout(() => {
    particles.value = []
  }, 1000)
}

onMounted(() => {
  if (!sectionRef.value) return

  gsap.from(sectionRef.value.querySelector('.contact-card'), {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section ref="sectionRef" id="contact" class="section contact-section">
    <h2 class="section-title">Connect & Collaborate</h2>

    <!-- 跑马灯自我评价 -->
    <div class="marquee-container">
      <div class="marquee-track">
        <div class="marquee-content">
          <span v-for="(eval_text, idx) in [...selfEvaluation, ...selfEvaluation]" :key="idx" class="marquee-item">
            <span class="marquee-bracket">[</span>
            {{ eval_text }}
            <span class="marquee-bracket">]</span>
          </span>
        </div>
      </div>
      <div class="marquee-track reverse">
        <div class="marquee-content reverse-content">
          <span v-for="(eval_text, idx) in [...selfEvaluation, ...selfEvaluation]" :key="idx" class="marquee-item">
            <span class="marquee-bracket">&lt;</span>
            {{ eval_text }}
            <span class="marquee-bracket">/&gt;</span>
          </span>
        </div>
      </div>
    </div>

    <!-- 聚光灯联系卡片 -->
    <div class="spotlight-area">
      <div class="contact-card glass-panel">
        <div class="card-glow"></div>

        <div class="card-header">
          <div class="status-indicator"></div>
          <span class="status-text">AVAILABLE FOR WORK</span>
        </div>

        <h3 class="card-name">{{ profileData.name }}</h3>
        <p class="card-position">{{ profileData.position }}</p>

        <div class="card-divider"></div>

        <div class="contact-links">
          <button
            class="contact-link"
            @click="(e) => { copyToClipboard(profileData.email, 'email'); triggerParticles(e as any) }"
          >
            <span class="link-icon">✉</span>
            <span class="link-value">{{ profileData.email }}</span>
            <span class="link-action">{{ copiedField === 'email' ? '已复制!' : '点击复制' }}</span>
          </button>
          <button
            class="contact-link"
            @click="(e) => { copyToClipboard(profileData.phone, 'phone'); triggerParticles(e as any) }"
          >
            <span class="link-icon">☎</span>
            <span class="link-value">{{ profileData.phone }}</span>
            <span class="link-action">{{ copiedField === 'phone' ? '已复制!' : '点击复制' }}</span>
          </button>
        </div>

        <div class="card-divider"></div>

        <div class="card-cta">
          <a href="mailto:a842676425@163.com" class="neon-btn">
            发送邮件
          </a>
          <button class="neon-btn neon-btn--purple" @click="(e) => { copyToClipboard(profileData.phone, 'phone'); triggerParticles(e as any) }">
            获取电话
          </button>
        </div>

        <!-- 复制成功提示 -->
        <Transition name="toast">
          <div v-if="copiedField" class="copy-toast">
            已复制，期待您的项目合作 ✨
          </div>
        </Transition>
      </div>
    </div>

    <!-- 粒子爆破效果 -->
    <div class="particle-container" v-if="particles.length">
      <div
        v-for="p in particles"
        :key="p.id"
        class="burst-particle"
        :style="{
          left: p.x + 'px',
          top: p.y + 'px',
          '--dx': p.dx + 'px',
          '--dy': p.dy + 'px',
        }"
      ></div>
    </div>

    <!-- 底部 -->
    <footer class="cyber-footer">
      <div class="footer-line"></div>
      <p class="footer-text">
        <span class="footer-bracket">&lt;</span>
        Designed & Built by 高萌锴
        <span class="footer-bracket">/&gt;</span>
      </p>
      <p class="footer-sub">CYBER PORTFOLIO v1.0 // {{ new Date().getFullYear() }}</p>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
}

/* Marquee */
.marquee-container {
  width: 100%;
  overflow: hidden;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.marquee-track {
  margin-bottom: 12px;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  gap: 40px;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}

.reverse-content {
  animation-direction: reverse;
}

.marquee-item {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.marquee-bracket {
  color: var(--color-cyan);
  font-family: var(--font-mono);
  opacity: 0.5;
}

/* Spotlight */
.spotlight-area {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.spotlight-area::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

/* Contact Card */
.contact-card {
  position: relative;
  width: 100%;
  max-width: 460px;
  padding: 32px;
  text-align: center;
  overflow: hidden;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(0, 240, 255, 0.05),
    transparent,
    rgba(138, 43, 226, 0.05),
    transparent
  );
  animation: spin 8s linear infinite;
  pointer-events: none;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: var(--color-green);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-green);
  animation: pulse-glow 2s infinite;
}

.status-text {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: var(--color-green);
}

.card-name {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text-bright);
  margin-bottom: 4px;
}

.card-position {
  font-size: 0.95rem;
  color: var(--color-cyan);
}

.card-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-cyan), var(--color-purple), transparent);
  opacity: 0.3;
  margin: 20px 0;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--border-glass);
  border-radius: 8px;
  background: var(--bg-glass);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
  text-align: left;
}

.contact-link:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
}

.link-icon {
  font-size: 1.2rem;
  color: var(--color-cyan);
}

.link-value {
  flex: 1;
  font-size: 0.9rem;
  color: var(--color-text);
}

.link-action {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-text-dim);
  opacity: 0;
  transition: opacity 0.3s;
}

.contact-link:hover .link-action {
  opacity: 1;
}

.card-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* Copy Toast */
.copy-toast {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 20px;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--color-cyan);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-cyan);
  white-space: nowrap;
  box-shadow: var(--glow-cyan);
}

.toast-enter-active {
  animation: glitchIn 0.3s ease;
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

/* Burst Particles */
.particle-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.burst-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-cyan);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--color-cyan);
  animation: burst 0.8s ease-out forwards;
}

@keyframes burst {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx), var(--dy));
    opacity: 0;
  }
}

/* Footer */
.cyber-footer {
  margin-top: 80px;
  text-align: center;
  padding-bottom: 40px;
}

.footer-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-cyan), var(--color-purple), transparent);
  opacity: 0.2;
  margin-bottom: 30px;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-dim);
  margin-bottom: 8px;
}

.footer-bracket {
  color: var(--color-cyan);
}

.footer-sub {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: var(--color-text-dim);
  opacity: 0.4;
}

@media (max-width: 768px) {
  .card-cta {
    flex-direction: column;
  }
}
</style>
