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
  <div 
    class="overlay-app fixed inset-0 pointer-events-auto bg-overlay-bg transition duration-300 z-[999] flex items-center justify-center opacity-0 invisible" 
    :class="{ 'is-active visible opacity-100': model }" 
    @click="handleOverlayClick"
  >
    <div 
      class="pop-up overflow-y-auto shadow-[0_6px_30px_rgba(0,0,0,0.4)] transition-all duration-300 z-10 bg-popup-bg rounded-xl flex flex-col whitespace-normal min-w-[280px] min-h-[120px] backdrop-blur-[24px] max-[570px]:w-full max-[570px]:!min-w-0 opacity-0 invisible" 
      :class="{ 'visible opacity-100': model }" 
      :style="popupStyle"
    >
      <div class="pop-up__header w-full flex items-center pl-[5px] h-[25px] bg-popup-header">
        <span @click="closePopup" class="macbook-buttons-btn" :style="{ background: '#f96057'}" />
      </div>
      <div class="pop-up__title min-h-[30px] text-[1.2rem] font-semibold text-theme-color py-5 pl-[15px] bg-popup-title shadow-[0_4px_10px_var(--popup-title-bg)]">
        {{ props.title }}
      </div>
      <div class="pop-up__wrapper bg-[rgba(255,255,255,0.10)] shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] px-5 pb-[30px] flex flex-col items-stretch max-[570px]:pt-6 max-[570px]:px-2 max-[570px]:pb-4">
        <div class="pop-up__subtitle whitespace-normal my-5 text-sm font-normal leading-[1.8em] text-theme-color [&_a]:text-theme-color">
          <slot name="subtitle"></slot>
        </div>
        <div class="pop-up__body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
