<template>
  <div :class="classList">
    {{ getValue }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getValue() {
      if (!this.value) return
      return (this.value > 99) ? '99+' : this.value
    },
    classList() {
      let classList = ['mmmBadge']
      if (this.value && this.value > 9) classList.push('mmmBadge--autoWidth')

      return classList.join(' ')
    }
  }
}
</script>

<style lang="scss">
  @include block(mmmBadge) {
    position: absolute;
    background-color: $accent;
    color: $light;
    @include mfs(10px);
    // @include vmin(padding, 3px);
    border-radius: 34px;
    top: 0;
    right: 0;
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include modifier(autoWidth) {
      width: auto;
      padding: 0 3px;
    }
  }
</style>