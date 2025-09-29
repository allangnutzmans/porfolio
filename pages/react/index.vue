<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import StackList from '@/components/StackList.vue'
import { STACK_REACT } from '@/constants/stack'
</script>

<template>
  <div class="content-wrapper">
    <Banner
    title="React"
    text="Community boosted framework. Popuplar."
    bg-image="react-banner-full.png"
    align="right"
    goTo="/react/projects"
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
      <StackList :stack="STACK_REACT" />
    </div>
  </div>
</template>
