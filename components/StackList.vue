<script setup lang="ts">
import type { Stack } from '../constants/stack';

const props = defineProps<{
  stack: Stack[];
  variant?: 'default' | 'compact';
}>();

const { variant = 'default' } = props;

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
      <div class="button-wrapper" v-if="variant === 'default'">
        <s-button
          variant="outline"
          v-if="tech.status == 'Advanced'"
        >
          Open
        </s-button>
        <button
          class="content-button status-button"
          v-if="tech.status == 'Update Available'"
          @click=""
        >
          Update this app
        </button>
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
</style>
