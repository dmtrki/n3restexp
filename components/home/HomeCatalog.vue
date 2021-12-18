<script setup>
  const props = defineProps({
    catalogData: {
      type: Object | Array,
      default: () => {}
    }
  })

  const manufacturersMore = () => {
    if ( props.catalogData.manufacturersCount && props.catalogData.manufacturersCount !== null ) {
      return props.catalogData.manufacturersCount + ' ' + useRusEndings(props.catalogData.manufacturersCount, ['производитель', 'производителя', 'производителей'])
    }
    return 0;
  }
</script>

<template>
  <MmmAd component-name="HomeCatalog" :component-data="{...catalogData, manufacturersMore: manufacturersMore}" />
</template>
<script>
export default {
  props: {

  },
  computed: {

  },
  methods: {
    // horizontalWheel (event) {
    //   if (!event.shiftKey) this.$refs.homeTopSlider.slideWheel(event)
    // },
  }
}
</script>


<style lang="scss">


</style>
