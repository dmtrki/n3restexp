<template>
  <div :class="classList">
    <slot></slot>
  </div>  
</template>

<script>
export default {
  props: {
    fullwidth: {
      type: Boolean,
      default: false
    },
    marginLeftZero: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    classList() {
      let b = 'horizontal__item',
          classList = [b]

      if (this.fullWidth) classList.push(b + '--fullWidth')
      if (this.marginLeftZero) classList.push(b + '--marginLeftZero')
      return classList.join(' ')
    }
  }
}
</script>

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