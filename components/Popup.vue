<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  title: String,
  width: [String, Number],
  height: [String, Number]
})

const model = defineModel<boolean>();

const closePopup = () => {
  model.value = false;
}

const handleOverlayClick = (event: Event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

// Handle escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && model.value) {
    closePopup();
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
})

const popupStyle = computed(() => {
  return {
    width: props.width ? (typeof props.width === 'number' ? props.width + 'px' : props.width) : '500px',
    height: props.height ? (typeof props.height === 'number' ? props.height + 'px' : props.height) : 'auto',
  }
})
</script>
<template>
  <div class="overlay-app" :class="{ 'is-active': model }" @click="handleOverlayClick">
    <div class="pop-up" :class="{ 'visible': model }" :style="popupStyle">
      <div class="pop-up__header">
        <span @click="closePopup" class="macbook-buttons-btn" :style="{ background: '#f96057'}" />
      </div>
      <div class="pop-up__title">
        {{ props.title }}
      </div>
      <div class="pop-up__wrapper">
        <div class="pop-up__subtitle">
          <slot name="subtitle"></slot>
        </div>
        <div class="pop-up__body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
