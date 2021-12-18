<template>
  <div class="mmmLoading">
    <template v-if="list">
      <div class="skeleton skeleton--small" />
      <div class="skeleton skeleton--small is-delay-1" />
      <div class="skeleton skeleton--small is-delay-2" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style lang="scss">
.skeleton {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  margin-bottom: 5px;
	background-color: #e2e5e7;
	// The shine that's going to move across the skeleton:
	background-image:			
			linear-gradient(
				90deg, 
				rgba(#fff, 0), 
				rgba(#fff, 0.5),
				rgba(#fff, 0)
			);
	background-size: 40px 100%; // width of the shine
	background-repeat: no-repeat; // No need to repeat the shine effect
	background-position: left -40px top 0; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
	animation: shine 1s ease-in-out infinite; // increase animation time to see effect in 'slow-mo'

  &--small {
    width: 89%;
    height: 21px;
    animation-duration: .8s;
  }

  @include when(delay) {
    &-1 {
      animation-delay: .2s;
    }
    &-2 {
      animation-delay: .3s;
    }
  }
}

@keyframes shine {
	to {
		background-position: right -40px top 0;
	}
}


</style>