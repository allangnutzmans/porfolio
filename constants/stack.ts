import LogoSolidity from '@/components/icons/LogoSolidity.vue'
import LogoChainlink from '@/components/icons/LogoChainlink.vue'
import LogoEthereum from '@/components/icons/LogoEthereum.vue'
import LogoAlchemy from '@/components/icons/LogoAlchemy.vue'
import LogoFoundry from '@/components/icons/LogoFoundry.vue'
import LogoMetamask from '@/components/icons/LogoMetamask.vue'
import LogoTS from '@/components/icons/LogoTS.vue'
import LogoShadcn from '@/components/icons/LogoShadcn.vue'
import LogoTailwind from '@/components/icons/LogoTailwind.vue'
import LogoVite from '@/components/icons/LogoVite.vue'
import LogoWebpack from '@/components/icons/LogoWebpack.vue'
import LogoMUI from '@/components/icons/LogoMUI.vue'
import LogoTanstack from '@/components/icons/LogoTanstack.vue'

import LogoVuetify from '@/components/icons/LogoVuetify.vue'
import LogoVueUse from '@/components/icons/LogoVueUse.vue'
import LogoPinia from '@/components/icons/LogoPinia.vue'
import { Component } from 'nuxt/schema'

export type Stack = {
  name: string,
  status: string,
  icon: Component,
  category: string
}

export const STACK_WEB3: Stack[] = [
  {
    name: 'Ethereum',
    status: 'Advanced',
    icon: LogoEthereum,
    category: 'blockchain'
  },
  {
    name: 'Chainlink',
    status: 'Updated',
    icon: LogoChainlink,
    category: 'oracle'
  },
  {
    name: 'Solidity',
    status: 'Updated',
    icon: LogoSolidity,
    category: 'language'
  },
  {
    name: 'Foundry',
    status: 'Advanced',
    icon: LogoFoundry,
    category: 'development-tool'
  },
  {
    name: 'Alchemy',
    status: 'Update Available',
    icon: LogoAlchemy,
    category: 'infrastructure'
  },
  {
    name: 'Metamask',
    status: 'Update Available',
    icon: LogoMetamask,
    category: 'wallet'
  }
]

const STACK_JS: Stack[] = [
  {
    name: 'Typescript',
    status: 'Advanced',
    icon: LogoTS,
    category: 'language'
  },
  {
    name: 'Vite',
    status: 'Preffered',
    icon: LogoVite,
    category: 'bundler'
  },
  {
    name: 'Tailwind',
    status: 'Updated',
    icon: LogoTailwind,
    category: 'styling'
  },
  {
    name: 'Shadcn',
    status: 'Updated',
    icon: LogoShadcn,
    category: 'ui-library'
  },
  {
    name: 'Tanstack',
    status: 'Advanced',
    icon: LogoTanstack,
    category: 'data-management'
  },
]

export const STACK_VUE: Stack[] = [
  ...STACK_JS,
  {
    name: 'Vuetify',
    status: 'Updated',
    icon: LogoVuetify,
    category: 'ui-framework'
  },
  {
    name: 'Tailwind',
    status: 'Updated',
    icon: LogoTailwind,
    category: 'styling'
  },
  {
    name: 'Shadcn',
    status: 'Updated',
    icon: LogoShadcn,
    category: 'ui-library'
  },
  {
    name: 'Tanstack',
    status: 'Advanced',
    icon: LogoTanstack,
    category: 'data-management'
  },
  {
    name: 'Pinia',
    status: 'Advanced',
    icon: LogoPinia,
    category: 'state-management'
  },
  {
    name: 'VueUse',
    status: 'Updated',
    icon: LogoVueUse,
    category: 'utility-library'
  },
]

export const STACK_REACT: Stack[] = [
  ...STACK_JS,
  {
    name: 'Webpack',
    status: 'Advanced',
    icon: LogoWebpack,
    category: 'bundler'
  },
  {
    name: 'MUI',
    status: 'Updated',
    icon: LogoMUI,
    category: 'ui-library'
  },
];





