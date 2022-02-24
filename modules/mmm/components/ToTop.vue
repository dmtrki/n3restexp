<script setup>
const toTop = () => window ? window.scrollTo(0, 0) : false
</script>

<script>
export default {
  name: 'MmmToTop'
}
</script>

<template>
  <div>
    <MmmButton secondary outline @click="toTop">Наверх</MmmButton>
  </div>
</template>

<style>

</style>
