<script setup>
import {_styleProps, _ps, _pbf} from '~/helpers/componentsHelper'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  ..._styleProps,
  background: {
    type: String | Boolean,
    default: false
  },
})

const {themingClasses} = useTheming('CellGroup', props)

</script>

<script>
export default {
  name: 'MmmCellGroup'
}
</script>

<template>
  <section :class="themingClasses">
    <slot />
  </section>
</template>

<style lang="scss">

</style>
