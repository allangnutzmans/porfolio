<script setup>
const props = defineProps({
  title: String,
  icon: String,
  text: String,
  image: String,
  btntext: String
})
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
