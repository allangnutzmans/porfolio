<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
  text: String,
  btntext: String,
  align: {
    type: String,
    default: 'right'
  }
})
const textRef = ref(null)
defineExpose({ textRef })
</script>

<template>
  <div ref="textRef" v-motion class="banner-content" :class="[`align-${align}`]">
    <h3 class="img-content">
      <slot name="icon"></slot>
      {{ title }}
    </h3>
    <div>
      {{ text }}
    </div>
    <button class="content-button-highlight">{{ btntext }}</button>
  </div>
</template>
