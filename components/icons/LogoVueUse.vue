<script setup lang="ts">
defineProps<{
  size: string
}>();
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 1000 1000">
    <defs></defs>
    <path class="a" d="M735.07,67.05V531.58c0,129.83-105.24,235.07-235.07,235.07S264.93,661.41,264.93,531.58V67.05h166.3V531.58a68.77,68.77,0,1,0,137.54,0V67.05Z"/>
    <path class="b" d="M901.36,67.05V531.58C901.36,753.25,721.67,933,500,933S98.64,753.25,98.64,531.58V67.05H264.93V531.58c0,129.83,105.25,235.07,235.07,235.07S735.07,661.41,735.07,531.58V67.05Z"/>
  </svg>
</template>

<style scoped>
.a{fill:#35495e;}
.b{fill:#41b883;}
</style>
