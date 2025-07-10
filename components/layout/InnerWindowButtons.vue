<script setup lang="ts">
import { useScreenMode } from '@/store/useScreenMode'
const { toggleScreenMode } = useScreenMode()
</script>

<template>
    <div class="macbook-buttons">
      <span class="btn" :style="{ background: '#f96057' }" />
      <span role="button" @click="toggleScreenMode" class="btn" :style="{ background: '#f8ce52' }" />
      <span class="btn" :style="{ background: '#5fcf65' }" />
    </div>
</template>


<style scoped>
.macbook-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 50%;
  margin-right: 195px;
  flex-shrink: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
}
.btn {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}
.btn:hover {
    cursor: pointer;
    filter: brightness(0.7);
}
</style>

