<template>
  <Component
    :is="tag"
    v-bind="$attrs"
    v-on="$listeners"
    :to="to"
    :class="classList"
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

<script>
import themingMixing from "@/mixins/mmm/componentTheming"
import {_pbf, _ps} from '~~/services/helpers/componentHelpers'

export default {
  mixins: [themingMixing],
  props: {
    title: _ps,
    subtitle: _ps,
    action: _ps,
    actionOnTop: _pbf,
    background: {
      type: String | Boolean,
      default: false
    },
    border: _pbf,
    equal: _pbf,
    to: _ps
  },
  data() {
    return {
      classBase: 'Cell',
    }
  },
  computed: {
    tag() {
      return (this.to === '') ? 'div' : 'NuxtLink'
    },
    classList() {
      let classList = this.classListBase

      if (this.actionOnTop) classList.push(this.classRoot + '--actionOnTop')
      if (this.equal) classList.push(this.classRoot + '--equal')

      return classList.join(' ')
    },
    isLink() {
      return (this.to && this.to !== '#') ? true : false
    }
  },
  created() {

  }
}
</script>

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
