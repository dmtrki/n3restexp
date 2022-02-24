<script setup>

</script>

<script>
export default {
  name: 'AppSearch'
}
</script>

<template>
  <form class="search">
    <input type="text" class="search__input input input--accent" placeholder="поиск товаров, производителей">
    <div class="search__icon">
      <MmmCssIcon type="search" />
    </div>
  </form>
</template>

<style lang="scss">
@include block(search) {
  position: relative;
  color: #fff;

  @include element(icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @include vmin(left,13px);
  }

  @include element(input) {
    width: 100%;
  }
}

@include block(input) {
  border-radius: 8px;
  @include vmin(padding-left, 34px);
  @include vmin(padding-right, 8px);
  @include vmin(padding-top, 8px);
  @include vmin(padding-bottom, 8px);
  @include vmin(height, 34px);

  @include modifier(prime) {
		background: $light;
		box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(222, 222, 222, 0.5), inset -2px 2px 4px rgba(222, 222, 222, 0.2), inset 2px -2px 4px rgba(222, 222, 222, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(222, 222, 222, 0.9);
  }
  @include modifier(accent) {
    background: $bg-dark-second-g;
    color: $light;

    &::placeholder {
      color: $light;
    }
  }
}
</style>
