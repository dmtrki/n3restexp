<script setup>
  import {useDeviceBasedComponent} from "../../composables/useDynamicComponent";

  const {dataset} = defineProps({
    dataset: {
      type: [Object, Array],
      default: () => {}
    }
  })

  const {deviceBasedComponent} = useDeviceBasedComponent('HomeCatalog')

  const manufacturersMore = computed(() => {
    if ( dataset.manufacturersCount ) {
      return dataset.manufacturersCount + ' ' + useRusEndings(dataset.manufacturersCount, ['производитель', 'производителя', 'производителей'])
    }
    return 0;
  })
</script>

<template>
  <Component :is="deviceBasedComponent" :dataset="{manufacturersMore: manufacturersMore, ...dataset}" />
</template>

<style lang="scss">


</style>
