<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profileData, educationData } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
const isFlipped = ref(false)
const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value || isFlipped.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  rotateX.value = ((y - centerY) / centerY) * -15
  rotateY.value = ((x - centerX) / centerX) * 15
}

const handleMouseLeave = () => {
  if (isFlipped.value) return
  rotateX.value = 0
  rotateY.value = 0
}

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
  // 翻转时重置视差角度
  if (isFlipped.value) {
    rotateX.value = 0
    rotateY.value = 0
  }
}

onMounted(() => {
  if (!sectionRef.value) return

  gsap.from(sectionRef.value.querySelectorAll('.reveal-item'), {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section ref="sectionRef" class="section profile-section">
    <h2 class="section-title">Profile & Education</h2>

    <div
      class="card-container"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @click="toggleFlip"
    >
      <div
        ref="cardRef"
        class="holo-card"
        :class="{ 'is-flipped': isFlipped }"
        :style="{
          transform: isFlipped 
            ? 'rotateY(180deg)' 
            : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }"
      >
        <!-- 正面 - 基本信息 -->
        <div class="card-front">
          <div class="card-header">
            <div class="card-avatar">
              <span class="avatar-text">{{ profileData.name.charAt(0) }}</span>
            </div>
            <div class="card-badge">ACTIVE</div>
          </div>

          <h3 class="card-name">{{ profileData.name }}</h3>
          <p class="card-title">{{ profileData.position }}</p>

          <div class="card-divider"></div>

          <div class="info-grid">
            <div class="info-item reveal-item">
              <span class="info-label">AGE</span>
              <span class="info-value">{{ profileData.age }}</span>
            </div>
            <div class="info-item reveal-item">
              <span class="info-label">EXP</span>
              <span class="info-value">{{ profileData.experience }}</span>
            </div>
            <div class="info-item reveal-item">
              <span class="info-label">FROM</span>
              <span class="info-value">{{ profileData.origin }}</span>
            </div>
            <div class="info-item reveal-item">
              <span class="info-label">STATUS</span>
              <span class="info-value highlight">{{ profileData.availability }}</span>
            </div>
          </div>

          <div class="card-divider"></div>

          <div class="contact-row reveal-item">
            <span class="contact-icon">TEL</span>
            <span class="contact-value">{{ profileData.phone }}</span>
          </div>
          <div class="contact-row reveal-item">
            <span class="contact-icon">MAIL</span>
            <span class="contact-value">{{ profileData.email }}</span>
          </div>

          <div class="flip-hint">CLICK TO FLIP →</div>
        </div>

        <!-- 背面 - 教育背景 -->
        <div class="card-back">
          <div class="card-header">
            <div class="card-badge back-badge">EDUCATION</div>
          </div>

          <h3 class="edu-school">{{ educationData.school }}</h3>
          <p class="edu-major">{{ educationData.major }}</p>
          <p class="edu-period">{{ educationData.period }}</p>

          <div class="card-divider"></div>

          <div class="courses-title">主修课程</div>
          <div class="courses-grid">
            <span
              v-for="(course, idx) in educationData.courses"
              :key="idx"
              class="course-tag reveal-item"
            >
              {{ course }}
            </span>
          </div>

          <div class="flip-hint">← CLICK TO FLIP</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  perspective: 1200px;
}

.card-container {
  width: 100%;
  max-width: 480px;
  perspective: 1200px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.holo-card {
  position: relative;
  width: 100%;
  min-height: 425px;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
}

.holo-card.is-flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  padding: 24px;
  border-radius: 16px;
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 240, 255, 0.15);
  box-shadow:
    0 0 30px rgba(0, 240, 255, 0.05),
    inset 0 0 30px rgba(0, 240, 255, 0.02);
  overflow: hidden;
}

.card-front::before,
.card-back::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 240, 255, 0.03) 0%,
    transparent 50%,
    rgba(138, 43, 226, 0.03) 100%
  );
  pointer-events: none;
}

.card-back {
  transform: rotateY(180deg);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.card-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.avatar-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bg-primary);
}

.card-badge {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  padding: 4px 12px;
  border: 1px solid var(--color-green);
  color: var(--color-green);
  border-radius: 2px;
  animation: pulse-glow 2s infinite;
}

.back-badge {
  border-color: var(--color-cyan);
  color: var(--color-cyan);
}

.card-name {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text-bright);
  margin-bottom: 4px;
}

.card-title {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-cyan);
  letter-spacing: 0.1em;
}

.card-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-cyan), var(--color-purple), transparent);
  opacity: 0.3;
  margin: 16px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 4px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--color-text-dim);
}

.info-value {
  font-size: 0.95rem;
  color: var(--color-text);
  font-weight: 500;
}

.info-value.highlight {
  color: var(--color-green);
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.contact-icon {
  font-family: var(--font-display);
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  color: var(--color-cyan);
  min-width: 36px;
}

.contact-value {
  font-size: 0.9rem;
  color: var(--color-text);
}

.flip-hint {
  position: absolute;
  bottom: 16px;
  right: 24px;
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--color-text-dim);
  opacity: 0.5;
}

/* Back side */
.edu-school {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-bright);
  margin-bottom: 4px;
}

.edu-major {
  font-size: 1rem;
  color: var(--color-cyan);
  margin-bottom: 4px;
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-dim);
}

.courses-title {
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-text-dim);
  margin-bottom: 12px;
}

.courses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.course-tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 3px;
  color: var(--color-text);
  background: rgba(0, 240, 255, 0.05);
}
</style>
