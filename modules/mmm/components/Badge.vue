<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})

const classes = computed(() => {
      let classList = ['mmmBadge']
      if (this.value && this.value > 9) classList.push('mmmBadge--autoWidth')

      return classList.join(' ')
    }),
    getValue = computed(() => {
      if (!this.value) return
      return (this.value > 99) ? '99+' : this.value
    })
</script>

<script>
export default {
  name: 'MmmBadge'
}
</script>

<template>
  <div :class="classes">
    {{ getValue }}
  </div>
</template>

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
