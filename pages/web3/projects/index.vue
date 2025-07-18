<script setup lang="ts">
import { STACK_WEB3, STACK_VUE, STACK_REACT } from '@/constants/stack'
import { Stack } from '@/constants/stack'
import Popup from '@/components/Popup.vue'

type WEB3APP = {
  title: string,
  subtext: string,
  repo_link: string
  href: string
  stack: Stack,
}

const APPS_WEB3: WEB3APP[] = [
  {
    title: 'Fund me',
    subtext: 'A web3 crowdfund that allow users to fund the contract owner with ETH donations.',
    href: 'https://fund-me.pages.dev/',
    repo_link: 'https://github.com/allangnutzmans/foundry-fund-me',
    stack: [...STACK_WEB3, ...STACK_VUE].filter(stack => stack.name !== 'Vuetify' && stack.name !== 'Pinia')
  },
  {
    title: 'Lottery',
    subtext: 'A web3 lottery using Chainlink VRF and Chainlink alarm clock to have a totally decentralized lottery',
    href: 'https://github.com/',
    repo_link: 'https://github.com/',
    stack: STACK_REACT
  },
  {
    title: 'NFT Market Place',
    subtext: 'A full-stack NFT marketplace with listing, buying, and compliance features ',
    href: 'https://github.com/',
    repo_link: 'https://github.com/',
    stack: STACK_REACT
  },
  {
    title: 'Elections Dapp',
    subtext: 'Industry Standart motion graphics & visual effects',
    href: 'https://github.com/',
    repo_link: 'https://github.com/',
    stack: STACK_REACT
  }
];

const techStackDD = ref(false);
const selectedApp = ref<WEB3APP | null>(null);

function openTechStackDialog(app: WEB3APP){
  selectedApp.value = app;
  techStackDD.value = true;
}

function closeTechStackDialog(){
  techStackDD.value = false;
  selectedApp.value = null;
}

function openRepoLink(repoLink: string){
  window.open(repoLink, '_blank');
}

function openApp(link: string){
  window.open(link, '_blank');
}

</script>

<template>
  <div class="content-wrapper">
    <div class="content-section">
      <div class="content-section-title">FOUNDRY & Dapps</div>
      <span>Aqui vai ser adicionado os cards dos projetos, que vão ser links para eles.</span>
      <span>O botão vai abrir uma prévia de cada num .</span>
      <span>Ícones das techs usadas (no card).</span>
      <div class="apps-card">
<!--        <SuperCard />-->
        <Popup
          :title="selectedApp.title"
          v-model="techStackDD"
          v-if="selectedApp != null"
        >
          <template #subtitle>
            This project uses the following technologies and frameworks.
          </template>
          <template #body>
            <StackList :stack="selectedApp.stack" variant="compact" />
          </template>
        </Popup>
        <AppCard
          v-for="app in APPS_WEB3"
          :title="app.title"
          :subtext="app.subtext"
          @click="openApp(app.href)"
          role="button"
        >
          <template #icon>
            <IconsPr />
          </template>
          <template #footer>
            <button
              class="content-button status-button"
              @click="openTechStackDialog(app)"
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

<style>
ul {
  max-height: 600px;
  overflow-y: auto;
}
</style>
