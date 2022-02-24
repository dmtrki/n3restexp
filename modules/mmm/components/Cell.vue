<script setup>
import {_styleProps, _ps, _pbf} from '~/helpers/componentsHelper'
import {useTheming} from '~/composables/components/useTheming'

const props = defineProps({
  ..._styleProps,
  title: _ps,
  subtitle: _ps,
  action: _ps,
  actionOnTop: _pbf,
  background: {
    type: String,
    default: ''
  },
  border: _pbf,
  equal: _pbf,
  to: _ps
})

const classBase = 'Cell',
    {classRoot, themingClasses} = useTheming(classBase, props)

const tag = computed(() => props.to === '' ? 'div' : 'NuxtLink'),
    classes = computed(() => {
      let classList = [themingClasses.value]

      if (props.actionOnTop) classList.push(classRoot + '--actionOnTop')
      if (props.equal) classList.push(classRoot + '--equal')

      return classList.join(' ')
    }),
    isLink = computed(() => !!(props.to && props.to !== '#'))

const onClick = (e) => {

}
</script>

<script>
export default {
  name: 'MmmCell'
}
</script>

<template>
  <Component
    :is="tag"
    v-bind="$attrs"
    :to="to"
    :class="classes"
    @click="onClick"
  >
    <div :class="classRoot + '__main'">
      <template v-if="!($slots.default || [])[0]">
        <MmmTitle :title="title" :subtitle="subtitle" />
      </template>
      <slot />
    </div>
    <div :class="classRoot + '__action'">
      <MmmCssIcon v-if="!($slots.action || [])[0]" type="next" />
      <slot name="action" />
    </div>
  </Component>
</template>

<style lang="scss">

@include block(mmmCell) {
  @include vmin(margin-top, 21px);
  @include vmin(margin-bottom, 13px);
  @include vmin(padding, 13px);

  color: #333;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include element(main) {
    flex: 1 0 55%;
  }

  @include element(action) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @include modifier(actionOnTop) {
    align-items: flex-start;
  }

  @include modifier(equal) {

    @include element(main) {
      flex: 1;
    }
  }
}
</style>
