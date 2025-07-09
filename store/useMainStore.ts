import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    popup: false as boolean,
    dark: false as boolean,
    installedapps: [
      { appid: 1, name: 'Photoshop', status: 'Updated' },
      { appid: 2, name: 'Illustrator', status: 'Update Available' },
      { appid: 3, name: 'After Effects', status: 'Updated' },
    ] as Array<{ appid: number; name: string; status: string }>,
  }),
  actions: {
    togglePopup() {
      this.popup = !this.popup
    },
    setDark(value: boolean) {
      this.dark = value
    },
  },
})
