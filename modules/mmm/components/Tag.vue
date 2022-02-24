<script setup>
import {_ps, _pbf} from '~~/services/helpers/componentHelpers'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  text: _ps,
  icon: _ps,
  iconRight: _ps,
})

const {themingClasses} = useTheming('Tag')
</script>

<script>
export default {
  name: 'MmmTag'
}
</script>

<template>
  <div :class="themingClasses">
    <MmmCssIcon v-if="icon" class="mmmTag__icon" :type="icon" />
    {{ text }}
    <MmmCssIcon v-if="iconRight" class="mmmTag__rightIcon" :type="iconRight" />
  </div>
</template>

<style lang="scss">
  @include block(mmmTag) {
    @include vmin(padding, 5px);
    @include mfs(12px);
    border-radius: 5px;
    background-color: $info;
    color: $light;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    white-space: nowrap;

    @include modifier(small) {
      @include mfs(10px);
      padding: 0 3px;

      @include element(icon) {
        margin-right: 2px;
        --ggs: 0.5;
      }

      @include element(rightIcon) {
        margin-left: 2px;
        --ggs: 0.5;
      }
    }

    @include modifier(success) {
      background-color: $accent;
      color: $light;
    }
  }
</style>
