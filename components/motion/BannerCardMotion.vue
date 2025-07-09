<script setup lang="ts">
defineProps<{
  bgImage: string,
}>();
const cardRef = ref(null);
defineExpose({ cardRef })
</script>

<template>
  <div
    ref="cardRef"
    v-motion
    class="banner-container"
    :style="{ backgroundImage: bgImage ? `url('/${bgImage}')` : undefined }"
  >
    <div class="banner-overlay"></div>
    <slot></slot>
    <slot name="image" class="banner-image-slot"></slot>
  </div>
</template>

<style scoped lang="scss">
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
