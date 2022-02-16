<script setup>
const route = useRoute()

const active = ref('home'),
      isSideout = ref(false),
      isParted = computed(() => {
        if (route.name !== 'product') return false
        if (this.cartItems.find(it => it.uuid === route.params.uuid)) return false
        return true
      }),
      cartCount = ref(0),
      isCartActive = computed(() => route.name === 'cart'),
      isCartDisabled = computed(() => cartCount.value === 0)

</script>

<script>
export default {
  name: 'AppTabBar'
}
</script>

<template>
  <div
    class="tapWrap"
    :class="{
      'is-blured': isSideout
    }"
  >
    <div
      class="tapbar"
      :class="{
        'is-parted': isParted,
        'is-hidden': isCartActive
      }"
    >
      <div class="tapbarItem">
        <div class="tapbarItem__icon">
          <MmmCssIcon type="catalog" />
        </div>
        <div class="tapbarItem__title">
          Каталог
        </div>
      </div>
      <NuxtLink
        :to="isCartDisabled ? '' : '/cart'"
        :class="{
          'is-active': isCartActive,
          'is-disabled': isCartDisabled
        }"
        class="tapbarItem"
      >
        <div class="tapbarItem__icon">
          <MmmCssIcon icon="cart" />
        </div>
        <div class="tapbarItem__title">
          Корзина
        </div>
        <MmmBadge class="tapbarItem__badge" v-if="cartCount" :value="cartCount" />
      </NuxtLink>
      <div class="tapbar__delimeter" />
      <div class="tapbarItem">
        <div class="tapbarItem__icon">
          <MmmCssIcon icon="enter" />
        </div>
        <div class="tapbarItem__title">
          Войти
        </div>
      </div>
      <div class="tapbarItem" @click="showSideout">
        <div class="tapbarItem__icon">
          <MmmCssIcon icon="menu" />
        </div>
      </div>
    </div>
    <div
      class="sideout"
      :class="{'is-active': isSideout}"
    >
      <div
        class="sideout__overflow"
        :class="{'is-active': isSideout}"
        @click="hideSideout"
      />
      <div
        class="sideout__box"
        :class="{'is-active': isSideout}"
      >
        <div class="sideMenu">
          <div class="sideMenu__header">
            <div class="sideMenu__logo">
              Ресторека
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @include block(tapbar) {
    position: fixed;
    z-index: 12;
    bottom: 3vmax;
    left: 5vw;
    width: 90vw;
    background: rgba( 214, 224, 240, 0.68 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    -webkit-backdrop-filter: blur( 21.0px );
    backdrop-filter: blur( 21.0px );
    border-radius: 13px;
    display: flex;
    justify-content: space-between;
    transition: all .21s;
    @include vmin(padding, 8px);

    @include element(delimeter) {
      flex: 0;
      transition: flex .34s;
    }

    @include when(blured) {
      filter: blur(13);
    }

    @include when(hidden) {
      bottom: -100px;
      transform: scale(.5);
    }

    @include when(parted) {
      @include element(delimeter) {
        display: inline-block;
        flex: auto
      }
    }
  }

  @include block(tapbarItem) {
    @include vmin(min-width, 42px);
    @include vmin(min-height, 42px);
    @include vmin(margin-bottom, -5px);
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    transition: all .21s;
    color: $main;

    @include element(icon) {
      @include vmin(height, 21px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include element(title) {
      @include vmin(margin-top, 5px);
      text-transform: uppercase;
      font-weight: 500;
      font-size: .55rem;
    }

    & > .tapbarItem__badge {
      right: 21%;
    }

    &:hover, &:focus {
      box-shadow: inset 8px 8px 13px #ebedf0,
                  inset -8px -8px 13px #ffffff;
    }

    @include when(highlighted) {
      background: #fafcff;
      box-shadow:  8px 8px 13px #ebedf0,
                -8px -8px 13px #ffffff;
    }

    @include when(active) {
      color: $primary;
    }

    @include when(disabled) {
      color: $disabled;
    }
  }

  @include block(sideout) {
    position: fixed;
    z-index: 13;
    width: 100%;
    height: 100%;
    left: -100%;
    transition: all .13s ease-in;
    @include when(active) {
      left: 0;
      top: 0;
    }

    @include element(box) {
      position: absolute;
      top: 0;
      left: -89vw;
      width: 89vw;
      height: 100vh;
      border-radius: 0 21px 21px 0;
      background: rgba( 214, 224, 240, 0.95 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      -webkit-backdrop-filter: blur( 13.0px );
      backdrop-filter: blur( 13.0px );
      transition: all .34s ease-in;

      @include when(active) {
        left: 0;
        transition: all .21s ease-out;
      }
    }

    @include element(overflow) {
      background-color: rgba(37, 108, 214, 0.33);
      opacity: 0;
      width: 100%;
      height: 100%;
      @include when(active) {
        opacity: 1;
        transition: all .21s ease-out;
        transition-delay: .21s;
      }
    }

  }

  @include block(sideMenu) {
    @include vmin(padding, 13px);

    @include element(logo) {
      background: #8510ef; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #8510ef, #10bdef); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #8510ef, #10bdef); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      @include mfs(21px);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
</style>
