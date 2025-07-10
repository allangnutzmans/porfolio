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
