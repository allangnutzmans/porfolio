<script setup lang="ts">
import { useScreenMode } from '@/store/useScreenMode'
const { toggleScreenMode } = useScreenMode()
</script>

<template>
    <div class="macbook-buttons">
      <span class="macbook-buttons-btn" :style="{ background: '#f96057' }" />
      <span role="button" @click="toggleScreenMode" class="macbook-buttons-btn" :style="{ background: '#f8ce52' }" />
      <span class="macbook-buttons-btn" :style="{ background: '#5fcf65' }" />
    </div>
</template>


