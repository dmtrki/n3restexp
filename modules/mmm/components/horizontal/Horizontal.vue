<template>
  <VueHorizontal
    :button="buttons"
    :scroll="scroll"
    :class="classList"
  >
    <template v-slot:btn-prev>
      <svg class="btn-left" viewBox="0 0 24 24">
        <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
      </svg>
    </template>
    <template v-slot:btn-next>
      <svg class="btn-right" viewBox="0 0 24 24">
        <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
      </svg>
    </template>
    <slot></slot>
  </VueHorizontal>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    },
    offsetTop: {
      type: String,
      default: ''
    },
    offsetBottom: {
      type: String,
      default: ''
    },
    buttons: {
      type: Boolean,
      default: () => false
    },
    buttonsDefault: {
      type: Boolean,
      default: () => false
    },
    scroll: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    classList() {
      let classes = 'mmmHorizontal'

      if (this.offsetTop) classes += ' mmmHorizontal--offsetTop_' + this.offsetTop

      return classes
    }
  },
}
</script>

<style lang="scss">
.v-hl-container {
  // @include vmin(padding-bottom, 55px);
}

  // @include block(horizontal) {
  //   @include fluid(margin-top, 21px);
  //   @include fluid(margin-bottom, 13px);
  // }
  .btn-left, .btn-right {
    padding: 6px;
    height: 100%;
    width: 42px;

    path {fill: $main}
  }

  .btn-left {
    background: linear-gradient(to left, #ffffff08 0, #ffffff21 50%, #ffffff34);
  }

  .btn-right {
    background: linear-gradient(to right, #ffffff21 0, #ffffff55 50%, #ffffff89);
  }
</style>