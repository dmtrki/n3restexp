<template>
  <MmmAd component-name="HomePromo" :component-data="promoData" />
</template>

<script>
export default {
  props: {
    promoData: {
      type: Object | Array,
      default: () => {}
    }
  },
  created() {

  }
}
</script>

<style lang="scss">

</style>
