
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
  <div class="content-wrapper flex flex-col grow text-theme-color px-10 py-5 overflow-auto bg-theme-bg [scrollbar-width:thin] max-[510px]:p-5">
    <Banner
      title="Adobe Stock"
      text="Grab yourself 10 free images from Adobe Stock in a 30-day free trial
        plan and find perfect image, that will help you with your new project."
      image="glass.png"
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
        <div class="checkbox-wrapper flex items-center text-sm font-normal mb-5">
          <input type="checkbox" id="check1" class="checkbox peer hidden" />
          <label for="check1" class="flex items-center cursor-pointer before:content-[''] before:mr-2.5 before:w-[15px] before:h-[15px] before:border before:border-theme-color before:rounded before:shrink-0 peer-checked:before:bg-[#3a6df0] peer-checked:before:border-[#3a6df0] peer-checked:before:bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg_xmlns=\'http://www.w3.org/2000/svg\'_width=\'24\'_height=\'24\'_viewBox=\'0_0_24_24\'_fill=\'none\'_stroke=\'%23fff\'_stroke-width=\'3\'_stroke-linecap=\'round\'_stroke-linejoin=\'round\'_class=\'feather_feather-check\'%3e%3cpath_d=\'M20_6L9_17l-5-5\'/%3e%3c/svg%3e')] peer-checked:before:bg-center peer-checked:before:bg-[length:12px] peer-checked:before:bg-no-repeat">Import previous settings and preferences</label>
        </div>
        <div class="checkbox-wrapper flex items-center text-sm font-normal mb-10">
          <input type="checkbox" id="check2" class="checkbox peer hidden" />
          <label for="check2" class="flex items-center cursor-pointer before:content-[''] before:mr-2.5 before:w-[15px] before:h-[15px] before:border before:border-theme-color before:rounded before:shrink-0 peer-checked:before:bg-[#3a6df0] peer-checked:before:border-[#3a6df0] peer-checked:before:bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg_xmlns=\'http://www.w3.org/2000/svg\'_width=\'24\'_height=\'24\'_viewBox=\'0_0_24_24\'_fill=\'none\'_stroke=\'%23fff\'_stroke-width=\'3\'_stroke-linecap=\'round\'_stroke-linejoin=\'round\'_class=\'feather_feather-check\'%3e%3cpath_d=\'M20_6L9_17l-5-5\'/%3e%3c/svg%3e')] peer-checked:before:bg-center peer-checked:before:bg-[length:12px] peer-checked:before:bg-no-repeat">Remove old versions</label>
        </div>
        <div class="content-button-wrapper flex mt-auto ml-auto">
          <button
            class="content-button status-button open close bg-transparent text-button-inactive border border-button-inactive hover:bg-transparent hover:text-white hover:border-white text-[15px] mt-0 px-0 w-6 flex items-center justify-center rounded-[20px] cursor-pointer transition duration-300 mr-2"
            @click="togglePopup"
          >
            Cancel
          </button>
          <button class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5">Continue</button>
        </div>
      </template>
    </Popup>

    <div class="content-section mt-[30px] flex flex-col">
      <div class="content-section-title text-content-title font-bold mb-3.5">Installed</div>
      <InstalledApps :onUpdateClick="togglePopup" />
    </div>
    <div class="content-section mt-[30px] flex flex-col">
      <div class="content-section-title text-content-title font-bold mb-3.5">Apps in your plan</div>
      <div class="apps-card flex flex-wrap w-[calc(100%+20px)] gap-5 items-start">
        <AppCard
          title="Premiere Pro"
          subtext="Edit, master and create fully proffesional videos"
        >
          <template #icon>
            <IconsPr />
          </template>
          <template #footer>
            <button
              class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5"
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
              class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5"
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
              class="content-button status-button bg-[#3a6df0] border-none text-white rounded-[20px] cursor-pointer transition duration-300 whitespace-nowrap hover:bg-[#1e59f1] text-[15px] mt-0 px-6 py-1.5 max-[390px]:px-3.5"
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
