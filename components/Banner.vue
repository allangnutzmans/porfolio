<script setup lang="ts">
const props = defineProps<{
  title: string,
  icon: string,
  text: string,
  image: string,
  btntext: string
}>();
</script>
<template>
  <div class="content-wrapper-header">
    <div class="content-wrapper-context">
      <h3 class="img-content">
        <slot name="icon"></slot>
        {{ title }}
      </h3>
      <div class="content-text">
        {{ text }}
      </div>
      <button class="content-button">{{ btntext }}</button>
    </div>
    <slot name="image">
      <img class="content-wrapper-img" :src="image" alt="" />
    </slot>
  </div>
</template>
