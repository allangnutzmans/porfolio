<script setup>
import { useMainStore } from '@/store/useMainStore'
const mainStore = useMainStore()
const props = defineProps({
  title: String
})
</script>
<template>
  <div class="pop-up">
    <div class="pop-up__title">
      {{ title }}
      <svg
        class="close feather feather-x-circle"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        @click="mainStore.togglePopup()"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </div>
    <div class="pop-up__subtitle">
      <slot name="subtitle"></slot>
    </div>
    <slot name="body"></slot>
  </div>
</template>
