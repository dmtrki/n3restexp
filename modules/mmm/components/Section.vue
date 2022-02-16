<script setup>
import {_ps, _pbf, _pbt} from '~/helpers/componentsHelper'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  offsetT: _ps,
  firstSection: _pbf,
  fullWidth: _pbf,
  flex: _pbf,
  transparent: _pbf,
  accent: _pbf,
  light: _pbt,
})

const {classRoot} = useTheming('Section')

const classes = computed(() => {
      const t = classRoot
      let classList = [t]

      if (props.fullWidth) classList.push(t + '--fullWidth')
      if (props.flex) classList.push(t + '--flex')
      if (props.transparent) classList.push(t + '--transparent')

      if (props.offsetT) classList.push(t + '--offsetT_' + props.offsetT)

      if (props.accent) {
        const _ = props.light ? '--accent_light' : '--accent'
        classList.push(t + _)
      }

      if (props.firstSection) classList.push(t + '--first')

      return classList.join(' ')
    })
</script>

<script>
export default {
  name: 'MmmSection'
}
</script>

<template>
  <section :class="classes">
    <div class="mmmSection__box">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
@include block(mmmSection) {
  width: 100%;
  max-width: 100%;
  padding-left: 21px;
  padding-right: 21px;
  @include vmin(margin-top, 21px);

  @include element(box) {
    @include vmin(padding, 8px);
    border-radius: 13px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  }

  @include modifier(offsetT) {
    &_xsmall {
      @include vmin(margin-top, 8px);
    }
    &_small {
      @include vmin(margin-top, 13px);
    }
    &_medium {
      @include vmin(margin-top, 34px);
    }
    &_large {
      @include vmin(margin-top, 55px);
    }
    &_xlarge {
      @include vmin(margin-top, 89px);
    }
  }

  @include modifier(fullWidth) {
    padding-left: 0;
    padding-right: 0;
  }

  @include modifier(transparent) {
    @include element(box) {
      background-color: transparent;
      box-shadow: none;
    }
  }

  @include modifier(first) {
    background: $bg-light-accent-g;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
    border-radius: 0 0 13px 13px;
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;

    @include element(box) {
      background-color: transparent;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      // @include vmin(padding-left, 13px);
      // @include vmin(padding-right, 13px);
      @include vmin(padding-top, 13px);
      @include vmin(padding-bottom, 34px);
    }
  }

  @include modifier(flex) {

    @include element(box) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
