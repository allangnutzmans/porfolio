import type { Component } from 'vue'

import LogoSolidity from '@/components/icons/LogoSolidity.vue'
import LogoChainlink from '@/components/icons/LogoChainlink.vue'
import LogoEthereum from '@/components/icons/LogoEthereum.vue'
import LogoAlchemy from '@/components/icons/LogoAlchemy.vue'
import LogoFoundry from '@/components/icons/LogoFoundry.vue'
import LogoMetamask from '@/components/icons/LogoMetamask.vue'
import LogoWagmi from '@/components/icons/LogoWagmi.vue'
import LogoTS from '@/components/icons/LogoTS.vue'
import LogoShadcn from '@/components/icons/LogoShadcn.vue'
import LogoTailwind from '@/components/icons/LogoTailwind.vue'
import LogoVite from '@/components/icons/LogoVite.vue'
import LogoWebpack from '@/components/icons/LogoWebpack.vue'
import LogoMUI from '@/components/icons/LogoMUI.vue'
import LogoTanstack from '@/components/icons/LogoTanstack.vue'
import LogoZod from '@/components/icons/LogoZod.vue'

import LogoVuetify from '@/components/icons/LogoVuetify.vue'
import LogoVueUse from '@/components/icons/LogoVueUse.vue'
import LogoPinia from '@/components/icons/LogoPinia.vue'

export type Stack = {
  name: string,
  status: string,
  icon: Component,
  category: string
  doc_link: string
}

export const STACK_WEB3: Stack[] = [
  {
    name: 'Ethereum',
    status: 'Advanced',
    icon: LogoEthereum,
    category: 'blockchain',
    doc_link: 'https://ethereum.org/en/developers/docs/'
  },
  {
    name: 'Chainlink',
    status: 'Updated',
    icon: LogoChainlink,
    category: 'oracle',
    doc_link: 'https://docs.chain.link/'
  },
  {
    name: 'Solidity',
    status: 'Updated',
    icon: LogoSolidity,
    category: 'language',
    doc_link: 'https://docs.soliditylang.org/'
  },
  {
    name: 'Foundry',
    status: 'Advanced',
    icon: LogoFoundry,
    category: 'development-tool',
    doc_link: 'https://book.getfoundry.sh/'
  },
  {
    name: 'Alchemy',
    status: 'Update Available',
    icon: LogoAlchemy,
    category: 'infrastructure',
    doc_link: 'https://docs.alchemy.com/alchemy/'
  },
  {
    name: 'Metamask',
    status: 'Update Available',
    icon: LogoMetamask,
    category: 'wallet',
    doc_link: 'https://docs.metamask.io/'
  },
  {
    name: 'Wagmi',
    status: 'Update Available',
    icon: LogoWagmi,
    category: 'wallet',
    doc_link: 'https://wagmi.sh/docs/'
  }
]

const STACK_JS: Stack[] = [
  {
    name: 'Typescript',
    status: 'Advanced',
    icon: LogoTS,
    category: 'language',
    doc_link: 'https://www.typescriptlang.org/docs/'
  },
  {
    name: 'Vite',
    status: 'Preffered',
    icon: LogoVite,
    category: 'bundler',
    doc_link: 'https://vitejs.dev/guide/'
  },
  {
    name: 'Tailwind',
    status: 'Updated',
    icon: LogoTailwind,
    category: 'styling',
    doc_link: 'https://tailwindcss.com/docs'
  },
  {
    name: 'Shadcn',
    status: 'Updated',
    icon: LogoShadcn,
    category: 'ui-library',
    doc_link: 'https://ui.shadcn.com/docs'
  },
  {
    name: 'Zod',
    status: 'Updated',
    icon: LogoZod,
    category: 'validation-library',
    doc_link: 'https://zod.dev/'
  },
  {
    name: 'Tanstack',
    status: 'Advanced',
    icon: LogoTanstack,
    category: 'data-management',
    doc_link: 'https://tanstack.com/query/latest'
  },
]

export const STACK_VUE: Stack[] = [
  ...STACK_JS,
  {
    name: 'Vuetify',
    status: 'Updated',
    icon: LogoVuetify,
    category: 'ui-framework',
    doc_link: 'https://vuetifyjs.com/en/getting-started/installation/'
  },
  {
    name: 'Pinia',
    status: 'Advanced',
    icon: LogoPinia,
    category: 'state-management',
    doc_link: 'https://pinia.vuejs.org/'
  },
  {
    name: 'VueUse',
    status: 'Updated',
    icon: LogoVueUse,
    category: 'utility-library',
    doc_link: 'https://vueuse.org/core/'
  },
]

export const STACK_REACT: Stack[] = [
  ...STACK_JS,
  {
    name: 'Webpack',
    status: 'Advanced',
    icon: LogoWebpack,
    category: 'bundler',
    doc_link: 'https://webpack.js.org/concepts/'
  },
  {
    name: 'MUI',
    status: 'Updated',
    icon: LogoMUI,
    category: 'ui-library',
    doc_link: 'https://mui.com/material-ui/getting-started/overview/'
  },
];
