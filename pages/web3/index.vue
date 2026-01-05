<script setup lang="ts">
import Banner from '@/components/motion/Banner.vue'
import { STACK_WEB3 } from '@/constants/stack'


</script>

<template>
  <div class="content-wrapper flex flex-col grow text-theme-color px-10 py-5 overflow-auto bg-theme-bg [scrollbar-width:thin] max-[510px]:p-5">
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
    <div class="content-section mt-[30px] flex flex-col">
      <div class="content-section-title text-content-title font-bold mb-3.5">Stack</div>
      <StackList :stack="STACK_WEB3"/>
    </div>
  </div>
</template>
