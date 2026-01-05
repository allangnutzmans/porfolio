<script setup lang="ts">
defineProps<{
  title: string,
  subtext: string
}>();
</script>

<template>
  <div class="app-card flex flex-col w-[calc(33.3%-20px)] max-[1110px]:w-[calc(50%-20px)] max-[565px]:w-[calc(100%-20px)] text-[16px] bg-content-bg rounded-[14px] border border-theme-bg p-5 cursor-pointer transition duration-300 ease-in-out hover:scale-102 hover:bg-theme-bg max-[565px]:mt-0 [&_svg]:w-7 [&_svg]:rounded-md [&_svg]:mr-3 [&_svg]:shrink-0">
    <div class="flex items-center font-bold">
      <slot name="thumbnail"></slot>
    </div>
    <span class="font-bold flex items-center">
      {{ title }}
    </span>
    <div class="app-card__subtext text-sm font-normal leading-[1.6em] mt-5 border-b border-border pb-5">
      {{ subtext }}
    </div>
    <div class="app-card-buttons flex items-center ml-auto mt-4 gap-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
