<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorDot = ref<HTMLElement | null>(null)
const cursorOutline = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const outlineX = ref(0)
const outlineY = ref(0)
const isHovering = ref(false)

let animId = 0

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.closest('a, button, .neon-btn, .project-card, .skill-node')) {
    isHovering.value = true
  }
}

const handleMouseOut = () => {
  isHovering.value = false
}

const animate = () => {
  outlineX.value += (mouseX.value - outlineX.value) * 0.15
  outlineY.value += (mouseY.value - outlineY.value) * 0.15
  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${mouseX.value}px, ${mouseY.value}px)`
  }
  if (cursorOutline.value) {
    cursorOutline.value.style.transform = `translate(${outlineX.value}px, ${outlineY.value}px)`
  }
  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
  cancelAnimationFrame(animId)
})
</script>

<template>
  <div class="cyber-cursor" :class="{ 'is-hovering': isHovering }">
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorOutline" class="cursor-outline"></div>
  </div>
</template>

<style scoped>
.cursor-dot {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: var(--color-cyan);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
  box-shadow: 0 0 10px var(--color-cyan);
}

.cursor-outline {
  position: fixed;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 240, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}

.is-hovering .cursor-dot {
  width: 12px;
  height: 12px;
  top: -6px;
  left: -6px;
  background: var(--color-purple);
  box-shadow: 0 0 20px var(--color-purple);
}

.is-hovering .cursor-outline {
  width: 60px;
  height: 60px;
  top: -30px;
  left: -30px;
  border-color: var(--color-purple);
}

@media (max-width: 768px) {
  .cursor-dot,
  .cursor-outline {
    display: none;
  }
}
</style>
