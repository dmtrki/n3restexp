<script setup>
import { Swiper } from 'swiper/vue'
import 'swiper/css'

const {
  offsetT,
  offsetB,
  buttons,
  scroll
} = defineProps({
  offsetT: {
    type: String,
    default: ''
  },
  offsetB: {
    type: String,
    default: ''
  },
  buttons: {
    type: Boolean,
    default: false
  },
  buttonsDefault: {
    type: Boolean,
    default: false
  },
  scroll: {
    type: Boolean,
    default: false
  }
})


const classes = computed(() => {
        let classes = 'mmmHorizontal'
        if (offsetT) classes += ' mmmHorizontal--offsetTop_' + offsetT
        return classes
      })
</script>

<script>
export default {
  name: 'MmmHorizontal'
}
</script>

<template>
  <Swiper
    :button="buttons"
    :scroll="scroll"
    :class="classes"
  >
    <slot/>
  </Swiper>
</template>

<style lang="scss">
.v-hl-container {
  // @include vmin(padding-bottom, 55px);
}

  // @include block(horizontal) {
  //   @include fluid(margin-top, 21px);
  //   @include fluid(margin-bottom, 13px);
  // }
  .btn-left, .btn-right {
    padding: 6px;
    height: 100%;
    width: 42px;

    path {fill: $main}
  }

  .btn-left {
    background: linear-gradient(to left, #ffffff08 0, #ffffff21 50%, #ffffff34);
  }

  .btn-right {
    background: linear-gradient(to right, #ffffff21 0, #ffffff55 50%, #ffffff89);
  }
</style>