<script setup>
import {_styleProps, _ps, _pbf, _pbt} from '~/helpers/componentsHelper'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  ..._styleProps,
  padding: {
    type: Boolean | Number,
    default: false
  },
})

const {classRoot} = useTheming('Panel')

const classes = computed(() => {
  const t = classRoot
  let classList = [t]

  if (props.padding) classList.push(t + '--paddy_' + props.padding)

  return classList.join(' ')
})
</script>

<script>
export default {
  name: 'MmmPanel'
}
</script>

<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<style lang="scss">
  .mmmPanel {
    @include vmin(padding, 13px);
    position: relative;
    display: flex;
    border-radius: 13px;
    background-color: rgba(255, 255, 255, 0.808);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(5px);
      border-radius: 13px;
    }
  }
</style>
