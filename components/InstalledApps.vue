<script setup>
import { useMainStore } from '@/store/useMainStore'
import IconsPs from '@/components/icons/remove/ps.vue'
import IconsAi from '@/components/icons/remove/ai.vue'
import IconsAe from '@/components/icons/remove/ae.vue'

const mainStore = useMainStore()

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
</script>

<template>
  <ul>
    <li
      class="adobe-product"
      v-for="(product, index) in mainStore.installedapps"
      :key="index"
    >
      <div class="products">
        <IconsPs v-if="product.appid == 1" />
        <IconsAi v-if="product.appid == 2" />
        <IconsAe v-if="product.appid == 3" />
        {{ product.name }}
      </div>
      <span class="status">
        <span
          class="status-circle green"
          v-if="product.status == 'Updated'"
        ></span>
        <span
          class="status-circle"
          v-if="product.status == 'Update Available'"
        ></span>
        {{ product.status }}</span
      >
      <div class="button-wrapper">
        <s-button
          variant="outline"
          v-if="product.status == 'Updated'"
        >
          Open
        </s-button>
        <button
          class="content-button status-button"
          v-if="product.status == 'Update Available'"
          @click="mainStore.togglePopup()"
        >
          Update this app
        </button>
        <div class="menu">
          <button class="dropdown" @click="isVisible" @blur="blurred">
            <ul>
              <li><a href="#">Go to Discover</a></li>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Uninstall</a></li>
            </ul>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>
