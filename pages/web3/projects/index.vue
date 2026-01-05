<script setup lang="ts">
import { ref, computed } from 'vue'
import { STACK_WEB3, STACK_VUE, STACK_REACT, type Stack } from '@/constants/stack'
import Popup from '@/components/Popup.vue'
import AppCard from '@/components/AppCard.vue'

type WEB3APP = {
  title: string
  subtext: string
  repo_link: string
  href: string
  stack: Stack[]
  state?: 'active' | 'in-progress' | 'radar'
  img?: string
}

const APPS_WEB3: WEB3APP[] = [
  {
    title: 'Fund me',
    subtext: 'A web3 crowdfund that allow users to fund the contract owner with ETH donations.',
    href: 'https://fund-me.pages.dev/',
    repo_link: 'https://github.com/allangnutzmans/foundry-fund-me',
    stack: [...STACK_WEB3, ...STACK_VUE].filter(stack => stack.name !== 'Vuetify' && stack.name !== 'Pinia'),
    img: '/assets/fund-me.png'
  },
  {
    title: 'Lottery',
    subtext: 'A web3 lottery using Chainlink VRF and Chainlink alarm clock to have a totally decentralized lottery',
    href: 'https://the-rafflesol.vercel.app/',
    repo_link: 'https://github.com/allangnutzmans/foundry-smart-contract-lottery',
    stack: STACK_REACT,
    img: '/assets/lottery.png'
  },
  {
    title: 'NFT Market Place',
    subtext: 'A full-stack NFT marketplace with listing, buying, and compliance features',
    href: 'https://github.com/',
    repo_link: 'https://github.com/',
    stack: STACK_REACT,
    img: '/assets/nft-marketplace.png'
  },
  {
    title: 'Elections Dapp',
    subtext: 'Industry Standart motion graphics & visual effects',
    href: 'https://github.com/',
    repo_link: 'https://github.com/',
    stack: STACK_REACT
  }
]

const techStackDD = ref(false)
const selectedApp = ref<WEB3APP | null>(null)

// Computed para buscar favicon
const favicons = computed(() =>
  APPS_WEB3.map(app => ({
    href: app.href,
    favicon: ref<string | null>(null)
  }))
)


function openTechStackDialog(app: WEB3APP){
  selectedApp.value = app
  techStackDD.value = true
}

function closeTechStackDialog(){
  techStackDD.value = false
  selectedApp.value = null
}

function openRepoLink(repoLink: string){
  window.open(repoLink, '_blank')
}

function openApp(link: string){
  window.open(link, '_blank')
}
</script>

<template>
  <div class="content-wrapper flex flex-col grow text-theme-color px-10 py-5 overflow-auto bg-theme-bg [scrollbar-width:thin] max-[510px]:p-5">
    <div class="content-section mt-[30px] flex flex-col">
      <div class="content-section-title text-content-title font-bold mb-3.5">FOUNDRY & Dapps</div>
      <span>Aqui vai ser adicionado os cards dos projetos, que vão ser links para eles.</span>
      <span>O botão vai abrir uma prévia de cada num popup.</span>
      <span>Ícones das techs usadas (no card).</span>

      <Popup
        v-if="selectedApp"
        :title="selectedApp.title"
        v-model="techStackDD"
      >
        <template #subtitle>
          This project uses the following technologies and frameworks.
        </template>
        <template #body>
          <StackList :stack="selectedApp.stack" variant="compact" />
        </template>
      </Popup>

      <div class="apps-card flex flex-wrap w-[calc(100%+20px)] gap-5 items-start">
        <AppCard
          v-for="(app, index) in APPS_WEB3"
          :key="app.title"
          :title="app.title"
          :subtext="app.subtext"
          @click="openApp(app.href)"
          role="button"
        >
          <template #thumbnail>
            <div class="project-image-wrapper">
              <NuxtImg
                v-if="app.img"
                :src="app.img"
                alt="project preview"
                class="project-image"
                format="webp"
                quality="80"
              />
            </div>
          </template>

          <template #footer>
            <button
              class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5"
              @click.stop="openTechStackDialog(app)"
            >
              Tech Stack
            </button>
            <s-button
              role="link"
              variant="outline"
              @click.stop="openRepoLink(app.repo_link)"
            >
              Repo
            </s-button>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  max-height: 600px;
  overflow-y: auto;
}

.project-image-wrapper {
  width: 100%;
  height: 140px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.app-card:hover .project-image {
  transform: scale(1.05);
}
</style>
