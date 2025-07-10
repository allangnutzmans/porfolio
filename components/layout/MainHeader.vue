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
  {
    text: 'Web',
    getHref: () => '#', // Link estático.
    end: false
  },
]
</script>


<template>
  <div class="main-header">
    <a class="menu-link-main" href="#">All Apps</a>
    <div class="header-menu">
      <NuxtLink
        v-for="(item, index) in submenu"
        :key="index"
        class="main-header-link"
        active-class="is-active"
        :to="item.getHref(route.path)"
        :end="item.end"
        >{{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>
