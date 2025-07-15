<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import StackList from '@/components/StackList.vue'
import { STACK_VUE } from '@/constants/stack'
</script>

<template>
  <div class="content-wrapper">
    <Banner
    title="Vue"
    text="Leaveraging the latest Vue 3 composition API for best perfomance and code readability.
Grab yourself 10 free images from Adobe Stock in a 30-day free trial
        plan and find perfect image, that will help you with your new project."
    btntext="Start free trial"
    bg-image="vue-banner.png"
    align="right"
  >
    <template #icon>
<!--        <v-icon height="50" name="si-ipfs" />
        <v-icon height="50" name="si-chainlink" />
        <v-icon height="50" name="fa-ethereum" />
        <v-icon height="50" name="si-solidity" />-->
    </template>
    <template #image></template>
  </Banner>
    <div class="content-section">
      <div class="content-section-title">Stack</div>
      <StackList :stack="STACK_VUE" />
    </div>
  </div>
</template>
