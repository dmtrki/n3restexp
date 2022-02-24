<script setup>
import {_styleProps, _pbf} from '~/helpers/componentsHelper'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  ..._styleProps,
  multiRow: _pbf
})

const {themingClasses} = useTheming('TagList', props)

const classes = computed(() => {
  let classList = themingClasses

  if (this.multiRow) classList.push(this.classRoot + '--multiRow')

  return classList.join(' ')
})

</script>

<script>
export default {
  name: 'MmmTagList'
}
</script>

<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<style lang="scss">
  @include block(mmmTagList) {
    @include vmin(padding, 5px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
