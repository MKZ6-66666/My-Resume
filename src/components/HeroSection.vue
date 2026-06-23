<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { profileData } from '../data/resume'

const heroRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const glitchName = ref(false)
const typedText = ref('')
const showSubtitle = ref(false)
const showPanel = ref(false)
const showCta = ref(false)
const showHud = ref(false)
const heroRotateX = ref(0)
const heroRotateY = ref(0)

// HUD 迷你终端
const hudLines = ref<string[]>([])
const hudFullLines = [
  '> load Vue3_Core.......... [OK]',
  '> init WebRTC_Stream...... [OK]',
  '> mount AI_Prompt_Engine.. [READY]',
  '> sync TypeScript_Module.. [OK]',
  '> boot Electron_Shell..... [OK]',
  '> connect PWA_Service..... [ACTIVE]',
]
let hudTimer: number | null = null

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const scrollToProjects = () => {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const handleHeroMouseMove = (e: MouseEvent) => {
  const el = heroRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  heroRotateX.value = ((y - centerY) / centerY) * -8
  heroRotateY.value = ((x - centerX) / centerX) * 8
}

const handleHeroMouseLeave = () => {
  heroRotateX.value = 0
  heroRotateY.value = 0
}

let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let particles: THREE.Points | null = null
let mouseX = 0
let mouseY = 0
let animId: number = 0

const subtitleText = `${profileData.title} / ${profileData.subtitle}`

// Three.js 初始化
const initThree = () => {
  if (!canvasRef.value || !heroRef.value) return

  try {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const particleCount = 300
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const cyanColor = new THREE.Color(0x00F0FF)
    const purpleColor = new THREE.Color(0x8A2BE2)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 120
      positions[i3 + 1] = (Math.random() - 0.5) * 120
      positions[i3 + 2] = (Math.random() - 0.5) * 120

      const color = Math.random() > 0.5 ? cyanColor : purpleColor
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = Math.random() * 1.5 + 0.3
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []
    const lineColors: number[] = []

    for (let i = 0; i < 30; i++) {
      const x1 = (Math.random() - 0.5) * 100
      const y1 = (Math.random() - 0.5) * 100
      const z1 = (Math.random() - 0.5) * 100
      const x2 = x1 + (Math.random() - 0.5) * 20
      const y2 = y1 + (Math.random() - 0.5) * 20
      const z2 = z1 + (Math.random() - 0.5) * 20

      linePositions.push(x1, y1, z1, x2, y2, z2)
      const c = Math.random() > 0.5 ? [0, 0.94, 1] : [0.54, 0.17, 0.89]
      lineColors.push(...c, ...c)
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    })

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)
  } catch (error) {
    console.error('[HeroSection.initThree]', error)
  }
}

// 动画循环
const animate = () => {
  animId = requestAnimationFrame(animate)

  if (particles && renderer && scene && camera) {
    particles.rotation.x += 0.00015
    particles.rotation.y += 0.00025

    const targetX = mouseX * 0.0003
    const targetY = mouseY * 0.0003
    particles.rotation.x += (targetY - particles.rotation.x) * 0.01
    particles.rotation.y += (targetX - particles.rotation.y) * 0.01

    renderer.render(scene, camera)
  }
}

const handleMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX - window.innerWidth / 2
  mouseY = e.clientY - window.innerHeight / 2
}

const handleResize = () => {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// 打字机效果
const typeWriter = (text: string, speed = 60) => {
  let i = 0
  const timer = setInterval(() => {
    if (i < text.length) {
      typedText.value += text.charAt(i)
      i++
    } else {
      clearInterval(timer)
    }
  }, speed)
}

// Glitch 效果
const triggerGlitch = () => {
  glitchName.value = true
  setTimeout(() => {
    glitchName.value = false
  }, 1500)
}

// HUD 终端逐行输出
const startHudTerminal = () => {
  let idx = 0
  hudTimer = window.setInterval(() => {
    if (idx < hudFullLines.length) {
      hudLines.value.push(hudFullLines[idx])
      idx++
    } else {
      // 循环：清空重来
      hudLines.value = []
      idx = 0
    }
  }, 2500)
}

onMounted(() => {
  initThree()
  animate()

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)

  // 层层唤醒进场动画时间轴
  // 第 0 秒：HUD 闪烁出现
  setTimeout(() => {
    showHud.value = true
    startHudTerminal()
  }, 0)

  // 第 0.5 秒：中央面板展开
  setTimeout(() => {
    showPanel.value = true
  }, 500)

  // 第 1.0 秒：名字 Glitch
  setTimeout(() => {
    triggerGlitch()
  }, 1000)

  // 第 2.0 秒：副标题打字机
  setTimeout(() => {
    showSubtitle.value = true
    typeWriter(subtitleText, 70)
  }, 2000)

  // 第 3.0 秒：CTA 按钮滑入
  setTimeout(() => {
    showCta.value = true
  }, 3000)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  if (hudTimer) clearInterval(hudTimer)
  renderer?.dispose()
})
</script>

