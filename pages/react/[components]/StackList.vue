<script setup>

import LogoTS from '@/components/icons/LogoTS.vue'
import LogoShadcn from '@/components/icons/LogoShadcn.vue'
import LogoTailwind from '@/components/icons/LogoTailwind.vue'
import LogoVite from '@/components/icons/LogoVite.vue'
import LogoWebpack from '@/components/icons/LogoWebpack.vue'
import LogoMUI from '../../../components/icons/LogoMUI.vue'
import LogoTanstack from '../../../components/icons/LogoTanstack.vue'

const STACKWEB3 = [
  {
    name: 'Typescript',
    status: 'Advanced',
    icon: LogoTS
  },
  {
    name: 'Vite',
    status: 'Preffered',
    icon: LogoVite
  },
  {
    name: 'Webpack',
    status: 'Advanced',
    icon: LogoWebpack
  },
  {
    name: 'MUI',
    status: 'Updated',
    icon: LogoMUI
  },
  {
    name: 'Tailwind',
    status: 'Updated',
    icon: LogoTailwind
  },
  {
    name: 'Shadcn',
    status: 'Updated',
    icon: LogoShadcn
  },
  {
    name: 'Tanstack',
    status: 'Advanced',
    icon: LogoTanstack
  },
]
</script>

<template>
  <ul class="">
    <li
      class="adobe-product"
      v-for="(tech, index) in STACKWEB3"
      :key="index"
    >
      <div class="products" >
        <component :is="tech.icon" size="50" />
        {{ tech.name }}
      </div>
      <span class="status">
        <span
          class="status-circle green"
          v-if="tech.status == 'Advanced'"
        ></span>
        <span
          class="status-circle"
          v-if="tech.status == 'Update Available'"
        ></span>
        {{ tech.status }}
      </span>
      <div class="button-wrapper">
        <s-button
          variant="outline"
          v-if="tech.status == 'Advanced'"
        >
          Open
        </s-button>
        <button
          class="content-button status-button"
          v-if="tech.status == 'Update Available'"
          @click=""
        >
          Update this app
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
svg {
  border: 1px solid #e6e6e6;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}
</style>
