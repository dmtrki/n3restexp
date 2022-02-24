<script setup>
import Flicking from '@egjs/vue3-flicking'  //https://naver.github.io/egjs-flicking/Options/

const {
  align,
  vertical,
  loop,
  bound,
  adaptHeight,
  panelsPerView,
  free
} = defineProps({
  align: {
    type: [String, Object],
    default: 'prev'
  },
  vertical: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  bound: {
    type: Boolean,
    default: false
  },
  adaptHeight: {
    type: Boolean,
    default: false
  },
  panelsPerView: {
    type: Number,
    default: -1
  },
  free: {
    type: Boolean,
    default: false
  }
})

</script>

<script>
export default {
  name: "MmmSlider"
}
</script>

<template>
  <section class="mmmSlider">
    <Flicking
      :align="align"
      :vertical="vertical"
      :circular="loop"
      :bound="bound"
      :adaptive="adaptHeight"
      :panelsPerView="panelsPerView"
      :moveType="free ? 'freeScroll' : 'snap'"
    >
      <slot />
    </Flicking>
  </section>
</template>

<style scoped>
@import url("node_modules/@egjs/vue3-flicking/dist/flicking.css");

.flicking-viewport {
  transition: height 500ms;
}
</style>