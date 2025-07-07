import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    popup: false,
    dark: false,
    installedapps: [
      { appid: 1, name: 'Photoshop', status: 'Updated' },
      { appid: 2, name: 'Illustrator', status: 'Update Available' },
      { appid: 3, name: 'After Effects', status: 'Updated' },
    ],
  }),
  actions: {
    togglePopup() {
      this.popup = !this.popup
    },
  },
})
