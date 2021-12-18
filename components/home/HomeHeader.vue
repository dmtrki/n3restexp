<script setup>
import { set } from '@vueuse/core'
  const props = defineProps({
    headerData: {
      type: Object | Array,
      default: () => {}
    }
  })
</script>

<template>
  <MmmAd component-name="HomeHeader" :component-data="headerData" />
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  background-image: url(~/assets/svg/logo.svg);
  background-repeat: no-repeat;
  @include vmin(width, 44px);
  // @include vmin(height, 66px);
  min-height: 34px;
  height: 100%;
  text-decoration: none;
}

</style>
