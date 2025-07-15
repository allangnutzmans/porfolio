
<script setup>
import IconsSt from '@/components/icons/remove/st.vue'
import IconsPr from '@/components/icons/remove/pr.vue'
import IconsId from '@/components/icons/remove/id.vue'
import IconsAe from '@/components/icons/remove/ae.vue'

const showPopup = ref(false)

const togglePopup = () => {
  showPopup.value = !showPopup.value
}
</script>


<template>
  <div class="content-wrapper">
    <Banner
      title="Adobe Stock"
      text="Grab yourself 10 free images from Adobe Stock in a 30-day free trial
        plan and find perfect image, that will help you with your new project."
      image="glass.png"
      btntext="Start free trial"
    >
      <template #icon>
        <IconsSt />
      </template>
      <template #image></template>
    </Banner>

    <Popup v-model="showPopup" title="Update This App">
      <template #subtitle>
        Adjust your selections for advanced options as desired before
        continuing.
        <a href="#">Learn more</a>
      </template>
      <template #body>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="check1" class="checkbox" />
          <label for="check1">Import previous settings and preferences</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="check2" class="checkbox" />
          <label for="check2">Remove old versions</label>
        </div>
        <div class="content-button-wrapper">
          <button
            class="content-button status-button open close"
            @click="togglePopup"
          >
            Cancel
          </button>
          <button class="content-button status-button">Continue</button>
        </div>
      </template>
    </Popup>

    <div class="content-section">
      <div class="content-section-title">Installed</div>
      <InstalledApps :onUpdateClick="togglePopup" />
    </div>
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
              @click="togglePopup"
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
              @click="togglePopup"
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
              @click="togglePopup"
            >
              Update
            </button>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>
