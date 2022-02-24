<script setup>
import {_styleProps, _ps} from '~/helpers/componentsHelper'
import useTheming from '~/composables/components/useTheming'

const props = defineProps({
  ..._styleProps,
  title: _ps
})

const {classRoot, themingClasses} = useTheming('Form')

const classes = computed(() => {
  themingClasses.join(' ')
})
</script>

<template>
  <form
    v-bind="$attrs"
    :class="classes"
  >
    <div v-if="title" class="mmmForm__header">
      <div class="mmmForm__title">{{ props.title }}</div>
      <div class="mmmForm__actions"></div>
    </div>
    <slot name="top"/>
    <slot/>
    <slot name="bottom"/>
  </form>
</template>

<style lang="scss">
  .mmmForm {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    &__header {
      @include vmin(margin-top, 5px);
      @include vmin(margin-bottom, 21px);
    }

      &__title {
        @include mfs(13px);
        text-transform: uppercase;
      }

    &__row {
      display: flex;
      flex-wrap: wrap;
    }


  }


  @include block(mmmForm) {

    @include modifier(medium) {
      @include vmin(max-width, 377px);
    }
  }
</style>