<template>
  <section ref="heroRef" class="hero-section">
    <canvas ref="canvasRef" class="hero-canvas"></canvas>

    <!-- 扫描线效果 -->
    <div class="scanline"></div>

    <!-- 暗角遮罩 -->
    <div class="vignette-overlay"></div>

    <!-- HUD 左上角：系统状态 -->
    <div class="hud hud-tl" :class="{ 'hud-visible': showHud }">
      <div class="hud-line-primary">[SYS_STATUS: ONLINE]</div>
      <div class="hud-line-secondary">NODE: HKG // UPTIME: 99.9%</div>
    </div>

    <!-- HUD 右上角：身份标识 -->
    <div class="hud hud-tr" :class="{ 'hud-visible': showHud }">
      <div class="hud-line-primary">ID_CLASSIFICATION:</div>
      <div class="hud-line-accent">FRONT_END_ARCHITECT</div>
    </div>

    <!-- HUD 左下角：迷你终端 -->
    <div class="hud hud-bl" :class="{ 'hud-visible': showHud }">
      <div class="hud-terminal">
        <div v-for="(line, idx) in hudLines" :key="idx" class="hud-term-line">{{ line }}</div>
      </div>
    </div>

    <!-- 中央面板 -->
    <div
      class="hero-content"
      :class="{ 'panel-visible': showPanel }"
      @mousemove="handleHeroMouseMove"
      @mouseleave="handleHeroMouseLeave"
      :style="{ transform: `perspective(1200px) rotateX(${heroRotateX}deg) rotateY(${heroRotateY}deg)` }"
    >
      <!-- 面板切角装饰线 -->
      <div class="panel-corner-line tl"></div>
      <div class="panel-corner-line tr"></div>
      <div class="panel-corner-line bl"></div>
      <div class="panel-corner-line br"></div>

      <!-- Glitch 名字 -->
      <div class="hero-name-wrapper" :class="{ 'glitch-active': glitchName }">
        <h1 class="hero-name" data-text="高萌锴">
          <span class="hero-name-main">高萌锴</span>
          <span class="hero-name-en">{{ profileData.nameEn }}</span>
        </h1>
        <div class="hero-name-glitch" aria-hidden="true">高萌锴</div>
        <div class="hero-name-glitch2" aria-hidden="true">高萌锴</div>
      </div>

      <!-- 打字机副标题 -->
      <div class="hero-subtitle" v-if="showSubtitle">
        <span class="typed-text">{{ typedText }}</span>
        <span class="cursor">|</span>
      </div>

      <!-- CTA 按钮 -->
      <div class="hero-cta" :class="{ 'cta-visible': showCta }">
        <button class="neon-btn" @click="scrollToProjects">
          <span class="btn-text">获取我的简历</span>
          <div class="btn-glitch"></div>
        </button>
        <button class="neon-btn neon-btn--purple" @click="scrollToContact">
          <span class="btn-text">开启远程协作</span>
          <div class="btn-glitch"></div>
        </button>
      </div>
    </div>

    <!-- 向下滚动提示 -->
    <div class="scroll-indicator" :class="{ 'cta-visible': showCta }">
      <div class="scroll-line"></div>
      <span class="scroll-text">SCROLL</span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.scanline {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 240, 255, 0.015) 2px,
    rgba(0, 240, 255, 0.015) 4px
  );
}

.scanline::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    transparent 50%,
    rgba(0, 240, 255, 0.02) 50%
  );
  background-size: 100% 4px;
  animation: scanline 8s linear infinite;
  pointer-events: none;
}

/* 暗角遮罩 */
.vignette-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.8) 60%, #0a0a0a 100%);
}

/* ===== HUD 元素 ===== */
.hud {
  position: absolute;
  z-index: 15;
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.6;
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.hud-visible {
  opacity: 0.5;
}

.hud-tl {
  top: 24px;
  left: 24px;
}

.hud-tr {
  top: 24px;
  right: 24px;
  text-align: right;
}

.hud-bl {
  bottom: 24px;
  left: 24px;
}

.hud-line-primary {
  color: var(--color-cyan);
  letter-spacing: 0.1em;
}

.hud-line-secondary {
  color: rgba(0, 240, 255, 0.4);
  letter-spacing: 0.05em;
}

.hud-line-accent {
  color: var(--color-purple);
  letter-spacing: 0.15em;
  text-shadow: 0 0 6px rgba(138, 43, 226, 0.5);
}

.hud-terminal {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hud-term-line {
  color: var(--color-cyan);
  white-space: nowrap;
  animation: hud-flicker 3s ease-in-out infinite alternate;
}

.hud-term-line:nth-child(odd) {
  animation-delay: 0.5s;
}

/* ===== 中央面板：机甲切角风格 ===== */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  width: 90%;
  padding: 40px 80px;
  /* 机甲切角 */
  clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));
  /* 毛玻璃底 */
  background: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 240, 255, 0.12);
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.8),
    inset 0 0 60px rgba(0, 240, 255, 0.03);
  transition: transform 0.15s ease-out;
  /* 进场动画：初始隐藏 */
  opacity: 0;
  transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(30px) scale(0.95);
}

