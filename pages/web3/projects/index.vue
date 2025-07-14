<script setup lang="ts">
import SuperCard from '../../../components/motion/SuperCard.vue'

const APPS_WEB3: { title: string, subtext: string }[] = [
  {
    title: 'Fund me',
    subtext: 'A web3 crowdfund that allow users to fund the contract owner with ETH donations.'
  },
  {
    title: 'Lottery',
    subtext: 'A web3 lottery using Chainlink VRF and Chainlink alarm clock to have a totally decentralized lottery'
  },
  {
    title: 'NFT Market Place',
    subtext: 'A full-stack NFT marketplace with listing, buying, and compliance features '
  },
  {
    title: 'Elections Dapp',
    subtext: 'Industry Standart motion graphics & visual effects'
  }
];

</script>

<template>
  <div class="content-wrapper">
    <div class="content-section">
      <div class="content-section-title">FOUNDRY / dApps</div>
      <span>Aqui vai ser adicionado os cards dos projetos, que vão ser links para eles.</span>
      <span>O botão vai abrir uma prévia de cada num .</span>
      <span>Ícones das techs usadas (no card).</span>
      <div class="apps-card">
<!--        <SuperCard />-->
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
              @click="mainStore.togglePopup()"
            >
              Techs
            </button>
            <button
              class="content-button status-button"
              @click="mainStore.togglePopup()"
            >
              Update
            </button>
          </template>
        </AppCard>
      </div>
    </div>
    <div class="content-section">
      <div class="content-section-title">Code</div>
      GITHUB REPO
    </div>
  </div>
</template>
