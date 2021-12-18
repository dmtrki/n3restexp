<script setup>
const showAppBar = ref(true)
</script>

<template>
  <div class="default">
    <AppBar v-if="showAppBar" />
    <slot />
    <AppTabBar />
  </div>
</template>

<style lang="scss">
body {
  padding-bottom: 81px;
}
</style>
