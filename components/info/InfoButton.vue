<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  pictureUrl: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  bg: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: '#'
  }
})

const background = computed(() => props.bg ? `background: ${props.bg};` : null)
</script>

<template>
  <NuxtLink :to="props.to" class="infoButton" :style="props.background">
    <div class="infoButton__pic">
      <slot/>
    </div>
    <div class="infoButton__title"><span>{{ props.title }}</span></div>
    <div class="infoButton__arrow">
      <MmmCssIcon type="next" />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'InfoButton',
}
</script>

<style lang="scss">
.infoButton {
  width: 100%;
  @include vmin(padding-top, 13px);
  @include vmin(padding-bottom, 13px);
  @include vmin(padding-left, 89px);
  @include vmin(padding-right, 21px);
  @include vmin(margin-top, 21px);
  position: relative;
  border-radius: 13px;
  color: #fff;
  background: linear-gradient(120.56deg, #269F98 23.58%, #66219C 94.38%);
  text-transform: uppercase;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__pic {
    position: absolute;
    @include vmin(width, 55px);
    @include vmin(height, 55px);
    flex-shrink: 0;
    top: -13px;
    left: 13px;

    * {max-width: 100%;max-height: 100%;}
  }
}
</style>
