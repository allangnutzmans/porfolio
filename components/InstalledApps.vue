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
          @click="openUpdatePopup"
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

  <!-- Update Popup -->
  <Popup v-model="showUpdatePopup" title="Update Application">
    <template #subtitle>
      Are you sure you want to update this application?
    </template>
    <template #body>
      <div style="margin-top: 20px;">
        <p>This will download and install the latest version of the application.</p>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button @click="showUpdatePopup = false" class="content-button">
            Cancel
          </button>
          <button @click="showUpdatePopup = false" class="content-button" style="background: #1e59f1;">
            Update Now
          </button>
        </div>
      </div>
    </template>
  </Popup>
</template>
