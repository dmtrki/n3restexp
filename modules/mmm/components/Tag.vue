<template>
  <div :class="classList">
    <MmmCssIcon v-if="icon" class="mmmTag__icon" :type="icon" />
    {{ text }}
    <MmmCssIcon v-if="iconRight" class="mmmTag__rightIcon" :type="iconRight" />
  </div>
</template>
<script>
import componentBase from '~~/mixins/mmm/componentTheming'

export default {
  mixins: [componentBase],
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classBase: 'Tag',
    }
  },
  computed: {
    classList() {
      return this.classListBase;
    }
  }
}
</script>

<style lang="scss">
  @include block(mmmTag) {
    @include vmin(padding, 5px);
    @include mfs(12px);
    border-radius: 5px;
    background-color: $info;
    color: $light;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    white-space: nowrap;

    @include modifier(small) {
      @include mfs(10px);
      padding: 0 3px;

      @include element(icon) {
        margin-right: 2px;
        --ggs: 0.5;
      }
      
      @include element(rightIcon) {
        margin-left: 2px;
        --ggs: 0.5;
      }
    }

    @include modifier(success) {
      background-color: $accent;
      color: $light;
    }
  }
</style>