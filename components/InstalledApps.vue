<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store/useMainStore'
import IconsPs from '@/components/icons/remove/ps.vue'
import IconsAi from '@/components/icons/remove/ai.vue'
import IconsAe from '@/components/icons/remove/ae.vue'

const mainStore = useMainStore()
const showUpdatePopup = ref(false)

function isVisible(event) {
  event.currentTarget.classList.toggle('is-active')
  const overlay = document.querySelector('.content-wrapper')
  if (overlay) overlay.classList.add('overlay')
}
function blurred() {
  const overlay = document.querySelector('.content-wrapper')
  if (overlay) overlay.classList.remove('overlay')
  const allmenus = document.querySelectorAll('.dropdown')
  allmenus.forEach((ele) => {
    ele.classList.remove('is-active')
  })
}

const openUpdatePopup = () => {
  showUpdatePopup.value = true
}
</script>

<template>
  <ul class="w-full h-full flex flex-col justify-around bg-content-bg p-0 m-0 rounded-[14px] border border-theme-bg cursor-pointer divide-y divide-border">
    <li
      class="adobe-product list-none px-[18px] py-[10px] flex items-center text-[16px] w-full h-full whitespace-nowrap transition duration-300 hover:bg-theme-bg hover:first:rounded-t-[13px] hover:last:rounded-b-[13px]"
      v-for="(product, index) in mainStore.installedapps"
      :key="index"
    >
      <div class="products flex items-center w-[150px] max-[480px]:w-[120px]">
        <IconsPs v-if="product.appid == 1" />
        <IconsAi v-if="product.appid == 2" />
        <IconsAe v-if="product.appid == 3" />
        {{ product.name }}
      </div>
      <span class="status ml-auto w-[140px] text-[15px] relative max-[700px]:hidden">
        <span
          class="status-circle w-1.5 h-1.5 bg-[#396df0] absolute rounded-full top-1 -left-5"
          :class="{ 'bg-[#3bf083]': product.status == 'Updated' }"
          v-if="product.status == 'Updated'"
        ></span>
        <span
          class="status-circle w-1.5 h-1.5 bg-[#396df0] absolute rounded-full top-1 -left-5"
          v-if="product.status == 'Update Available'"
        ></span>
        {{ product.status }}</span
      >
      <div class="button-wrapper flex items-center justify-end w-[187px] ml-auto max-[480px]:w-auto">
        <s-button
          variant="outline"
          v-if="product.status == 'Updated'"
        >
          Open
        </s-button>
        <button
          class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5"
          v-if="product.status == 'Update Available'"
          @click="openUpdatePopup"
        >
          Update this app
        </button>
        <div class="menu w-[5px] h-[5px] bg-[var(--button-inactive)] rounded-full shadow-[7px_0_0_0_var(--button-inactive),14px_0_0_0_var(--button-inactive)] mx-3 max-[415px]:hidden"></div>
        <button class="dropdown relative h-[53px] w-[40px] -top-6 -left-[5px] flex bg-transparent border-none cursor-pointer group" @click="isVisible" @blur="blurred">
          <ul class="absolute bg-dropdown-bg h-[110px] w-[120px] right-0 top-5 pointer-events-none opacity-0 translate-y-[10px] transition-all duration-400 ease-in-out group-[.is-active]:opacity-100 group-[.is-active]:pointer-events-auto group-[.is-active]:translate-y-[25px] shadow-lg rounded-md z-20 flex flex-col justify-center border-none divide-none">
            <li class="hover:bg-dropdown-hover py-2 px-3"><a href="#" class="no-underline text-theme-color text-[12px]">Go to Discover</a></li>
            <li class="hover:bg-dropdown-hover py-2 px-3"><a href="#" class="no-underline text-theme-color text-[12px]">Learn more</a></li>
            <li class="hover:bg-dropdown-hover py-2 px-3"><a href="#" class="no-underline text-theme-color text-[12px]">Uninstall</a></li>
          </ul>
        </button>
      </div>
    </li>
  </ul>

  <!-- Update Popup -->
  <Popup v-model="showUpdatePopup" title="Update Application">
    <template #subtitle>
      Are you sure you want to update this application?
    </template>
    <template #body>
      <div style="margin-top: 20px;">
        <p>This will download and install the latest version of the application.</p>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button @click="showUpdatePopup = false" class="content-button bg-[#3a6df0] border-none py-2 px-[26px] text-white rounded-[20px] mt-4 cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1]">
            Cancel
          </button>
          <button @click="showUpdatePopup = false" class="content-button bg-[#3a6df0] border-none py-2 px-[26px] text-white rounded-[20px] mt-4 cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1]" style="background: #1e59f1;">
            Update Now
          </button>
        </div>
      </div>
    </template>
  </Popup>
</template>
