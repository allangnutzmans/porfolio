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

const emit = defineEmits<{
  action: []
}>()

const textRef = ref(null)
defineExpose({ textRef })

const handleButtonClick = () => {
  emit('action')
}
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
    <button class="content-button-highlight" @click="handleButtonClick">{{ btntext }}</button>
  </div>
</template>
