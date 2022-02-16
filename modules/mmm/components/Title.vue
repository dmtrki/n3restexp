<script setup>
import {_ps, _pbf} from '~~/services/helpers/componentHelpers'

  const props = defineProps({
    title: _ps,
    subtitle: _ps,
    h1:_pbf,
    h2:_pbf,
    h4:_pbf,
    h5:_pbf,
    span:_pbf,
    horizontal:_pbf,
  })

  const classes = computed(() => {
    let classList = ['mmmTitle']
    if (props.horizontal) classList.push('mmmTitle--horizontal')
    return classList.join(' ')
  }),
  tag = computed(() => {
    if (props.h1) return 'h1'
    if (props.h2) return 'h2'
    if (props.h4) return 'h4'
    if (props.h5) return 'h5'
    if (props.span) return 'span'
    return 'h3'
  })
</script>

<script>
export default {
  name: 'MmmTitle'
}
</script>

<template>
  <div :class="classes">
    <Component :is="tag" class="mmmTitle__that"><slot>{{ title }}</slot></Component>
    <span v-if="subtitle" class="mmmTitle__subtitle">{{ subtitle }}</span>
  </div>
</template>

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
