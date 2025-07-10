<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import BannerCardMotion from './BannerCardMotion.vue'
import BannerTextMotion from './BannerTextMotion.vue'

const props = defineProps<{
  title: string,
  icon: string,
  text: string,
  bgImage: string,
  btntext: string,
  align: {
    type: string,
    default: 'right'
  }
}>()

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
