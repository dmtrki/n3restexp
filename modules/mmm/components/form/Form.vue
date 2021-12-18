<template>
  <form
    v-bind="$attrs"
    v-on="$listeners"
    :class="classList"
  >
    <div v-if="title" class="mmmForm__header">
      <div class="mmmForm__title">{{ title }}</div>
      <div class="mmmForm__actions"></div>
    </div>
    <slot name="top"/>
    <slot/>
    <slot name="bottom"/>
  </form>
</template>
<script>
import theming from '~/mixins/mmm/componentTheming'

export default {
  mixins:  [theming],
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classBase: 'Form',
    }
  },
  computed: {
    classList() {
      return this.classListBase.join(' ')
    }
  }
}
</script>

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