.hero-content.panel-visible {
  opacity: 1;
  transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

/* 面板切角装饰线 */
.panel-corner-line {
  position: absolute;
  width: 30px;
  height: 30px;
  pointer-events: none;
}

.panel-corner-line::before,
.panel-corner-line::after {
  content: '';
  position: absolute;
  background: var(--color-cyan);
  opacity: 0.4;
}

.panel-corner-line.tl {
  top: 0;
  left: 0;
}
.panel-corner-line.tl::before {
  top: 0;
  left: 20px;
  width: 30px;
  height: 1px;
}
.panel-corner-line.tl::after {
  top: 20px;
  left: 0;
  width: 1px;
  height: 30px;
}

.panel-corner-line.tr {
  top: 0;
  right: 0;
}
.panel-corner-line.tr::before {
  top: 0;
  right: 20px;
  width: 30px;
  height: 1px;
}
.panel-corner-line.tr::after {
  top: 20px;
  right: 0;
  width: 1px;
  height: 30px;
}

.panel-corner-line.bl {
  bottom: 0;
  left: 0;
}
.panel-corner-line.bl::before {
  bottom: 0;
  left: 0;
  width: 30px;
  height: 1px;
}
.panel-corner-line.bl::after {
  bottom: 20px;
  left: 0;
  width: 1px;
  height: 30px;
}

.panel-corner-line.br {
  bottom: 0;
  right: 0;
}
.panel-corner-line.br::before {
  bottom: 0;
  right: 0;
  width: 30px;
  height: 1px;
}
.panel-corner-line.br::after {
  bottom: 20px;
  right: 0;
  width: 1px;
  height: 30px;
}

/* Glitch Name */
.hero-name-wrapper {
  position: relative;
  display: inline-block;
}

.hero-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.hero-name-main {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 2rem);
  font-weight: 900;
  color: var(--color-text-bright);
  letter-spacing: 0.1em;
  text-shadow:
    0 0 10px rgba(0, 240, 255, 0.8),
    0 0 20px rgba(0, 240, 255, 0.5),
    0 0 40px rgba(0, 240, 255, 0.3),
    0 0 80px rgba(0, 240, 255, 0.15);
  position: relative;
}

.hero-name-en {
  font-family: var(--font-display);
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  font-weight: 400;
  color: var(--color-cyan);
  letter-spacing: 0.5em;
  opacity: 0.9;
  text-shadow:
    0 0 8px rgba(0, 240, 255, 0.6),
    0 0 20px rgba(0, 240, 255, 0.3);
}

.hero-name-glitch,
.hero-name-glitch2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  color: var(--color-text-bright);
  opacity: 0;
  pointer-events: none;
}

.hero-name-glitch {
  color: var(--color-cyan);
}

.hero-name-glitch2 {
  color: var(--color-purple);
}

.glitch-active .hero-name-glitch {
  opacity: 0.8;
  animation: glitch-1 0.3s infinite;
}

.glitch-active .hero-name-glitch2 {
  opacity: 0.8;
  animation: glitch-2 0.3s infinite reverse;
}

/* Subtitle */
.hero-subtitle {
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 1.3vw, 1rem);
  color: var(--color-text-dim);
  min-height: 1.8em;
}

.typed-text {
  color: var(--color-text);
  text-shadow:
    0 0 6px rgba(0, 240, 255, 0.4),
    0 0 15px rgba(0, 240, 255, 0.2);
}

.cursor {
  color: var(--color-cyan);
  animation: typing-cursor 0.8s infinite;
  font-weight: 100;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: 24px;
  margin-top: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-cta.cta-visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-text {
  position: relative;
  z-index: 2;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.scroll-indicator.cta-visible {
  opacity: 1;
}

.scroll-line {
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, var(--color-cyan), transparent);
  animation: float 3s ease-in-out infinite;
}

.scroll-text {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: var(--color-cyan);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 32px 24px;
    width: 95%;
  }

  .hero-cta {
    flex-direction: column;
    gap: 12px;
  }

  .hud {
    font-size: 8px;
  }

  .hud-tl,
  .hud-tr,
  .hud-bl {
    top: auto;
    bottom: auto;
    left: 12px;
    right: auto;
  }

  .hud-tr {
    top: 12px;
    right: 12px;
    left: auto;
  }

  .hud-bl {
    bottom: 12px;
    left: 12px;
  }
}
</style>
