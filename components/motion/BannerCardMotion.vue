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
    :style="{ backgroundImage: bgImage ? `url('/${bgImage}')` : undefined }"
  >
    <div class="banner-overlay"></div>
    <slot></slot>
    <slot name="image" class="banner-image-slot"></slot>
  </div>
</template>

<style scoped lang="scss">
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
