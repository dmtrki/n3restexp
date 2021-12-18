<template>
  <div :class="classList">
    <component :is="tag" class="mmmTitle__that"><slot>{{ title }}</slot></component>
    <span v-if="subtitle" class="mmmTitle__subtitle">{{ subtitle }}</span>
  </div>
</template>

<script>
import {_ps, _pbf} from '~~/services/helpers/componentHelpers'

export default {
  props: {
    title: _ps,
    subtitle: _ps,
    h1:_pbf,
    h2:_pbf,
    h4:_pbf,
    h5:_pbf,
    notHeader:_pbf,
    horizontal:_pbf,
  },
  computed: {
    classList() {
      let classList = ['mmmTitle']

      if (this.horizontal) classList.push('mmmTitle--horizontal')

      return classList.join(' ')
    },
    tag() {
      let tag = 'h3'

      if (this.h1) tag = 'h1'
      if (this.h2) tag = 'h2'
      if (this.h4) tag = 'h4'
      if (this.h5) tag = 'h5'
      if (this.notHeader) tag = 'span'

      return tag
    }
  }
}
</script>

<style lang="scss">
  .mmmTitle {
    $t: 'mmmTitle';

    &__that {
      font-weight: 600;      
      @include mfs(21px);
    }

    h1.#{$t}__that {
      @include mfs(34px);
    }

    h2.#{$t}__that {
      @include mfs(25px);
    }

    h4.#{$t}__that {
      @include mfs(15px);
    }

    h5.#{$t}__that {
      @include mfs(13px);
    }
  }
</style>