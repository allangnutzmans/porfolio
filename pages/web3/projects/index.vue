<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper">
    <div class="content-section">
      <div class="content-section-title">FOUNDRY / dApps</div>
      <span>Aqui vai ser adicionado os cards dos projetos, que vão ser links para eles.</span>
      <span>O botão vai abrir uma prévia de cada num .</span>
      <span>Ícones das techs usadas (no card).</span>
      <div class="apps-card">
        <AppCard
          title="Fund me"
          subtext="Edit, master and create fully proffesional videos"
        >
          <template #icon>
            <IconsPr />
          </template>
          <template #footer>
            <button
              class="content-button status-button"
              @click="mainStore.togglePopup()"
            >
              Update
            </button>
          </template>
        </AppCard>

        <AppCard
          title="Lottery"
          subtext="Design and publish great projects & mockups"
        >
          <template #icon>
            <IconsId />
          </template>
          <template #footer>
            <button
              class="content-button status-button"
              @click="mainStore.togglePopup()"
            >
              Update
            </button>
          </template>
        </AppCard>

        <AppCard
          title="Nft"
          subtext="Industry Standart motion graphics & visual effects"
        >
          <template #icon>
            <IconsAe />
          </template>
          <template #footer>
            <button
              class="content-button status-button"
              @click="mainStore.togglePopup()"
            >
              Update
            </button>
          </template>
        </AppCard>

        <AppCard
          title="Elections Dapp"
          subtext="Industry Standart motion graphics & visual effects"
        >
          <template #icon>
            <IconsAe />
          </template>
          <template #footer>
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
