<script setup>
import { useHead } from '@unhead/vue'
import { useMainStore } from '@/store/useMainStore'
import { useScreenMode } from '@/store/useScreenMode'
import AppBar from '@/components/layout/AppBar.vue'
import AppSideBar from '@/components/layout/AppSideBar.vue'
import MainHeader from '@/components/layout/MainHeader.vue'

const mainStore = useMainStore()
const { screenMode } = useScreenMode()
const dark = ref('light-mode')

function toggleDark() {
  if (dark.value === 'light-mode') {
    dark.value = 'dark-mode'
    localStorage.setItem('globalDark', 'dark-mode')
  } else {
    dark.value = 'light-mode'
    localStorage.setItem('globalDark', 'light-mode')
  }
}

onBeforeMount(() => {
  if (localStorage.getItem('globalDark')) {
    dark.value = localStorage.getItem('globalDark')
  }
})

watch(dark, (val) => {
  useHead({ bodyAttrs: { class: val } })
}, { immediate: true })
</script>

<template>
  <div>
    <div class="dark-light" @click="toggleDark">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div :class="['app-animator', { 'fullscreen-mode': screenMode === 'fullscreen' }]">
      <div class="app">
        <AppBar />
        <div class="wrapper">
          <AppSideBar />
          <div class="main-container">
            <MainHeader />
            <NuxtPage />
          </div>
        </div>
        <div
          class="overlay-app"
          :class="{ 'is-active': mainStore.popup }"
          @click="mainStore.togglePopup()"
        ></div>
      </div>
    </div>
  </div>
</template>
