<script setup lang="ts">
import SuperCard from '../../../components/motion/SuperCard.vue'
import Popup from '@/components/Popup.vue'
import StackList from '@/components/StackList.vue'
import { STACK_WEB3 } from '@/constants/stack'

const APPS_WEB3: { title: string, subtext: string }[] = [
  {
    title: 'Fund me',
    subtext: 'A web3 crowdfund that allow users to fund the contract owner with ETH donations.',
    href: 'https://github.com/'
  },
  {
    title: 'Lottery',
    subtext: 'A web3 lottery using Chainlink VRF and Chainlink alarm clock to have a totally decentralized lottery',
    href: 'https://github.com/'
  },
  {
    title: 'NFT Market Place',
    subtext: 'A full-stack NFT marketplace with listing, buying, and compliance features ',
    href: 'https://github.com/'
  },
  {
    title: 'Elections Dapp',
    subtext: 'Industry Standart motion graphics & visual effects',
    href: 'https://github.com/'
  }
];

const techStackDD = ref(false);

function openTechStackDialog(){
  techStackDD.value = true;
}

function openLink(repoLink: string){
  window.open(repoLink, '__blank');
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
          title="Tech stack for this project"
          v-model="techStackDD"
        >
          <template #subtitle>
            This project uses the following technologies and frameworks.
          </template>
          <template #body>
            <StackList :stack="STACK_WEB3" variant="compact" />
            <div class="content-button-wrapper">
              <button
                class="content-button status-button open close"
                @click="techStackDD = false"
              >
                Close
              </button>
            </div>
          </template>
        </Popup>
        <AppCard
          v-for="app in APPS_WEB3"
          :title="app.title"
          :subtext="app.subtext"
        >
          <template #icon>
            <IconsPr />
          </template>
          <template #footer>
            <button
              class="content-button status-button"
              @click="openTechStackDialog()"
            >
              Tech Stack
            </button>
            <s-button
              role="link"
              variant="outline"
              @click="openLink(app.href)"
            >
              Repo
            </s-button>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>
