<script setup lang="ts">
defineProps<{
  size: string
}>();
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"  viewBox="0 0 600 600">
      <path d="m300 .1 265 149.9v299.9l-265 149.9-265-149.9v-299.9z" fill="#fff"/>
      <path d="m517.7 439.5-208.9 118.3v-92l130.2-71.7zm14.3-12.9v-247.2l-76.4 44.1v159zm-450.5 12.9 208.9 118.2v-92l-130.2-71.6zm-14.3-12.9v-247.2l76.4 44.1v159zm8.9-263.2 214.3-121.2v89l-137.3 75.5-1.1.6zm446.9 0-214.2-121.2v89l137.2 75.6 1.1.6z" fill="#8ed6fb"/>
      <path d="m290.4 444.8-128.4-70.7v-139.9l128.4 74.1zm18.4 0 128.4-70.6v-140l-128.4 74.1zm-138.2-226.8 129-70.9 128.9 70.9-128.9 74.4z" fill="#1c78c0"/>
    </svg>
</template>
