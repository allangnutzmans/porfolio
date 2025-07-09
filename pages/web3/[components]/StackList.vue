<script setup>
import LogoSolidity from '@/components/icons/LogoSolidity.vue'
import LogoChainlink from '@/components/icons/LogoChainlink.vue'
import LogoEthereum from '@/components/icons/LogoEthereum.vue'
import LogoAlchemy from '@/components/icons/LogoAlchemy.vue'
import LogoFoundry from '@/components/icons/LogoFoundry.vue'
import LogoMetamask from '@/components/icons/LogoMetamask.vue'

const STACKWEB3 = [
  {
    name: 'Ethereum',
    status: 'Advanced',
    icon: LogoEthereum
  },
  {
    name: 'Chainlink',
    status: 'Updated',
    icon: LogoChainlink
  },
  {
    name: 'Solidity',
    status: 'Updated',
    icon: LogoSolidity
  },
  {
    name: 'Foundry',
    status: 'Advanced',
    icon: LogoFoundry
  },
  {
    name: 'Alchemy',
    status: 'Update Available',
    icon: LogoAlchemy
  },
  {
    name: 'Metamask',
    status: 'Update Available',
    icon: LogoMetamask
  }
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
