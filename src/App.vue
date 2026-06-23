<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import CyberCursor from './components/CyberCursor.vue'

let lenis: Lenis | null = null
let rafId: number = 0

onMounted(() => {
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  } catch (error) {
    console.error('[App.onMounted]', error)
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
})
</script>

<template>
  <CyberCursor />
  <main class="cyber-portfolio">
    <HeroSection />
    <ProfileSection />
    <SkillsSection />
    <TimelineSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.cyber-portfolio {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
