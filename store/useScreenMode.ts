import { ref } from 'vue'

const screenMode = ref<'window' | 'fullscreen'>('window')

function toggleScreenMode() {
  screenMode.value = screenMode.value === 'window' ? 'fullscreen' : 'window'
}

export function useScreenMode() {
  return { screenMode, toggleScreenMode }
} 