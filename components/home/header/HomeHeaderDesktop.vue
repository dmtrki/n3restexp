<script setup>
import {useCartStore} from "../../../modules/cart/stores/cart";

const { dataset } = defineProps({
  dataset: {
    type: Object,
    default: () => {}
  }
})

const cart = useCartStore()

// Data & computed
const searchString = ref(''),
      isModalCall = ref(false),
      cartUrl = computed(() => cart.isEmpty ? '#' : '/cart')

// Methods
const showModalCall = () => isModalCall.value = !isModalCall.value

</script>

<template>
  <div class="header">
    <div class="header__logo">
      <nuxt-link to="/" class="logo logo--header">
        <div class="logo__text">
          <div class="logo__rea logo__rea--first">
            RESTO
          </div>
          <div class="logo__rea logo__rea--second">
            RECA
          </div>
          <div class="logo__rea logo__rea--third">
            RU
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="header__main">
      <div class="header__nav">
        <ul class="nav nav--header">
          <template v-if="dataset.menu">
            <li v-for="(item, index) in dataset.menu" :key="index" class="nav__item">
              <a :href="item.url" class="nav__link">
                {{ item.title }}
              </a>
            </li>
          </template>
          <li class="nav__item">
            <div class="navCallback" @click="showModalCall">
              <div class="navCallback__icon">
                <span class="i-phonelink_ring"></span>
              </div>
              <div class="navCallback__text">
                Заказать звонок
              </div>
            </div>
          </li>
        </ul>
        <div class="header__phone">
          {{dataset.common_phone}}
        </div>
      </div>
      <div class="header__actions">
        <div class="header__catalog">
          <div class="button button--middle button--transparent header__catalogTrigger">
            <span>Каталог оборудования</span>
            <i class="button__icon button__icon--catalog"></i>
          </div>
        </div>
        <div class="header__search">
          <div class="search">
            <input type="text" class="search__input input input--prime" placeholder="поиск товаров и категорий">
            <div class="search__icon"></div>
            <div class="search__tip"></div>
          </div>
        </div>
        <div class="header__account">
          <div class="accountBar">
            <a title="Избранное" href="#" class="accountBar__item">
              <span class="i-favorite_outline accountBar__icon"></span>
            </a>
            <a title="Зарегистрироваться\войти" href="#" class="accountBar__item">
              <span class="i-person_outline accountBar__icon"></span>
            </a>
            <nuxt-link :to="cartUrl" title="Корзина" class="accountBar__item">
              <span class="ri-shopping-cart accountBar__icon"></span>
              <div class="badge badge--position_top_right badge--primary">
                {{ cart.count }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>


    <ModalCall />

  </div>
</template>
<style lang="scss" scoped>
.dropdown-enter,.dropdown-leave-to {
  opacity: 0;
  transform: scale(.55) translateY(-3vw);
  transition: opacity, transform .21s ease-in;
}
.dropdown-enter-to, .dropdown-leave {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: opacity, transform .13s ease-out;
}
@mixin catalogTriggerActivated {
  &.is-activated {
    .button__icon {
      transform: rotate(-45deg) translateY(3px);
      &::before {

        transform: rotate(90deg);
      }
      &::after {
        transform: translateX(3px) translateY(-3px);
      }
    }
  }
};
@include block(catalogDropdown) {
  width: auto;
  text-decoration: none;
  @include padding-vw(55px, 13px, 21px, 13px);
  border-radius: 13px;
  background: rgba( 255, 255, 255, 0.55 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.34 );
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  position: absolute;
  @include up-vw(top, -13px);
  @include up-vw(left, -34px);
  transition: .21s ease-in;
  transform-origin: top;
}
.rootIcon {
  @include up-vw(width, 34px);
  @include up-vw(height, 34px);
  opacity: .55;
  path, circle {
    fill: $primary;
  }
}
@include block(header) {
  width: 100%;
  @include padding-vw(13px, 21px, 0, 21px);
  margin: auto;
  display: flex;
  position: relative;
  z-index: 10;
  @include element(main) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 34px;
  }
  @include element(nav) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  @include element(phone) {
    @include font-vw(21px);
    font-weight: 300;
  }
  @include element(actions) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    grid-template-rows: min-content;
    gap: 0em 1em;
    position: relative;
  }
  @include element(catalog) {
    flex-basis: 34%;
    min-width: 360px;
    position: relative;
  }

  @include element(catalogTrigger) {
    @include flex-centered;
    min-width: 269px;
    width: max-content;
    position: relative;
    z-index: 2;
    transform: scale(1);
    border: 2px solid transparent;
    transition: .2s ease-in;
    &:hover {
      background-color: lighten($primary, 68);
      .button__icon {
        transform: rotate(-45deg) translateY(3px);
        &::before {

          transform: rotate(90deg);
        }
        &::after {
          transform: translateX(3px) translateY(-3px);
        }
      }
    }
    @include catalogTriggerActivated;
  }
  @include element(search) {
    flex-basis: 55%;
  }
  @include modifier(light) {
    position: absolute;
    z-index: 10;
    padding-top: $p-medium;
    left: 0;
    top: 0;
    color: $light;
    @include element(catalogTrigger) {
      background-color: #430870;
      box-shadow: -9px 9px 18px rgba(60, 7, 100, 0.2), 9px -9px 18px rgba(60, 7, 100, 0.2), -9px -9px 18px rgba(82, 9, 136, 0.9), 9px 9px 23px rgba(60, 7, 100, 0.9), inset 1px 1px 2px rgba(82, 9, 136, 0.3), inset -1px -1px 2px rgba(60, 7, 100, 0.5);
      &:hover {
        box-shadow: -2px 2px 4px rgba(62, 7, 103, 0.2), 2px -2px 4px rgba(62, 7, 103, 0.2), -2px -2px 4px rgba(80, 9, 133, 0.9), 2px 2px 5px rgba(62, 7, 103, 0.9), inset 1px 1px 2px rgba(80, 9, 133, 0.3), inset -1px -1px 2px rgba(62, 7, 103, 0.5);
      }
      @include catalogTriggerActivated;
    }
    @include block(nav) {
      padding: 0;
      @include modifier(header) {
        align-items: center;
        @include element(link) {
          color: #fff;
        }
      }
    }
    @include block(navCallback) {
      background-color: lighten($primary,13%);
      color: $light;
      &:hover {
        background-color: $accent;
      }
    }
    @include block(logo) {
      @include element(rea) {
        color: $light!important;
      }
    }
    @include block(search) {

      @include element(tip) {
        color: rgba(255,255,255,.89)
      }
    }
    @include block(accountBar) {
      @include element(item) {
        color: #fff;
        &:hover {
          //background-color: rgba(12, 206, 255, 0.21);
        }
      }
    }
    a {
      color: #fff;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  background-image: url(assets/svg/logo.svg);
  background-repeat: no-repeat;
  @include up-vw(padding-left,70px);
  @include up-vw(height,89px);
  text-decoration: none;
  &__text {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    @include up-vw(font-size,21px);
    line-height: 1;
    letter-spacing: 0.3em;
    height: 100%;
    justify-content: space-between;
  }
  &__rea {
    color: #fff;
    &--first {
      color: #66208D;
    }
    &--second {
      color: #2E1B9C;
    }
    &--third {
      color: #0F8DA9;
    }
  }
}
@include block(nav) {
  @include modifier(header) {
    $base: 13px;
    display: flex;
    list-style: none;
    opacity: .89;
    @include up-vw(margin-bottom, $base);
    transition: opacity .1 ease-in;
    @include element(item) {
      @include up-vw(margin-right, golden($base));
    }
    @include element(link) {
      @include font-vw($base);
    }
  }
  @include modifier(footer) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    gap: 21px 34px;
    grid-auto-flow: row;
    @include element(item) {
      @supports not (display: grid) {
        width: 50%;
        padding: 1vw;
      }
    }
    @include element(link) {
      @include font-vw(14px);
    }
  }
  @include modifier(columns) {
    position: relative;
    width: 100%;
    min-height: 80vh;
    max-height: 100%;
    @include padding-vw(21px);
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat( auto-fill, minmax(1.5em, min-content) );
    gap: 8px;
    grid-auto-flow: column;

    @include element(item) {
      @supports not (display: grid) {
        width: 50%;
        padding: 1vw;
      }
    }
    @include element(link) {
      color: $link;
      @include font-vw(16px);
    }
  }
}
@include block(navCallback) {
  display: flex;
  align-items: center;
  cursor: pointer;
  @include padding-vw(3px, 8px);
  @include up-vw(margin-top,-3px);
  @include font-vw(13px);
  border-radius: 5px;
  @include perfect-transition;
  color: $primary;

  &:hover {
    background-color: lighten($primary,63%);
  }
  @include element(icon) {
    @include up-vw(margin-right,5px);
  }
  @include element(text) {
    line-height: initial;
  }
}
@include block(search) {
  position: relative;
  @include element(icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @include up-vw(left,21px);
    @include up-vw(width,13px);
    @include up-vw(height,13px);
    border-radius: 50%;
    border: 3px solid mix($primary, #fff, 35%);
    transition: opacity 0.25s ease, transform 0.43s cubic-bezier(0.694,  0.048, 0.335, 1.000);
    &:after {
      content: "";
      position: absolute;
      @include up-vw(right,-4px);
      @include up-vw(bottom,-6px);
      @include up-vw(width,3px);
      @include up-vw(height,8px);
      border-radius: 3px;
      transform: rotate(-45deg);
      background-color: mix($primary, #fff, 35%);
    }
  }
  @include element(input) {
    @include perfect-transition;
    @include up-vw(padding-left,55px);
    width: 100%;
    @include up-vw(margin,5px);
    @include pseudo(focus) {
      @include up-vw(padding-left,21px);
      ~ .search__icon {
        display: none;
      }
    }
  }
  @include element(tip) {
    color: lighten($main, 34%);
    font-weight: 300;
    @include font-vw(12px);
    @include up-vw(margin-bottom,-5px);
  }
}
@include block(accountBar) {
  display: flex;
  justify-content: flex-end;
  @include element(item) {
    @include flex-centered;
    position: relative;
    text-decoration: none;
    border-radius: 50%;
    @include perfect-transition;
    @include font-vw(21px);
    @include up-vw(margin-left,34px);
    @include padding-vw(5px);
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      border-radius: 50%;
      background: $accent;
      transform: scale(0);
      opacity:0;
      transition: .2s ease-in;
    }
    &:hover {
      background-color: rgba(12, 206, 255, 0.21);
      color: #fff;
      &::after {
        transform: scale(1);
        opacity: .34;
      }
    }
  }
  @include element(icon) {
    position: relative;
    z-index: 1;
  }
}
.tooltip {
  display: block !important;
  z-index: 10000;
  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }
  &[x-placement^="top"] {
    margin-bottom: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="bottom"] {
    margin-top: 5px;
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="right"] {
    margin-left: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &[x-placement^="left"] {
    margin-right: 5px;
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &.popover {
    $color: #f9f9f9;
    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }
    .popover-arrow {
      border-color: $color;
    }
  }
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }
  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>