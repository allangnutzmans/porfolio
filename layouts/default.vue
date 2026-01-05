<script setup>
import { useHead } from '#imports'
import { useScreenMode } from '@/store/useScreenMode'
import AppBar from '@/components/layout/AppBar.vue'
import AppSideBar from '@/components/layout/AppSideBar.vue'
import MainHeader from '@/components/layout/MainHeader.vue'

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
    <div 
      class="dark-light fixed bottom-[50px] right-[30px] z-[99999] h-10 w-10 cursor-pointer rounded-full bg-dropdown-bg p-2 shadow-[-1px_3px_8px_-1px_rgba(0,0,0,0.2)]" 
      @click="toggleDark"
    >
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 shrink-0 transition-all duration-500 fill-[#ffce45] stroke-[#ffce45] [.light-mode_&]:fill-transparent [.light-mode_&]:stroke-theme-color"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div 
      class="app-animator fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center transition-transform duration-300 scale-100 bg-transparent"
      :class="{ 'fullscreen-mode': screenMode === 'fullscreen' }"
    >
      <div 
        class="app flex flex-col w-full max-w-[1250px] max-h-[860px] h-[90vh] rounded-[14px] bg-[rgba(255,255,255,0.45)] transition-all duration-300 ease-in-out relative overflow-hidden backdrop-blur-[20px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,0.05)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent after:content-[''] after:absolute after:top-0 after:left-0 after:w-px after:h-full after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30"
        :class="{ '!max-w-[100vw] !max-h-[100vh] !h-screen !rounded-none !shadow-none': screenMode === 'fullscreen' }"
      >
        <AppBar />
        <div class="wrapper flex grow overflow-hidden rounded-[10px]">
          <AppSideBar />
          <div class="main-container flex flex-col grow">
            <MainHeader />
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
