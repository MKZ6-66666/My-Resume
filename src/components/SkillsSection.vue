<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillsData } from '../data/resume'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const activeSkill = ref<number | null>(null)
const typedDetail = ref('')
const isTyping = ref(false)

let typeTimer: number | null = null

// 计算圆周长和偏移量
const circumference = 2 * Math.PI * 42
const getDashOffset = (level: number) => circumference * (1 - level / 100)

const typeDetail = (text: string) => {
  if (typeTimer) clearInterval(typeTimer)
  typedDetail.value = ''
  isTyping.value = true
  let i = 0
  typeTimer = window.setInterval(() => {
    if (i < text.length) {
      typedDetail.value += text.charAt(i)
      i++
    } else {
      if (typeTimer) clearInterval(typeTimer)
      isTyping.value = false
    }
  }, 30)
}

const handleSkillClick = (skill: typeof skillsData[0]) => {
  if (activeSkill.value === skill.id) {
    activeSkill.value = null
    typedDetail.value = ''
    return
  }
  activeSkill.value = skill.id
  typeDetail(skill.detail)
}

onMounted(() => {
  // 默认选中第一个技能
  if (skillsData.length > 0) {
    activeSkill.value = skillsData[0].id
    typeDetail(skillsData[0].detail)
  }

  if (!sectionRef.value) return
  nextTick(() => {
    setTimeout(() => {
      const nodes = sectionRef.value!.querySelectorAll('.skill-node')
      gsap.fromTo(nodes,
        { scale: 0.6, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.value!,
            start: 'top 75%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.06,
            from: 'center',
          },
          ease: 'back.out(1.7)',
        }
      )
      ScrollTrigger.refresh()
    }, 100)
  })
})
</script>

<template>
  <section ref="sectionRef" class="section skills-section">
    <h2 class="section-title">Skill Matrix</h2>

    <div class="skills-container">
      <!-- 技能树 -->
      <div class="skill-tree">
        <div
          v-for="skill in skillsData"
          :key="skill.id"
          class="skill-node"
          :class="{ 'is-active': activeSkill === skill.id }"
          @click="handleSkillClick(skill)"
        >
          <div class="node-ring">
            <svg viewBox="0 0 100 100" class="node-svg">
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="rgba(0, 240, 255, 0.1)"
                stroke-width="2"
              />
              <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="var(--color-cyan)"
                stroke-width="2.5"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="getDashOffset(skill.level)"
                stroke-linecap="round"
                class="node-progress"
              />
            </svg>
            <div class="node-level">{{ skill.level }}</div>
          </div>
          <div class="node-name">{{ skill.name }}</div>
          <div class="node-tags">
            <span v-for="tag in skill.tags.slice(0, 3)" :key="tag" class="node-tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <!-- 详情终端 -->
      <div class="skill-detail-terminal" :class="{ 'is-visible': activeSkill !== null }">
        <div class="terminal-header">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
          <span class="terminal-title">skill_detail.exe</span>
        </div>
        <div class="terminal-body">
          <span class="terminal-prompt">&gt;</span>
          <span class="terminal-text">{{ typedDetail }}</span>
          <span v-if="isTyping" class="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
}

.skills-container {
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 1;
}

.skill-tree {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.skill-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 10px;
  border-radius: 12px;
  background: rgba(17, 17, 17, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
}

.skill-node:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
  transform: translateY(-4px);
}

.skill-node.is-active {
  border-color: var(--color-cyan);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
  background: rgba(0, 240, 255, 0.05);
}

.node-ring {
  position: relative;
  width: 80px;
  height: 80px;
}

.node-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.node-progress {
  transition: stroke-dashoffset 1s ease;
}

.node-level {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-cyan);
  text-shadow: var(--glow-cyan);
}

.node-name {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text);
  text-align: center;
}

.node-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
}

.node-tag {
  font-size: 0.55rem;
  padding: 2px 6px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 2px;
  color: var(--color-text-dim);
  font-family: var(--font-mono);
}

/* Terminal */
.skill-detail-terminal {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 240, 255, 0.2);
  background: rgba(10, 10, 10, 0.95);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
}

.skill-detail-terminal.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: rgba(0, 240, 255, 0.05);
  border-bottom: 1px solid rgba(0, 240, 255, 0.1);
}

.terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.terminal-dot.red { background: #FF5F56; }
.terminal-dot.yellow { background: #FFBD2E; }
.terminal-dot.green { background: #27C93F; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-dim);
  margin-left: 8px;
}

.terminal-body {
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.8;
  min-height: 60px;
}

.terminal-prompt {
  color: var(--color-cyan);
  margin-right: 8px;
}

.terminal-text {
  color: var(--color-green);
}

.terminal-cursor {
  color: var(--color-cyan);
  animation: typing-cursor 0.6s infinite;
}

@media (max-width: 768px) {
  .skill-tree {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 16px;
  }
}
</style>
