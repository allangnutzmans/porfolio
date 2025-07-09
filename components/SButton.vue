<script setup lang="ts">
type ButtonProps = {
  variant?: 'primary' | 'outline'
}
const { variant = 'primary' } = defineProps<ButtonProps>()
</script>

<template>
  <div class="content-button-wrapper">
    <button :class="[
      'content-button',
      'status-button',
      variant
      ]">
        <slot />
    </button>
  </div>
</template>

<style scoped>
.status {
  margin-left: auto;
  width: 140px;
  font-size: 15px;
  position: relative;
  @media screen and (max-width: 700px) {
    display: none;
  }
  &-circle {
    width: 6px;
    height: 6px;
    background-color: #396df0;
    position: absolute;
    border-radius: 50%;
    top: 4px;
    left: -20px;
    &.green {
      background-color: #3bf083;
    }
  }
  &-button {
    font-size: 15px;
    margin-top: 0;
    padding: 6px 24px;
    @media screen and (max-width: 390px) {
      padding: 6px 14px;
    }
    &.open {
      background: none;
      color: var(--button-inactive);
      border: 1px solid var(--button-inactive);
    }
    &:not(.open):hover {
      color: #fff;
      border-color: #fff;
    }
  }
}

.content-button:not(.open):hover {
  background: #1e59f1;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 187px;
  margin-left: auto;
  @media screen and (max-width: 480px) {
    width: auto;
  }
}
.content-button-wrapper .content-button.status-button.open.close {
  width: auto;
}
.content-button-wrapper {
  margin-top: auto;
  margin-left: auto;
  .open {
    margin-right: 8px;
  }
}
.content-button.outline {
  background: none;
  color: var(--button-inactive, #396df0);
  border: 1.5px solid var(--button-inactive, #396df0);
}

.content-button.outline:not(.open):hover {
  background: none;
}
</style>
