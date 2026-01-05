<script setup lang="ts">
import type { Stack } from '../constants/stack';

const props = defineProps<{
  stack: Stack[];
  variant?: 'default' | 'compact';
}>();

const { variant = 'default' } = props;
const openDocumentation  = (link: string) => {
  window.open(link) 
}

</script>

<template>
  <ul class="w-full h-full flex flex-col justify-around bg-content-bg p-0 m-0 rounded-[14px] border border-theme-bg cursor-pointer divide-y divide-border">
    <li
      class="adobe-product list-none px-[18px] py-[10px] flex items-center text-[16px] w-full h-full whitespace-nowrap transition duration-300 hover:bg-theme-bg hover:first:rounded-t-[13px] hover:last:rounded-b-[13px]"
      v-for="tech in props.stack"
      :key="tech.name"
    >
      <div class="products flex items-center w-[150px] max-[480px]:w-[120px] [&_svg]:border [&_svg]:border-[#e6e6e6] [&_svg]:bg-[rgba(255,255,255,0.28)] [&_svg]:rounded-md [&_svg]:mr-4 [&_svg]:shrink-0">
        <component :is="tech.icon" size="50" />
        {{ tech.name }}
      </div>
      <span class="status ml-auto w-[140px] text-[15px] relative max-[700px]:hidden">
        <span
          class="status-circle w-1.5 h-1.5 bg-[#396df0] absolute rounded-full top-1 -left-5"
          :class="{ 'bg-[#3bf083]': tech.status == 'Advanced' }"
          v-if="tech.status == 'Advanced'"
        ></span>
        <span
          class="status-circle w-1.5 h-1.5 bg-[#396df0] absolute rounded-full top-1 -left-5"
          v-if="tech.status == 'Update Available'"
        ></span>
        {{ tech.status }}
      </span>
      <div class="button-wrapper flex items-center justify-end w-[187px] ml-auto gap-2 max-[480px]:w-auto" v-if="variant === 'default'">
      <!-- TODO: RELATIONSHIP THIS WITH APPS -->
<!--    <button
          class="content-button status-button"
          @click=""
        >
          Apps with
        </button> -->
        <s-button
          variant="outline"
          @click="openDocumentation(tech.doc_link)"
        >
          Docs
        </s-button>
      </div>
    </li>
  </ul>
</template>
