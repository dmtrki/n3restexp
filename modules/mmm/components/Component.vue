<script setup>
import { useVModels } from '@vueuse/core'

const {$device} = useNuxtApp()

const props = defineProps({
  containerClass: {
    type: String,
    default: ''
  },
  componentName: {
    type: String,
    required: true
  },
  mobileOnly: {
    type: Boolean,
    default: false
  },
  lazy: {
    type: Boolean,
    default: true
  }
})

const {
  containerClass,
  componentName,
  mobileOnly,
  lazy
} = useVModels(props)

const componentDeviceTyped = computed(() => {
  if (mobileOnly && $device.isDesktopOrTablet) return false
  return $device.isDesktopOrTablet ? componentName + 'Desktop' : componentName + 'Mobile'
}),
    component = computed(() => componentDeviceTyped && lazy ? `Lazy${componentDeviceTyped}` : componentDeviceTyped)
</script>
<template>
  <Component
      v-if="component"
      :is="component"
      v-bind="{
        ...$attrs,
        component,
      }"
      :ref="componentRef"
      enter-active-class="fadeIn"
      move-class="fade-move"
      leave-active-class="fadeOut"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]>
      <slot :name="slotName" />
    </template>
    <template
        v-for="(_, scopedSlotName) in $scopedSlots"
        v-slot:[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
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
