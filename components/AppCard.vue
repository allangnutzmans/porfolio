<script setup lang="ts">
defineProps<{
  title: string,
  subtext: string
}>();
</script>

<template>
  <div class="app-card">
    <span>
      <slot name="icon"></slot>
      {{ title }}
    </span>
    <div class="app-card__subtext">
      {{ subtext }}
    </div>
    <div class="app-card-buttons">
      <slot name="footer"></slot>

      <div class="menu"></div>
    </div>
  </div>
</template>
