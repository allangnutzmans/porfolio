<script setup lang="ts">
import { useScreenMode } from '@/store/useScreenMode'
const { toggleScreenMode } = useScreenMode()
</script>

<template>
    <div class="macbook-buttons flex gap-2 items-center rounded-full mr-[195px] shrink-0 max-[945px]:hidden">
      <span class="macbook-buttons-btn inline-block w-[14px] h-[14px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:cursor-pointer hover:brightness-75" :style="{ background: '#f96057' }" />
      <span role="button" @click="toggleScreenMode" class="macbook-buttons-btn inline-block w-[14px] h-[14px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:cursor-pointer hover:brightness-75" :style="{ background: '#f8ce52' }" />
      <span class="macbook-buttons-btn inline-block w-[14px] h-[14px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:cursor-pointer hover:brightness-75" :style="{ background: '#5fcf65' }" />
    </div>
</template>


