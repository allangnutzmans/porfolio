<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import { STACK_WEB3 } from '@/constants/stack'


</script>

<template>
  <div class="content-wrapper">
    <Banner
      title="Web 3"
      text="Explore the future of decentralized apps and NFTs experiences,
      that bring ideas to life online."
      btntext="Explore Projects"
      bg-image="web3-banner-blue-full.png"
      align="right"
      goTo="/web3/projects"
  >
    <template #icon>
        <v-icon height="50" name="si-ipfs" />
        <v-icon height="50" name="si-chainlink" />
        <v-icon height="50" name="fa-ethereum" />
        <v-icon height="50" name="si-solidity" />
    </template>
    <template #image></template>
  </Banner>
    <div class="content-section">
      <div class="content-section-title">Stack</div>
      <StackList :stack="STACK_WEB3"/>
    </div>
  </div>
</template>
