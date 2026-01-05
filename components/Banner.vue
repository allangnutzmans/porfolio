<script setup lang="ts">
const props = defineProps<{
  title: string,
  icon: string,
  text: string,
  image: string,
  btntext?: string,
  goTo: string
}>();
</script>
<template>
  <div class="content-wrapper-header flex items-center w-full justify-between perspective-[1000px] [transform-style:preserve-3d] rounded-[14px] p-10 max-[415px]:p-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png'),linear-gradient(to_right_top,#cf4af3,#e73bd7,#f631bc,#fd31a2,#ff3a8b,#ff4b78,#ff5e68,#ff705c,#ff8c51,#ffaa49,#ffc848,#ffe652)] bg-no-repeat">
    <div class="content-wrapper-context max-w-[350px]">
      <h3 class="img-content font-medium text-[17px] flex items-center m-0 [&_svg]:w-7 [&_svg]:mr-3.5">
        <slot name="icon"></slot>
        {{ title }}
      </h3>
      <div class="content-text font-normal text-sm mt-4 leading-[1.7em] text-[#ebecec] line-clamp-4 overflow-hidden text-ellipsis">
        {{ text }}
      </div>
      <button class="content-button bg-[#3a6df0] border-none py-2 px-[26px] text-white rounded-[20px] mt-4 cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1]" @click="navigateTo(goTo)">{{ btntext }}</button>
    </div>
    <slot name="image">
      <img class="content-wrapper-img w-[186px] object-cover -translate-y-[25px] object-center max-[570px]:w-[110px]" :src="image" alt="" />
    </slot>
  </div>
</template>
