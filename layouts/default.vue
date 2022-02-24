<script setup>
const showAppBar = ref(true)
</script>

<template>
  <div class="default">
    <AppBar v-if="$device.isMobile && showAppBar" />
    <slot />
    <AppTabBar v-if="$device.isMobile" />
  </div>
</template>

<style lang="scss">
body {
  padding-bottom: 81px;
}
</style>
