<template>
  <Transition
    enter-active-class="fadeIn"
    move-class="fade-move"
    leave-active-class="fadeOut"
  >
    <LazyNuxtDynamic 
      :component="componentTyped" 
      :hydration="hydration"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </Transition>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: ''
    },
    hydration: {
      type: String,
      default: 'WhenVisible'
    },
    componentData: {
      type: Object | Array | String | Boolean | Number,
      default: () => {}
    },
    horizontal: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    componentTyped() {
      const deviceType = 'Mobile', //this.$device.isDesktopOrTablet ? 'Desktop' : 'Mobile',
            justType = this.horizontal ? 'Horizontal' : 'Default'
      return 'ReCardProduct' + deviceType + justType
    }
  }
}
</script>

<style lang="scss">
 @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
  }
  .fade-move {
    transition: transform .3s ease-out;
  }
</style>
