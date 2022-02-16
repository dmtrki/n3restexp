<script setup>
const {$device} = useNuxtApp()

const props = defineProps({
  base: {
    type: String,
    required: true
  },
  dataset: {
    type: [Object, Array],
    default: () => {}
  },
  mobileOnly: {
    type: Boolean,
    default: false
  },
  lazy: {
    type: Boolean,
    default: false
  }
})

const {
  base,
  dataset,
  mobileOnly,
  lazy
} = props


const componentDeviceTyped = computed(() => {
      if (mobileOnly && $device.isDesktopOrTablet) return false
      return $device.isDesktopOrTablet ? base + 'Desktop' : base + 'Mobile'
    }),
    componentName = computed(() => {
      let a = componentDeviceTyped.value !== false && lazy ? `Lazy${componentDeviceTyped.value}` : componentDeviceTyped.value
      console.log(a)
    })

</script>

<script>
export default {
  name: 'MmmProxy'
}
</script>

<template>
  <Component
      v-if="componentName"
      :is="componentName"
      v-bind="{
        ...dataset,
        ...$attrs
      }"
      enter-active-class="fadeIn"
      move-class="fade-move"
      leave-active-class="fadeOut"
  >
    <slot/>
  </Component>
</template>

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
