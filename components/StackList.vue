<script setup lang="ts">
import type { Stack } from '../constants/stack';

const props = defineProps<{
  stack: Stack[];
  variant?: 'default' | 'compact';
}>();

const { variant = 'default' } = props;
const openDocumentation  = (link: string) => {
  window.open(link) 
}

</script>

<template>
  <ul class="">
    <li
      class="adobe-product"
      v-for="tech in props.stack"
      :key="tech.name"
    >
      <div class="products" >
        <component :is="tech.icon" size="50" />
        {{ tech.name }}
      </div>
      <span class="status">
        <span
          class="status-circle green"
          v-if="tech.status == 'Advanced'"
        ></span>
        <span
          class="status-circle"
          v-if="tech.status == 'Update Available'"
        ></span>
        {{ tech.status }}
      </span>
      <div class="button-wrapper ga-2" v-if="variant === 'default'">
      <!-- TODO: RELATIONSHIP THIS WITH APPS -->
<!--    <button
          class="content-button status-button"
          @click=""
        >
          Apps with
        </button> -->
        <s-button
          variant="outline"
          @click="openDocumentation(tech.doc_link)"
        >
          Docs
        </s-button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
svg {
  border: 1px solid #e6e6e6;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 6px;
  margin-right: 16px;
  flex-shrink: 0;
}

.ga-2 {
  display: flex;
  gap: 0.5em;
}
</style>
