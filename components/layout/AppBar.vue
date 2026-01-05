<script setup>
import InnerWindowButtons from './InnerWindowButtons.vue'

const wide = ref(false)
const menu = ref([
  {
    href: '#',
    text: 'App',
    class: 'is-active',
  },
  {
    href: '#',
    text: 'Your work',
    class: '',
  },
  {
    href: '#',
    text: 'Discover',
    class: 'notify',
  },
  {
    href: '#',
    text: 'Market',
    class: 'notify',
  },
])

function isActive(index) {
  menu.value.forEach((element) => {
    element.class = element.class.replace('is-active', '')
  })
  menu.value[index].class += ' is-active'
}
</script>

<template>
  <div 
    class="header flex items-center shrink-0 h-[58px] w-full border-b border-border px-[30px] whitespace-nowrap max-[480px]:px-4 group" 
    :class="{ wide: wide }"
  >
    <InnerWindowButtons />
    <div class="header-menu flex items-center group-[.wide]:hidden">
<!--<a
        v-for="(item, index) in menu"
        :key="index"
        class="menu-link"
        :class="item.class"
        :href="item.href"
        @click.prevent="isActive(index)"
        >{{ item.text }}</a
      > -->
    </div>
    <div class="flex items-center h-10 w-full max-w-[400px] pl-4 rounded transition-all duration-400 group-[.wide]:max-w-[600px] group-[.wide]:mx-auto group-[.wide]:shadow-[0_0_0_1px_var(--border-color)] group-[.wide]:pl-0">
      <div class="relative w-full h-full">
        <svg
          class="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-inactive pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          class="w-full h-full border-none bg-search-bg rounded font-body text-[15px] font-medium px-5 pl-10 shadow-[0_0_0_2px_rgb(134_140_160_/_2%)] text-theme-color placeholder:font-body placeholder:text-inactive placeholder:text-[15px] placeholder:font-medium focus:outline-none"
          type="text"
          placeholder="Search"
          @focus="wide = true"
          @blur="wide = false"
        />
      </div>
    </div>
    <div class="header-profile flex items-center px-4 pl-10 ml-auto shrink-0 group-[.wide]:hidden">
      <div class="notification">
        <span class="notification-number bg-[#3a6df0] w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white">3</span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell w-[22px] text-[#f9fafb] shrink-0"
        >
          <path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
          />
        </svg>
      </div>
      <svg 
        viewBox="0 0 512 512" 
        fill="currentColor"
        class="w-[22px] text-[#f9fafb] shrink-0 ml-[22px] max-[945px]:hidden"
      >
        <path
          d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"
        />
      </svg>
      <img
        class="profile-img w-8 h-8 rounded-full object-cover border-2 border-theme-color ml-[22px]"
        src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80"
        alt=""
      />
    </div>
  </div>
</template>
