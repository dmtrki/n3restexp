<template>
  <div class="productCardHorizontal">
    <ClientOnly>
      <div
          class="productCardHorizontal__thumb"
          :style="`background-image: url(${thumb});`"
          v-touch:longtap="addToFavorites"
          @click="goToProduct"
      >
        <ul class="productCardHorizontal__labels">
          <li class="productCardHorizontal__label"></li>
        </ul>
      </div>
    </ClientOnly>
    <div class="productCardHorizontal__info">
      <div class="productCardHorizontal__main">
        <NuxtLink :to="`/product/${uuid}`" class="productCardHorizontal__title">
          {{ title }}
        </NuxtLink>
        <ul class="productCardHorizontal__tags">

        </ul>
        <div class="productCardHorizontal__description" @click="goToProduct">
          {{ description_cutted }}
        </div>
      </div>
      <div class="productCardHorizontal__side">
        <div v-if="!discounted" class="productCardHorizontal__price" @click="goToProduct">
          {{ price_formatted }}
        </div>
        <div v-else class="productCardHorizontal__price_discounted" @click="goToProduct">
          <div class="productCardHorizontal__price_discount"></div>
          <div class="productCardHorizontal__price_actual"></div>
          <div class="productCardHorizontal__price_origin"></div>
        </div>
        <div class="productCardHorizontal__actions">
          <ReButtonAddToCart :uuid="uuid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      default: '/images/pp.png'
    },
    labels: {
      type: Array,
      default: () => []
    },
    id: {
      type: String | Number,
      required: true
    },
    uuid: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    },
    description: {
      type: String | Array,
      default: ''
    },
    description_cutted: {
      type: String | Array,
      default: ''
    },
    price: {
      type: String,
      required: false
    },
    price_formatted: {
      type: String,
      default: ''
    },
    discounted: {
      type: Boolean,
      default: false
    },
    priceDiscounted: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    descriptionFormatted() {
      return (typeof this.description === 'array') ? this.description[0] : this.description
    }
  },
  methods: {
    addToFavorites() {
      console.log('added to favs')
    },
    goToProduct() {
      this.$router.push('/product/' + this.uuid)
    }
  }
}
</script>

<style lang="scss">
  @include block(productCardHorizontal) {
    @include padding-vmin(13px);
    display: flex;
    justify-content: flex-start;
    cursor: pointer;


    @include element(thumb) {
      @include thumb-bg;
      flex-shrink: 0;
      @include vmin(width, 89px);
      @include vmin(height, 89px);
    }

    @include element(info) {
      @include vmin(padding-top, 5px);
      @include vmin(padding-bottom, 5px);
      @include vmin(padding-left, 5px);
      @include vmin(padding-right, 5px);
      flex: 1;
      display: flex;
      flex-direction: column;
    }

      @include element(title) {
        @include mfs(12px);
        color: $main;
      }

      @include element(description) {
        color: $info;
        @include mfs(10px);
      }

    @include element(side) {
      @include flex-centered-between;
    }

    @include element(price) {
      color: $primary;
    }
  }
</style>
