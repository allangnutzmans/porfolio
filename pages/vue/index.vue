<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import StackList from './[components]/StackList.vue'
</script>

<template>
  <div class="content-wrapper">
    <Banner
    title="Vue"
    text="Leaveraging the latest Vue 3 composition API for best perfomance and code readability."
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
      <StackList />
    </div>
  </div>
</template>
