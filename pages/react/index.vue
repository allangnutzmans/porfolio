<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import StackList from './[components]/StackList.vue'
</script>

<template>
  <div class="content-wrapper">
    <Banner
    title="React"
    text="Community boosted framework. Popuplar. Full of asdaksdmoasd "
    btntext="Start free trial"
    bg-image="react-banner-full.png"
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
