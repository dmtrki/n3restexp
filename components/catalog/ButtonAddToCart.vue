<template>
  <div class="ATC" @click="add">
    <transition name="fade">
      <template v-if="isAdded">
        <MmmButton @click="$router.push('/cart')" class="ATC__toCart" accent smallest icon="arrow-right" icon-right css-icon>
          в корзине
        </MmmButton>
      </template>
      <template v-else>
        <div class= "ATC__icon">
          <SvgToCart />
        </div>
        <div v-if="labeled" class="ATC__label">В корзину</div>
      </template>
    </transition>
  </div>
</template>
<script>
// https://codepen.io/simeonoff/details/QKYwba

export default {
  components: {
    SvgToCart: () => import('~~/assets/svg/toCart.svg')
  },
  props: {
    uuid: {
      type: String,
      required: true
    },
    labeled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isAdded() {
      return false//this.items.find(it => it.uuid === this.uuid)
    }
  },
  methods: {
    addToStore() {

    },
    add() {
      if (this.isAdded) return
      console.log(this.uuid)
      this.addToStore(this.uuid)
    }
  }
}
</script>

<style lang="scss">
@include block(ATC) {
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 34px;
  height: 34px;
  color: $main;

  @include element(icon) {
    color: $primary;
    fill: $primary;
    width: 13px;
    height: 13px;
  }

  @include element(toCart) {
    padding: 0 3px;
  }
}

@include v-transition;
</style>
