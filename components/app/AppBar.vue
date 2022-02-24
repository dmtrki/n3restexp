<script setup>

const   title = useAppBarTitle(),
        subtitle = useAppBarSubtitle(),
        previous = useAppBarPrevious(),
        show = useAppBarVisibility()

const back = () => {
  this.$router.back()
}

const appbarTitle = ref(null)
const appbar = ref(null)

onMounted(() => {
  if (appbarTitle.value !== null) {
    let appbarTitleWidth = appbarTitle.offsetWidth,
        appbarWidth = appbar.offsetWidth,
        allowedWidth = appbarWidth - 136

    if (appbarTitleWidth > allowedWidth) {
      const titleFontSize =  allowedWidth * 0.08
      appbarTitle.style.fontSize = titleFontSize + 'px'
    }
  }
})
</script>

<script>
export default {
  name: 'AppBar'
}
</script>

<template>
  <div
    :class="[
      'appbar',
      {
        'is-hidden': !show
      }
    ]"
    ref="appbar"
  >
   <div class="appbar__back" @click="back">

    </div>
    <div class="appbar__title" ref="appbarTitle">
      <div v-if="previous" class="appbar__previous"> {{previous.title}}</div>
      <h1 class="appbarTitle">{{ title }}</h1>
      <span v-if="subtitle" class="appbar__subtitle">{{ subtitle }}</span>
    </div>
    <div class="appbar__action">

    </div>
  </div>
</template>

<style lang="scss" scoped>
@include block(appbar) {
  @include vmin(padding-top, 13px);
  @include vmin(padding-bottom, 13px);
  @include vmin(padding-left, 13px);
  @include vmin(padding-right, 13px);
  @include vmin(margin-bottom, 21px);
  position: relative;
  background: #F5F7FF;
  box-shadow: 0 5px 0 #E8EBFF;
  border-radius: 0 0 21px 21px;
  display: flex;
  align-items:center;
  transition: all .34s ease-out;
  @include element(back) {
    @include flex-centered;
    @include fluid(width, 42px);
    @include fluid(height, 42px);
    flex-shrink: 0;
  }

  @include element(previous) {
    @include ff(13px);
    color: $disabled;
  }
  @include element(title) {
    @include ff(16px);
    @include vmin(padding-left, 13px);
    @include vmin(padding-right, 13px);
  }

  @include element(action) {
    @include fluid(width, 42px);
    @include fluid(height, 42px);
    flex-shrink: 0;
  }

  @include when(hidden) {
    margin-top: -110px;
  }
}

</style>
