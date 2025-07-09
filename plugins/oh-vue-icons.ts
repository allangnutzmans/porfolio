import { defineNuxtPlugin } from 'nuxt/app'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaEthereum, SiVuedotjs, IoLogoReact, CoNextJs, SiNuxtdotjs, SiChainlink, SiSolidity, SiIpfs} from 'oh-vue-icons/icons'

addIcons(FaEthereum, SiVuedotjs, IoLogoReact, CoNextJs, SiNuxtdotjs, SiChainlink, SiSolidity, SiIpfs)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('v-icon', OhVueIcon)
})
