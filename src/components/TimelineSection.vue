<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { workExperienceData } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const activeNode = ref<number | null>(null)
const cardRotates = ref<Record<number, { x: number; y: number }>>({})

const toggleNode = (id: number) => {
  activeNode.value = activeNode.value === id ? null : id
}

const handleCardMouseMove = (e: MouseEvent, id: number) => {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  cardRotates.value = {
    ...cardRotates.value,
    [id]: {
      x: ((y - centerY) / centerY) * -10,
      y: ((x - centerX) / centerX) * 10,
    },
  }
}

const handleCardMouseLeave = (id: number) => {
  cardRotates.value = {
    ...cardRotates.value,
    [id]: { x: 0, y: 0 },
  }
}

onMounted(() => {
  if (!sectionRef.value) return

  try {
    // 时间轴线条动画
    const timeline = sectionRef.value.querySelector('.timeline-line-svg')
    if (timeline) {
      const paths = timeline.querySelectorAll('path')
      paths.forEach((path) => {
        try {
          const length = (path as SVGPathElement).getTotalLength()
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          })
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: path,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          })
        } catch (error) {
          console.error('[TimelineSection.path-animation]', error)
        }
      })
    }

    // 节点动画
    const nodes = sectionRef.value.querySelectorAll('.timeline-node')
    gsap.from(nodes, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      x: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
    })
  } catch (error) {
    console.error('[TimelineSection.onMounted]', error)
  }
})
</script>

<template>
  <section ref="sectionRef" class="section timeline-section">
    <h2 class="section-title">Career Timeline</h2>

    <div class="timeline-container">
      <!-- SVG 电路板时间轴线 -->
      <div class="timeline-line">
        <svg class="timeline-line-svg" viewBox="0 0 60 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-cyan)" />
              <stop offset="50%" stop-color="var(--color-purple)" />
              <stop offset="100%" stop-color="var(--color-cyan)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <!-- 主线 -->
          <path
            d="M30 0 L30 250 L25 260 L30 270 L35 280 L30 290 L30 530 L25 540 L30 550 L35 560 L30 570 L30 800"
            fill="none"
            stroke="url(#lineGrad)"
            stroke-width="2"
            filter="url(#glow)"
          />
          <!-- 节点连接线 -->
          <path
            d="M30 130 L50 130"
            fill="none"
            stroke="var(--color-cyan)"
            stroke-width="1.5"
            filter="url(#glow)"
          />
          <path
            d="M30 400 L50 400"
            fill="none"
            stroke="var(--color-purple)"
            stroke-width="1.5"
            filter="url(#glow)"
          />
          <path
            d="M30 670 L50 670"
            fill="none"
            stroke="var(--color-cyan)"
            stroke-width="1.5"
            filter="url(#glow)"
          />
        </svg>
      </div>

      <!-- 时间轴节点 -->
      <div class="timeline-nodes">
        <div
          v-for="(work, idx) in workExperienceData"
          :key="work.id"
          class="timeline-node"
          :class="{ 'is-active': activeNode === work.id }"
        >
          <!-- 节点指示器 -->
          <div class="node-indicator" :style="{ '--delay': idx * 0.2 + 's' }">
            <div class="indicator-dot"></div>
            <div class="indicator-ring"></div>
          </div>

          <!-- 节点内容卡片 -->
          <div
            class="node-card glass-panel"
            @click="toggleNode(work.id)"
            @mousemove="handleCardMouseMove($event, work.id)"
            @mouseleave="handleCardMouseLeave(work.id)"
            :style="{ transform: `perspective(800px) rotateX(${cardRotates[work.id]?.x || 0}deg) rotateY(${cardRotates[work.id]?.y || 0}deg)` }"
          >
            <div class="card-period">{{ work.period }}</div>
            <h3 class="card-company">{{ work.company }}</h3>
            <div class="card-position">{{ work.position }}</div>

            <!-- 展开内容 -->
            <Transition name="expand">
              <div v-if="activeNode === work.id" class="card-detail">
                <div class="detail-divider"></div>
                <ul class="detail-list">
                  <li v-for="(resp, rIdx) in work.responsibilities" :key="rIdx">
                    {{ resp }}
                  </li>
                </ul>
                <div v-if="work.projects.length" class="detail-projects">
                  <div class="projects-label">核心项目</div>
                  <div class="project-chips">
                    <span v-for="proj in work.projects" :key="proj.name" class="project-chip">
                      {{ proj.name }}
                    </span>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding-left: 8vw;
  padding-right: 8vw;
}

.timeline-container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 900px;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  flex-shrink: 0;
}

.timeline-line-svg {
  width: 100%;
  height: 100%;
}

.timeline-nodes {
  flex: 1;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.timeline-node {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.node-indicator {
  position: absolute;
  left: -36px;
  top: 20px;
  width: 20px;
  height: 20px;
}

.indicator-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--color-cyan);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-cyan);
}

.indicator-ring {
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-cyan);
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse-glow 2s infinite;
  animation-delay: var(--delay);
}

.node-card {
  flex: 1;
  padding: 24px;
  cursor: pointer;
  transition: all 0.15s ease-out;
  background: rgba(17, 17, 17, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transform-style: preserve-3d;
}

.node-card:hover {
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.08);
}

.is-active .node-card {
  border-color: rgba(0, 240, 255, 0.4);
  box-shadow: 0 0 40px rgba(0, 240, 255, 0.1);
}

.card-period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-cyan);
  margin-bottom: 8px;
  letter-spacing: 0.05em;
}

.card-company {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text-bright);
  margin-bottom: 4px;
}

.card-position {
  font-size: 0.9rem;
  color: var(--color-purple);
  font-weight: 500;
}

.detail-divider {
  height: 1px;
  background: linear-gradient(90deg, var(--color-cyan), var(--color-purple), transparent);
  opacity: 0.3;
  margin: 16px 0;
}

.detail-list {
  list-style: none;
  padding: 0;
}

.detail-list li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: var(--color-text);
  line-height: 1.6;
}

.detail-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-cyan);
}

.detail-projects {
  margin-top: 16px;
}

.projects-label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--color-text-dim);
  margin-bottom: 8px;
}

.project-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-chip {
  font-size: 0.75rem;
  padding: 4px 12px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 3px;
  color: var(--color-purple);
  background: rgba(138, 43, 226, 0.05);
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 600px;
  margin-top: 0;
}

@media (max-width: 768px) {
  .timeline-line {
    display: none;
  }

  .timeline-nodes {
    padding-left: 0;
  }

  .node-indicator {
    left: -16px;
  }
}
</style>
