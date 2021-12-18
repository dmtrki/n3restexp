<template>
  <NuxtLink :to="to" @click="$emit('click')" class="infoCard" :style="`background-image: url('${backgroundImage}');`">
    <div class="infoCard__overflow" />
    <div class="infoCard__action">
      <MmmButton 
        link 
        on-dark 
        smallest 
        icon="arrow-right"
        css-icon
        icon-right
      >
        {{ actionText }}
      </MmmButton>
    </div>
    <div class="infoCard__content">
      <div v-if="title" class="infoCard__title">
        {{ title }}
      </div>
      <div
        v-for="(item, index) in titleComplex"
        :key="index"
        class="infoCard__title"
        :class="{
          'infoCard__title--bold': (item.bold === true),
          'infoCard__title--large': (item.large === true)
        }"
      >
        {{ item.text }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleComplex: {
      type: Array,
      default: () => []
    },
    actionText: {
      type: String,
      default: 'Подробнее'
    },
    to: {
      type: String | Object,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
  @include block(infoCard) {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 13px;
    max-width: 100%;
    width: 100%;
    height: 100%;
    @include vmin(max-width, 360px);
    @include vmin(padding, 34px);
    color: $light;

    @include element(overflow) {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(33,33,33,.33);
      border-radius: 13px;

    }

    @include element(content) {
      position: relative;
      z-index: 2;
    }

    @include element(action) {
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 2;
    }

    @include element(title) {
      @include titled;
      @include mfs(18px);
      @include vmin(margin-top, 8px);
      @include modifier(large) {
        @include mfs(21px);
      }
      @include modifier(bold) {
        font-weight: bold;
      }
    }
  }
</style>
