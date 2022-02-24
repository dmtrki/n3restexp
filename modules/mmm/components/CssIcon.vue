<script setup>
  const props = defineProps({
    icon: {
      type: String,
      default: 'next'
    },
    size: {
      type: String,
      default: ''
    }
  })

  const iconToClass = {
    'phone': 'gg-smartphone-shake',
    'filters': 'gg-filters',
    'sort': 'gg-sort-za',
    'next': 'gg-next',
    'prev': 'gg-prev',
    'search': 'gg-search',
    'catalog': 'gg-list-search',
    'feed': 'gg-feed',
    'menu': 'gg-menu',
    'cart': 'gg-shopping-cart',
    'arrow-left': 'gg-arrow-left',
    'arrow-right': 'gg-arrow-right',
    'arrow-long-up': 'gg-arrow-long-up',
    'film': 'gg-film',
    'gift': 'gg-gift',
    'check': 'gg-check',
    'enter': 'gg-enter',
  }

  const typeNeedsChild = []

  const iconClass = computed(() => iconToClass[props.icon] ?? false)

  const classes = computed(() => {
    let classList = iconClass ? [iconClass.value] : []

    if (props.size) classList.push(`mmmCssIcon--${props.size}`)
    return classList.join(' ')
  }),
    includeChild = computed(() => typeNeedsChild.includes(iconClass.value))

</script>

<script>
export default {
  name: 'MmmCssIcon'
}
</script>

<template>
  <div :class="classes">
    <div v-if="includeChild" />
    <div v-if="includeChild" />
  </div>
</template>

<style lang="scss">
:root
.mmmCssIcon {
  &--small {
    --ggs: 0.9;
  }
  &--xsmall {
    --ggs: 0.8;
  }
  &--smallest {
    --ggs: 0.5;

    &.gg-next {
      &::after {
        top: 2px;
      }
    }
  }
}

.gg-smartphone-shake {
  background:
      linear-gradient(to left,
          currentColor 5px,transparent 0)
          no-repeat 4px 12px/2px 2px;
  box-sizing: border-box;
  position: relative;
  transform: scale(var(--ggs,1));
  display: block;
  width: 14px;
  height: 20px;
  border: 2px solid;
  border-radius: 2px
}
.gg-smartphone-shake::after,
.gg-smartphone-shake::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 10px;
  width: 6px;
  border: 2px solid transparent;
  overflow: hidden;
  box-shadow: 2px 0 0,
        inset -2px 0 0;
  top: 3px;
  left: -12px
}
.gg-smartphone-shake::after {
  transform: scaleX(-1);
  left: 16px
}


 .gg-filters {
 display: block;
 box-sizing: border-box;
 position: relative;
 transform: scale(var(--ggs,1));
 width: 19px;
 height: 19px;
 background:
 radial-gradient(
 circle,
 currentColor 26%,
 transparent 26%
 )
}

.gg-filters::after,
.gg-filters::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border: 2px solid;
 border-radius: 100%;
 width: 14px;
 height: 14px
}

.gg-filters::after {
 bottom: 0;
 right: 0
}

// ***

 .gg-backspace {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 14px;
 height: 14px;
 transform: scale(var(--ggs,1));
 border: 2px solid;
 border-left: 0;
 border-top-right-radius: 2px;
 border-bottom-right-radius: 2px
 }

 .gg-backspace::after,
 .gg-backspace::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
 }

 .gg-backspace::before {
 background:
 linear-gradient( to left,
 currentColor 18px,transparent 0)
 no-repeat center center/10px 2px;
 border-right: 3px solid transparent;
 box-shadow: inset 0 0 0 2px;
 right: 2px;
 bottom: 1px;
 width: 8px;
 height: 8px;
 border-left: 3px solid transparent;
 transform: rotate(45deg)
 }

 .gg-backspace::after {
 width: 10px;
 height: 10px;
 border-top: 2px solid;
 border-left: 2px solid;
 border-top-left-radius: 1px;
 transform: rotate(-45deg);
 top: 0;
 left: -5px
 }

 // ***

 .gg-next {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;

  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    right: 6px;
    top: 4px
  }
}

 // ***

 .gg-prev {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;

  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(135deg);
    right: 6px;
    top: 4px
  }
}

