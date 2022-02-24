<script lang="ts" setup>
import {_pbf} from '../shared/componentsHelper'
import {useStyledComponent, styledComponentOptions} from '../composables/useStyledComponent'

const styledOptions: styledComponentOptions = {
  classBase: 'button',
  targetProps: {
    disabled: _pbf,
    gradient: _pbf,
    rounded: _pbf,
    onDark: _pbf,
    block: _pbf,
    icon: {
      type: String,
      default: ''
    },
    cssIcon: _pbf,
    iconRight: _pbf,
    tag: {
      type: String,
      default: 'div'
    },
    submit: _pbf,
  }
}

const {classRoot, props, styledClasses, themed} = useStyledComponent(styledOptions)

const classes = computed(() => {
      const base = classRoot.value
      let classList = styledClasses.value

      if (props.gradient) classList.push(`${base}--${themed}Gradient`)
      if (props.rounded) classList.push(`${base}--rounded`)
      if (props.block) classList.push(`${base}--block`)
      if (props.disabled) classList.push('is-disabled')
      if (props.onDark) classList.push('is-onDark')
      return classList.join(' ')
    }),
    iconClass = computed(() => {
      const modifier = props.iconRight ? 'right' : 'left',
            base = classRoot.value + '__icon'
      let classList = [base, `${base}--${modifier}`]
      return classList.join(' ')
    }),
    whenSubmit = computed(() => props.submit ? 'submit' : false),
    isCustomIcon = computed(() => props.icon && props.icon === 'custom' ? true : false)
</script>

<script>
export default {
  name: 'MmmButton'
}
</script>

<template>
  <Component
    :is="props.tag"
    v-bind="$attrs"
    :class="classes"
    :type="whenSubmit"
  >
    <div v-if="props.icon && !props.iconRight" :class="iconClass">
      <MmmCssIcon v-if="props.cssIcon" :type="props.icon" />
      <slot v-if="isCustomIcon" name="customIcon"></slot>
    </div>
    <slot></slot>
    <div v-if="props.icon && props.iconRight" :class="iconClass">
      <MmmCssIcon v-if="props.cssIcon" :type="props.icon" :size="size" />
      <slot v-if="isCustomIcon" name="customIcon"></slot>
    </div>
  </Component>
</template>

<style lang="scss">
  .mmmButton {
    @include titled;
    @include flex-centered;
    @include padding-vmin(13px, 21px);
    cursor: pointer;
    border-radius: 13px;
    border: 1px solid transparent;
    transition: all .3s;

    $t: '.mmmButton';

    &__icon {
      display: inline-block;
    }

    /* *** MODIFIERS *** */

      //#  size

      &--smallest {
        @include vmin(padding-top, 5px);
        @include vmin(padding-bottom, 5px);
        @include vmin(padding-left, 8px);
        @include vmin(padding-right, 8px);
        @include mfs(8px);
        border-radius: 5px;

        #{$t}__icon {
          &--left {
            margin-right: 3px;
          }
          &--right {
            margin-left: 3px;
          }
        }
      }

      &--xsmall {
        @include vmin(padding-top, 5px);
        @include vmin(padding-bottom, 5px);
        @include vmin(padding-left, 8px);
        @include vmin(padding-right, 8px);
        @include mfs(12px);
        font-weight: 500;
        border-radius: 8px;

        #{$t}__icon {
          &--left {
            margin-right: 8px;
          }
          &--right {
            margin-left: 8px;
          }
        }
      }

      &--small {
        @include vmin(padding-top, 8px);
        @include vmin(padding-bottom, 8px);
        @include vmin(padding-left, 13px);
        @include vmin(padding-right, 13px);

        #{$t}__icon {
          &--left {
            @include vmin(margin-right, 13px);
          }
          &--right {
            @include vmin(margin-left, 13px);
          }
        }
      }

      //#  theme
      &--primary {
        background-color: $primary;
        color: $light;

        &:hover {
          background-color: $light;
          color: $primary;
        }

        &_outline {
          background-color: transparent;
          border-color: $primary;
          color: $primary;

          &:hover {
            background-color: $primary;
            color: $light;
          }
        }
      }

      &--secondary {
        background-color: $secondary;
        border-color: $secondary;
        color: $light;

        &_outline {
          background-color: transparent;
          color: $secondary;
        }
      }

      &--accent {
        background-color: $accent;
        color: $light;

        &:hover {
          background-color: $light;
          color: $primary;
        }

        &_outline {
          background-color: transparent;
          border-color: $primary;
          color: $primary;

          &:hover {
            background-color: $primary;
            color: $light;
          }
        }

        &_gradient {
          background: linear-gradient(264.23deg, #FF8744 -1.51%, #4F038A 80.62%);
          color: $light;
        }
      }

      &--link {
        font-weight: 600;
        color: $link;

        &.is-disabled {
          color: $disabled;
        }

        &.is-onDark {
          color: $light;
        }
      }

      // layout
      &--offsetX {
        &_1 {
          @include vmin(margin-right, 8px);
          @include vmin(margin-left, 8px);
        }
        &_2 {
          @include vmin(margin-right, 13px);
          @include vmin(margin-left, 13px);
        }
        &_3 {
          @include vmin(margin-right, 21px);
          @include vmin(margin-left, 21px);
        }
        &_4 {
          @include vmin(margin-right, 34px);
          @include vmin(margin-left, 34px);
        }
        &_5 {
          @include vmin(margin-right, 55px);
          @include vmin(margin-left, 55px);
        }
      }

      &--offsetY {
        &_1 {
          @include vmin(margin-top, 8px);
          @include vmin(margin-bottom, 8px);
        }
        &_2 {
          @include vmin(margin-top, 13px);
          @include vmin(margin-bottom, 13px);
        }
        &_3 {
          @include vmin(margin-top, 21px);
          @include vmin(margin-bottom, 21px);
        }
        &_4 {
          @include vmin(margin-top, 34px);
          @include vmin(margin-bottom, 34px);
        }
        &_5 {
          @include vmin(margin-top, 55px);
          @include vmin(margin-bottom, 55px);
        }
      }

      &--block {
        margin: 1em auto;
        width: 100%;
      }
  }

  @include block(mmmButton) {


    @include when(disabled) {
      cursor: default;
      opacity: .55;
      filter: grayscale(.55);
    }

  }
</style>
