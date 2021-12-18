<template>
  <div>
    <MmmButton secondary outline @click="toTop">Наверх</MmmButton>
  </div>
</template>

<script>
export default {
  methods: {
    toTop(){
      if (window) window.scrollTo(0,0)
      return
    }
  }
}
</script>

<style>

</style>