// ***
 .gg-feed,
.gg-feed::after,
.gg-feed::before {
 display: block;
 box-sizing: border-box;
 background: currentColor;
 box-shadow: 0 10px 0 0
}

.gg-feed {
 margin-left: -8px;
 margin-top: -8px;
 position: relative;
 transform: scale(var(--ggs,1));
 width: 7px;
 height: 7px;
 border-radius: 1px
}

.gg-feed::after,
.gg-feed::before {
 content: "";
 position: absolute;
 border-radius: 3px;
 width: 12px;
 height: 2px;
 top: 1px;
 left: 9px;
 opacity: .8
}

.gg-feed::after {
 width: 8px;
 top: 4px;
 opacity: .5
}


// ***
 .gg-shopping-cart {
 display: block;
 box-sizing: border-box;
 position: relative;
 transform: scale(var(--ggs,1));
 width: 20px;
 height: 21px;
 background:
 linear-gradient(
 to left,currentColor 12px,
 transparent 0)
 no-repeat -1px 6px/18px 2px,
 linear-gradient(
 to left,currentColor 12px,
 transparent 0)
 no-repeat 6px 14px/11px 2px,
 linear-gradient(
 to left,currentColor 12px,
 transparent 0)
 no-repeat 0 2px/4px 2px,
 radial-gradient(
 circle,currentColor 60%,
 transparent 40%)
 no-repeat 12px 17px/4px 4px,
 radial-gradient(
 circle,currentColor 60%,
 transparent 40%)
 no-repeat 6px 17px/4px 4px
}

.gg-shopping-cart::after,
.gg-shopping-cart::before {
 content: "";
 display: block;
 position: absolute;
 box-sizing: border-box;
 width: 2px;
 height: 14px;
 background: currentColor;
 top: 2px;
 left: 4px;
 transform: skew(12deg)
}

.gg-shopping-cart::after {
 height: 10px;
 top: 6px;
 left: 16px;
 transform: skew(-12deg)
}

// ***
 .gg-menu {
 transform: scale(var(--ggs,1))
}

.gg-menu,
.gg-menu::after,
.gg-menu::before {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 20px;
 height: 2px;
 border-radius: 3px;
 background: currentColor
}

.gg-menu::after,
.gg-menu::before {
 content: "";
 position: absolute;
 top: -6px
}

.gg-menu::after {
 top: 6px
}

// ***

 .gg-list-search {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 12px;
 height: 6px;
 border-top: 0 solid transparent;
 border-bottom: 2px solid transparent;
 box-shadow:
 inset 0 -2px 0,
 -2px 4px 0 -2px,
 0 -2px 0 0
}

.gg-list-search::after,
.gg-list-search::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 bottom: -7px
}

.gg-list-search::after {
 width: 3px;
 height: 2px;
 background: currentColor;
 transform: rotate(45deg);
 right: -4px
}

.gg-list-search::before {
 width: 6px;
 height: 6px;
 border-radius: 4px;
 border: 2px solid;
 right: -3px
}

// ***

 .gg-search {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 16px;
 height: 16px;
 border: 2px solid;
 border-radius: 100%;
 margin-left: -4px;
 margin-top: -4px
}

.gg-search::after {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border-radius: 3px;
 width: 2px;
 height: 8px;
 background: currentColor;
 transform: rotate(-45deg);
 top: 10px;
 left: 12px
}

// ***
 .gg-sort-za,
.gg-sort-za::after,
.gg-sort-za::before {
 display: block;
 box-sizing: border-box;
 height: 2px;
 border-radius: 4px;
 background: currentColor
}

.gg-sort-za {
 position: relative;
 transform: scale(var(--ggs,1));
 width: 8px
}

.gg-sort-za::after,
.gg-sort-za::before {
 content: "";
 position: absolute
}

.gg-sort-za::before {
 width: 12px;
 top: 4px;
 left: -2px
}

.gg-sort-za::after {
 width: 4px;
 top: -4px;
 left: 2px
}

