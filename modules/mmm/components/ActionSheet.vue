<script setup>
import useTheming from '~/composables/components/useTheming'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  tail: {
    type: Boolean,
    default: false
  },
  accent: {
    type: Boolean,
    default: false
  },
  relative: {
    type: Boolean,
    default: false
  }
})

const {classRoot} =  useTheming('ActionSheet')

const classes = computed(() => {
  if (this.tail) classList.push(r + '--taily')
  if (this.accent) classList.push(r + '--accent')
  if (this.relative) classList.push(r + '--relative')

  if (this.isOpen) classList.push('is-open')

  return classList.join(' ')
})

const isOpen = ref(false)

const open = () => isOpen.value = true
const close = () => isOpen.value = false
</script>

<script>
export default {
  name: 'MmmActionSheet'
}
</script>

<template>
  <ClientOnly>
    <div
        v-touch:tap="open"
        v-touch:swipe.top="open"
        v-touch:swipe.bottom="close"
        :class="classes"
    >
      <div v-if="props.title" :class="classRoot + '__title'">
        {{ props.title }}
      </div>

      <div :class="classRoot + '__content'">
        <slot />
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
  @include block(mmmActionSheet) {
    @include vmin(padding, 21px);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 34px 34px 0 0;
    background-color: rgba(247, 248, 255, 0.89);
    box-shadow: 0 -5px 0 #E8EBFF;

    @include element(title) {
      @include titled;
      @include mfs(13px);
      color: $disabled;
      text-align: center;
      transform: font-size, opacity .34s;
    }

    @include element(content) {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height .55s;
    }

    @include modifier(accent) {
      background: linear-gradient(132.41deg, rgba(244, 246, 251, 0.89) 0%, #E1E8FF 97.92%);
      border: 2px solid #E1E8FF;
    }

    @include modifier(relative) {
      position: relative;
      @include vmin(margin-top, 34px);
    }

    @include when(open) {
      @include element(title) {
        @include mfs(8px);
        opacity: .8;
      }
      @include element(content) {
        height: max-content;
        max-height: 90vh;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 55px;
      height: 2px;
      background-color: #0F4C8130;
      border-radius: 2px;
      cursor: pointer;
    }
  }
</style>
