<script setup lang="ts">
</script>

<template>
  <div class="content-section">
    <div class="content-section-title">Apps in your plan</div>
    <div class="apps-card">
      <AppCard
        title="Premiere Pro"
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
        title="InDesign"
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
        title="After Effects"
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
</template>
