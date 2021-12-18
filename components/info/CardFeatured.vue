<template>
  <nuxt-link :to="to" class="featured" :style="styled">
    <div class="featured__pic">
      <img v-if="image" :src="image" />
    </div>
    <div class="featured__title">
      {{ title }}
    </div>
    <div class="featured__details">
      {{ details }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      required: true
    },
    details: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    bg_start: {
      type: String,
      default: ''
    },
    bg_finish: {
      type: String,
      default: ''
    },
  },
  computed: {
    styled() {
      let style = ''

      // if (this.backgroundColor) style += 'background-color: ' + this.backgroundColor + '; '

      if (this.bg_start && this.bg_finish) {
        const bg = {
              direction: '145.24deg',
              bg_start: this.bg_start ?? '#4E019C',
              startPos: '5.64%',
              bg_finish: this.bg_finish ?? '#4E019C',
              finishPos: '92.31%'
            },
            bgStr = 'linear-gradient(' + bg.direction + ', ' + bg.bg_start + ' ' + bg.startPos + ', ' + bg.bg_finish + ' ' + bg.finishPos + ');'

        style += 'background: ' + bgStr +'; '
      }
      return style
    }
  },
}
</script>

<style lang="scss">
@include block(featured) {
  cursor: pointer;
  position: relative;
  width: min-content;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $light;
  text-decoration: none;

  @media screen and (min-width: $breakpoint-desktop) {
    @include vw(min-width, 223px);
    @include vw(min-height, 223px);
    @include vw(padding, 13px);
  }
  @media screen and (max-width: $breakpoint-desktop - 1) {
    @include vmin(min-width, 144px);
    @include vmin(min-height, 144px);
    @include vmin(padding, 13px);
  }

  &:hover {
    color: $light;
  }

  @include element(pic) {
    position: absolute;
    @media screen and (min-width: $breakpoint-desktop) {
      @include vw(min-height, 89px);
      @include vw(max-height, 144px);
      @include vw(min-width, 89px);
      @include vw(top, -55px);
      @include vw(left, -21px);
    }
    @media screen and (max-width: $breakpoint-desktop - 1) {
      @include vmin(min-height, 89px);
      @include vmin(max-height, 144px);
      @include vmin(min-width, 89px);
      @include vmin(top, -34px);
      @include vmin(left, -13px);
    }    
  }

  @include element(title) {    
    display: flex;
    align-items: flex-end;
    @media screen and (min-width: $breakpoint-desktop) {
      @include vw(padding-top, 55px);
      @include vw(min-height, 144px);
      @include font-vw(21px);
    }
    @media screen and (max-width: $breakpoint-desktop - 1) {
      @include vmin(padding-top, 55px);
      @include vmin(min-height, 144px);
      @include font-vmin(21px);
    }
  }

  @include element(details) {
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: $breakpoint-desktop) {
      @include vw(padding-top, 8px);
      @include font-vw(12px);
    }
    @media screen and (max-width: $breakpoint-desktop - 1) {
      @include vmin(padding-top, 8px);
      @include font-vmin(12px);
    }
  }
}
</style>
