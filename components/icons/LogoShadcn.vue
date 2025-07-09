<script setup lang="ts">
defineProps<{
  size: string
}>();
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"  id="Layer_1" version="1.1" viewBox="0 0 256 256">
    <defs>
    </defs>
    <rect class="st0" width="256" height="256"/>
    <line class="st1" x1="208" y1="128" x2="128" y2="208"/>
    <line class="st1" x1="192" y1="40" x2="40" y2="192"/>
  </svg>
</template>

<style scoped>
.st0, .st1 {
  fill: none;
}

.st1 {
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 32px;
}
</style>

