<template>
  <NuxtLink :to="to" class="cardCategory">
    <div class="cardCategory__picture" :style="pictureBg"></div>
    <div class="cardCategory__title">
      {{ title }}
      <div v-if="badge" class="cardCategory__badge">
        {{ badge }}
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    parentSlug: {
      type: String,
      default: ''
    },
    pictureUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    badge: {
      type: Boolean | String,
      default: false
    }
  },
  computed: {
    to() {
      return (this.parentSlug) ? `/${this.parentSlug}/${this.slug}/` : `/${this.slug}/`
    },
    pictureBg() {
      return (this.pictureUrl) ? `background-image: url(${this.pictureUrl});` : ``
    }
  }
}
</script>

<style lang="scss">
.cardCategory {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include vmin(padding, 21px);
  border-radius: 21px;
  background-color: #fff;
  @include vmin(min-width, 144px);
  @include vmin(min-height, 144px);
  @include vmin(margin-right, 13px);
  @include vmin(margin-bottom, 13px);

  &__picture {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @include vmin(width, 55px);
    @include vmin(height, 55px);
  }

  &__title {
    position: relative;
    @include vmin(margin-top, 13px);
    font-size: 1.1rem;
    font-weight: 500;
  }
}
</style>