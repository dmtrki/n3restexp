<script setup>
import { SwiperSlide } from 'swiper/vue'

const {fullwidth, marginLeftZero} = defineProps({
  fullwidth: {
    type: Boolean,
    default: false
  },
  marginLeftZero: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  let b = 'horizontal__item',
      classList = [b]

  if (fullwidth) classList.push(b + '--fullWidth')
  if (marginLeftZero) classList.push(b + '--marginLeftZero')
  return classList.join(' ')
})
</script>

<script>
export default {
  name: 'MmmHorizontalItem'
}
</script>

<template>
  <SwiperSlide :class="classes">
    <slot/>
  </SwiperSlide>
</template>

<style lang="scss">
  .horizontal__item {
    @include vmin(margin-right, 13px);

    &:first-child {
      padding-left: 1em;
    }

    &--fullwidth {
      width: 100%;
    }

    &--marginLeftZero {
      margin-right: 0;
    }
  }
</style>