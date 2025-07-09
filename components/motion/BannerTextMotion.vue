<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
  text: String,
  btntext: String,
  align: {
    type: String,
    default: 'right'
  }
})
const textRef = ref(null)
defineExpose({ textRef })
</script>

<template>
  <div ref="textRef" v-motion class="banner-content" :class="[`align-${align}`]">
    <h3 class="img-content">
      <slot name="icon"></slot>
      {{ title }}
    </h3>
    <div>
      {{ text }}
    </div>
    <button class="content-button">{{ btntext }}</button>
  </div>
</template>

<style scoped lang="scss">
.banner-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  color: #fff;
  width: 100%;
  max-width: 40%;
  &.align-left {
    align-items: flex-start;
    text-align: left;
  }
  &.align-center {
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  &.align-right {
    align-items: flex-end;
    text-align: right;
    margin-left: auto;
  }
}

.img-content {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.25),
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 8px 30px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
}

.banner-content > div {
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
}

.content-button {
  background: #fff;
  color: #222;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.10),
    0 4px 16px rgba(0, 0, 0, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
  pointer-events: auto;
  &:hover {
    background: #222;
    color: #fff;
    transform: translateY(-2px);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 8px 24px rgba(0, 0, 0, 0.2),
      0 12px 32px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.4));
  }
}
</style>
