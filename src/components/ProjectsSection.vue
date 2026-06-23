<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { workExperienceData } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const activeProject = ref<{ workIdx: number; projIdx: number } | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)

// 扁平化所有项目
const allProjects = workExperienceData.flatMap((work, workIdx) =>
  work.projects.map((proj, projIdx) => ({
    ...proj,
    company: work.company,
    period: work.period,
    workIdx,
    projIdx,
  }))
)

const openTerminal = (workIdx: number, projIdx: number) => {
  activeProject.value = { workIdx, projIdx }
}

const closeTerminal = () => {
  activeProject.value = null
}

const currentProject = computed(() => {
  if (!activeProject.value) return null
  const { workIdx, projIdx } = activeProject.value
  return workExperienceData[workIdx]?.projects[projIdx] || null
})

onMounted(() => {
  if (!sectionRef.value) return
  nextTick(() => {
    setTimeout(() => {
      // 抛弃交错动画，改为整体渐现，避免计算塌陷
      gsap.fromTo(scrollContainer.value,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      )
      ScrollTrigger.refresh()
    }, 100) // 给予 DOM 渲染缓冲时间
  })
})
</script>

<template>
  <section ref="sectionRef" id="projects" class="section projects-section">
    <h2 class="section-title">Project Arsenal</h2>

    <!-- 项目卡片横向滚动 -->
    <div ref="scrollContainer" class="projects-scroll">
      <div
        v-for="proj in allProjects"
        :key="`${proj.workIdx}-${proj.projIdx}`"
        class="project-card glass-panel"
        @click="openTerminal(proj.workIdx, proj.projIdx)"
      >
        <div class="card-corner tl"></div>
        <div class="card-corner tr"></div>
        <div class="card-corner bl"></div>
        <div class="card-corner br"></div>

        <div class="card-company-label">{{ proj.company }}</div>
        <h3 class="card-project-name">{{ proj.name }}</h3>
        <div class="card-tech-stack">
          <span v-for="tech in proj.tech.split(', ').slice(0, 4)" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <p class="card-desc">{{ proj.description }}</p>
        <div class="card-action">[ CLICK TO INSPECT ]</div>
      </div>
    </div>

    <!-- 终端弹窗 -->
    <Transition name="terminal">
      <div v-if="activeProject && currentProject" class="terminal-overlay" @click.self="closeTerminal">
        <div class="terminal-modal">
          <div class="modal-header">
            <div class="modal-dots">
              <span class="dot red" @click="closeTerminal"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="modal-title">project_inspector.sh</span>
            <span class="modal-close" @click="closeTerminal">✕</span>
          </div>
          <div class="modal-body">
            <div class="code-block">
              <div class="code-line comment">// 项目名称</div>
              <div class="code-line">
                <span class="code-keyword">const</span>
                <span class="code-var">projectName</span>
                <span class="code-op">=</span>
                <span class="code-string">"{{ currentProject.name }}"</span>
              </div>
            </div>

            <div class="code-block">
              <div class="code-line comment">// 前端技术</div>
              <div class="code-line">
                <span class="code-keyword">const</span>
                <span class="code-var">techStack</span>
                <span class="code-op">=</span>
                <span class="code-string">"{{ currentProject.tech }}"</span>
              </div>
            </div>

            <div class="code-block">
              <div class="code-line comment">// 项目描述</div>
              <div class="code-line">
                <span class="code-keyword">const</span>
                <span class="code-var">description</span>
                <span class="code-op">=</span>
                <span class="code-string">`{{ currentProject.description }}`</span>
              </div>
            </div>

            <div class="code-block">
              <div class="code-line comment">// 核心实现</div>
              <div class="code-line">
                <span class="code-keyword">const</span>
                <span class="code-var">features</span>
                <span class="code-op">=</span>
                <span class="code-bracket">[</span>
              </div>
              <div
                v-for="(feature, fIdx) in currentProject.features"
                :key="fIdx"
                class="code-line indent"
              >
                <span class="code-string">"{{ feature }}"</span>
                <span v-if="fIdx < currentProject.features.length - 1" class="code-comma">,</span>
              </div>
              <div class="code-line">
                <span class="code-bracket">]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.projects-section {
  overflow: hidden;
  position: relative;
  z-index: 10;
  background: var(--bg-primary);
}

.projects-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 0 32px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  position: relative;
  z-index: 5;
  max-width: 1200px;
  width: 100%;
}

.projects-scroll::-webkit-scrollbar {
  height: 6px;
}

.projects-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.projects-scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 240, 255, 0.3);
  border-radius: 3px;
}

.projects-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 240, 255, 0.5);
}

.project-card {
  min-width: 300px;
  max-width: 340px;
  padding: 24px;
  cursor: pointer;
  position: relative;
  scroll-snap-align: start;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  flex-shrink: 0;
  z-index: 5;
  /* 确保卡片可见 */
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 240, 255, 0.1);
}

/* 角标装饰 */
.card-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--color-cyan);
  opacity: 0.5;
}

.card-corner.tl { top: 8px; left: 8px; border-top: 1px solid; border-left: 1px solid; }
.card-corner.tr { top: 8px; right: 8px; border-top: 1px solid; border-right: 1px solid; }
.card-corner.bl { bottom: 8px; left: 8px; border-bottom: 1px solid; border-left: 1px solid; }
.card-corner.br { bottom: 8px; right: 8px; border-bottom: 1px solid; border-right: 1px solid; }

.card-company-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--color-purple);
  margin-bottom: 8px;
}

.card-project-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-bright);
  margin-bottom: 12px;
}

.card-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 3px 8px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 2px;
  color: var(--color-cyan);
  background: rgba(0, 240, 255, 0.05);
}

.card-desc {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-action {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-cyan);
  opacity: 0.6;
  text-align: center;
  letter-spacing: 0.1em;
}

/* Terminal Modal */
.terminal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.terminal-modal {
  width: 100%;
  max-width: 700px;
  max-height: 80vh;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 240, 255, 0.3);
  background: rgba(10, 10, 10, 0.98);
  box-shadow: 0 0 60px rgba(0, 240, 255, 0.15);
}

.modal-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(0, 240, 255, 0.05);
  border-bottom: 1px solid rgba(0, 240, 255, 0.1);
}

.modal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.dot.red { background: #FF5F56; }
.dot.yellow { background: #FFBD2E; }
.dot.green { background: #27C93F; }

.modal-title {
  flex: 1;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-dim);
}

.modal-close {
  color: var(--color-text-dim);
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  max-height: calc(80vh - 50px);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.8;
}

.code-block {
  margin-bottom: 20px;
}

.code-line {
  padding: 2px 0;
  color: var(--color-text);
}

.code-line.indent {
  padding-left: 24px;
}

.code-line.comment {
  color: #6A9955;
}

.code-keyword {
  color: #C586C0;
  margin-right: 8px;
}

.code-var {
  color: #9CDCFE;
  margin-right: 8px;
}

.code-op {
  color: var(--color-text-dim);
  margin-right: 8px;
}

.code-string {
  color: #CE9178;
}

.code-bracket {
  color: var(--color-cyan);
}

.code-comma {
  color: var(--color-text-dim);
}

/* Terminal transition */
.terminal-enter-active {
  animation: glitchIn 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.terminal-leave-active {
  transition: all 0.3s ease;
}

.terminal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes glitchIn {
  0% {
    opacity: 0;
    transform: scale(0.8) skewX(-5deg);
    filter: hue-rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.02) skewX(2deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: scale(1) skewX(0deg);
  }
}

@media (max-width: 768px) {
  .project-card {
    min-width: 280px;
  }
}
</style>
