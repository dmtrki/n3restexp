<template>
  <div :class="classList">

  </div>
</template>
<script>
import componentTheming from '~/mixins/mmm/componentTheming'

export default {
  mixins: [componentTheming],
  props: {
    multiRow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classPrefix: 'mmm',
      classBase: 'TagList'
    }
  },
  computed: {
    classRoot() {
      return classPrefix + classBase
    },
    classList() {
      let classList = [this.classRoot]

      if (this.multiRow) classList.push(this.classRoot + '--multiRow')

      return classList.join(' ')
    }
  }
}
</script>

<style lang="scss">
  @include block(mmmTagList) {
    @include vmin(padding, 5px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
