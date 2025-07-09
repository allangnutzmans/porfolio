<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMotion } from '@vueuse/motion'
import BannerCardMotion from './BannerCardMotion.vue'
import BannerTextMotion from './BannerTextMotion.vue'

const props = defineProps({
  title: String,
  icon: String,
  text: String,
  bgImage: String,
  btntext: String,
  align: {
    type: String,
    default: 'right'
  }
})

const cardRef = ref(null)
const textRef = ref(null)

const { motionProperties: cardMotion } = useMotion(cardRef)
const { motionProperties: textMotion } = useMotion(textRef)

const moveBanner = (e: MouseEvent) => {
  const w = window.innerWidth
  const h = window.innerHeight
  const x = (e.clientX - w / 2) / (w / 2)
  const y = (e.clientY - h / 2) / (h / 2)
  cardMotion.rotateX = y * -8
  cardMotion.rotateY = x * 8
  cardMotion.z = 15
  textMotion.rotateX = y * -2.5
  textMotion.rotateY = x * 5
  textMotion.z = 0
}

onMounted(() => {
  window.addEventListener('mousemove', moveBanner)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', moveBanner)
})
</script>

<template>
  <div class="banner-outer">
    <BannerCardMotion
      ref="cardRef"
      v-motion
      :bgImage="bgImage"
      class="banner-container"
    >
      <BannerTextMotion
        ref="textRef"
        v-motion
        :title="title"
        :icon="icon"
        :text="text"
        :btntext="btntext"
        :align="align"
      >
        <template #icon><slot name="icon" /></template>
      </BannerTextMotion>
      <slot name="image" class="banner-image-slot"></slot>
    </BannerCardMotion>
  </div>
</template>

<style scoped lang="scss">
.banner-outer {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.banner-container {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  min-height: 220px;
  padding: 2rem 2.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.1s ease-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  flex: 0 1 auto;
  width: auto;
  &:hover {
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
  border-radius: 1.5rem;
}

.banner-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  color: #fff;
  width: 100%;
}

.img-content {
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 
    0 2px 12px rgba(0, 0, 0, 0.25),
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 8px 30px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
}

.banner-content > div {
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
}

.content-button {
  background: #fff;
  color: #222;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.10),
    0 4px 16px rgba(0, 0, 0, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
  pointer-events: auto;
  &:hover {
    background: #222;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 8px 24px rgba(0, 0, 0, 0.2),
      0 12px 32px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.4));
  }
}

.banner-image-slot {
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  z-index: 2;
  max-width: 30%;
  max-height: 80%;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.2));
}
</style>
