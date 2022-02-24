<script setup>
import {useDeviceBasedComponent} from "../../composables/useDynamicComponent";

const {dataset} = defineProps({
  dataset: {
    type: [Object, Array],
    default: () => {}
  }
})

const {deviceBasedComponent} = useDeviceBasedComponent('HomePromo')

</script>

<template>
  <Component :is="deviceBasedComponent" :dataset="dataset" />
</template>

<style lang="scss">

</style>
