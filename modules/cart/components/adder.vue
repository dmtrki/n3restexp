<script setup>

const isLoading = ref(false)

</script>

<script>
export default {
  name: "CartAdder"
}
</script>

<template>
  <div class="cartAdder">
    <div class="cartAdder__proximal">
      <slot />
    </div>
    <div class="cartAdder__loading">...</div>
  </div>
</template>

<style lang="scss" scoped>
.cartAdder {
  &__proximal {
    transition: opacity .3s;
    &.is-loading {
      opacity: .5;
    }
  }
}
</style>