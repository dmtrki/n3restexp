<template>
  <div :class="classList">
    <slot />
  </div>
</template>
<script>
import theming from '~/mixins/mmm/componentTheming'

export default {
  mixins: [theming],
  props: {
    padding: {
      type: Boolean | Number,
      default: false
    }
  },
  data() {
    return {
      classBase: 'Panel',
    }
  },
  computed: {
    classList() {
      let classList = this.classListBase

      if (this.padding) classList.push(this.classRoot + '--paddy_' + this.padding)

      return classList.join(' ')
    }
  }

}
</script>

<style lang="scss">
  .mmmPanel {
    @include vmin(padding, 13px);
    position: relative;
    display: flex;
    border-radius: 13px;
    background-color: rgba(255, 255, 255, 0.808);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(5px);
      border-radius: 13px;
    }
  }
</style>