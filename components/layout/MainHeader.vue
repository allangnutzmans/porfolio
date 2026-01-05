<script setup>
const route = useRoute();

const submenu = [
  {
    text: 'Overview',
    // Determina o link da visão geral com base na seção atual (ex: /vue, /react)
    getHref: (path) => {
      const section = path.split('/').filter(Boolean)[0] || '';
      return section ? `/${section}` : '/';
    },
    end: true // Garante a correspondência exata da rota para o estado ativo.
  },
  {
    text: 'Projects',
    // Adiciona /projects à seção atual.
    getHref: (path) => {
      const section = path.split('/').filter(Boolean)[0] || '';
      return section ? `/${section}/projects` : '/projects';
    },
    end: false
  },
/*   {
    text: 'Web',
    getHref: () => '#', // Link estático.
    end: false
  }, */
]
</script>


<template>
  <div class="main-header flex items-center border-b border-border h-[58px] shrink-0">
    <a class="menu-link-main no-underline text-theme-color px-[30px] max-[1055px]:hidden" href="#">All Apps</a>
    <div class="header-menu flex items-center ml-[150px] max-[1055px]:m-auto">
      <NuxtLink
        v-for="(item, index) in submenu"
        :key="index"
        class="main-header-link px-6 py-5 no-underline text-inactive border-b-2 border-transparent transition-all duration-300 hover:text-theme-color hover:border-theme-color [&.is-active]:text-theme-color [&.is-active]:border-theme-color"
        active-class="is-active"
        :to="item.getHref(route.path)"
        :end="item.end"
        >{{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>