// ***
 .gg-arrow-long-up {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 border-right: 2px solid transparent;
 border-left: 2px solid transparent;
 border-bottom: 4px solid transparent;
 box-shadow: inset 0 0 0 2px;
 height: 24px;
 width: 6px
}

.gg-arrow-long-up::after,
.gg-arrow-long-up::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
}

.gg-arrow-long-up::after {
 width: 6px;
 height: 6px;
 border-top: 2px solid;
 border-left: 2px solid;
 transform: rotate(45deg);
 top: 0;
 left: -2px
}

.gg-arrow-long-up::before {
 width: 6px;
 height: 6px;
 border: 2px solid;
 border-radius: 8px;
 bottom: -4px;
 left: -2px
}

// ***
 .gg-arrow-right {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px
}

.gg-arrow-right::after,
.gg-arrow-right::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 right: 3px
}

.gg-arrow-right::after {
 width: 8px;
 height: 8px;
 border-top: 2px solid;
 border-right: 2px solid;
 transform: rotate(45deg);
 bottom: 7px
}

.gg-arrow-right::before {
 width: 16px;
 height: 2px;
 bottom: 10px;
 background: currentColor
}

// ***
 .gg-arrow-left {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px
}

.gg-arrow-left::after,
.gg-arrow-left::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 left: 3px
}

.gg-arrow-left::after {
 width: 8px;
 height: 8px;
 border-bottom: 2px solid;
 border-left: 2px solid;
 transform: rotate(45deg);
 bottom: 7px
}

.gg-arrow-left::before {
 width: 16px;
 height: 2px;
 bottom: 10px;
 background: currentColor
}

// ***
 .gg-film,
.gg-film::after {
 display: block;
 box-sizing: border-box;
 border-radius: 3px
}

.gg-film {
 border: 2px solid;
 position: relative;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 18px
}

.gg-film::after {
 content: "";
 position: absolute;
 width: 2px;
 height: 2px;
 background: currentColor;
 left: 2px;
 top: 2px;
 box-shadow:
 0 4px 0,
 0 8px 0,
 12px 0 0,
 12px 4px 0,
 12px 8px 0
}

// ***
 .gg-gift {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 14px;
 margin-top: 8px;
 border: 2px solid transparent;
 box-shadow:
 inset 2px 0 0,
 inset -2px 0 0,
 0 -2px 0,
 inset 0 2px 0,
 inset 0 -2px 0;
 background:
 linear-gradient(to left,
 currentColor 10px,transparent 0),
 linear-gradient(to left,
 currentColor 10px,transparent 0),
 linear-gradient(to left,
 currentColor 10px,transparent 0);
 background-repeat: no-repeat;
 background-size:
 2px 10px,2px 10px,2px 10px;
 background-position:
 8px 0,18px -8px,-2px -8px
}

.gg-gift::after,
.gg-gift::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 border-radius: 3px;
 width: 6px;
 height: 8px;
 border: 2px solid;
 top: -10px
}

.gg-gift::after {
 left: 3px;
 transform: rotate(-45deg)
}

.gg-gift::before {
 right: 3px;
 transform: rotate(45deg)
}

// ***
 .gg-check {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px;
 border: 2px solid transparent;
 border-radius: 100px
}

.gg-check::after {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 left: 3px;
 top: -1px;
 width: 6px;
 height: 10px;
 border-width: 0 2px 2px 0;
 border-style: solid;
 transform-origin: bottom left;
 transform: rotate(45deg)
}

// ***
 .gg-enter {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 16px;
 height: 18px;
 border: 2px solid;
 border-left: 0;
 box-shadow:
 -8px -6px 0 -6px,
 -8px 6px 0 -6px
}

.gg-enter::after,
.gg-enter::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 right: 4px
}

.gg-enter::before {
 background: currentColor;
 width: 16px;
 height: 2px;
 top: 6px
}

.gg-enter::after {
 width: 6px;
 height: 6px;
 border-right: 2px solid;
 border-top: 2px solid;
 top: 4px;
 transform: rotate(45deg)
}
</style>
