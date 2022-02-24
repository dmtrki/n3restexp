<script setup>
const {dataset} = defineProps({
  dataset: {
    type: [Object, Array],
    default: () => {}
  }
})

</script>

<template>
  <div class="homePromo">
    <MmmSlider v-if="dataset.featured">
      <CardFeatured
          v-for="item in dataset.featured"
          v-bind="{...item}"
      />
    </MmmSlider>
  </div>
</template>

<style lang="scss">

@include block(homeProjectCategoryCard) {
    @include vmin(padding, 13px);
    @include vmin(min-width, 144px);
    @include vmin(min-height, 125px);
    border-radius: 21px;
    background: #e4e5ff;
    box-shadow:  8px 8px 34px #c6c7de,
                -8px -8px 34px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include font-vmin(16px);
    width: min-content;
    height: min-content;
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    @include element(icon) {
      @include vmin(width, 34px);
      @include vmin(height, 34px);
      @include vmin(margin-bottom, 13px);
    }
  }
</style>
