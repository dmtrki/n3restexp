<template>
  <div class="homePromo">
    <MmmHorizontal v-if="componentData.featured" class="m_slider m_slider--featured" :button="false">
      <MmmHorizontalItem v-for="(featuredItem,index) in componentData.featured" :key="index">
        <ReCardFeatured
          :to="featuredItem.link"
          :image="featuredItem.image"
          :title="featuredItem.title"
          :details="featuredItem.details"
          :bg_start="featuredItem.bg_start"
          :bg_finish="featuredItem.bg_finish"
        />
      </MmmHorizontalItem>
    </MmmHorizontal>

    <div class="mt-xl">
      <MmmCell title="Наши проекты" to="/projects/" />

      <MmmHorizontal v-if="componentData.featured" class="m_slider m_slider--featured" :button="false">
        <MmmHorizontalItem margin-left-zero>
          <nuxt-link :to="'#'"  class="homeProjectCategoryCard" style="background: linear-gradient(167.55deg, #446DFF 8.9%, #A848FD 96.41%);">
            <svg class="homeProjectCategoryCard__icon"></svg>
            Рестораны
          </nuxt-link>
        </MmmHorizontalItem>
        <MmmHorizontalItem margin-left-zero>
          <nuxt-link :to="'#'"  class="homeProjectCategoryCard" style="background: linear-gradient(104.34deg, #0F4C81 -3.95%, #0B9B9B 101.28%);">
            <svg class="homeProjectCategoryCard__icon"></svg>
            Магазины
          </nuxt-link>
        </MmmHorizontalItem>
        <MmmHorizontalItem  margin-left-zero>
          <nuxt-link :to="'#'"  class="homeProjectCategoryCard" style="background: linear-gradient(137deg, rgba(38,171,154,1) 0%, rgba(64,95,214,1) 100%);">
            <svg class="homeProjectCategoryCard__icon">
            </svg>
            Холодильные камеры
          </nuxt-link>
        </MmmHorizontalItem>
      </MmmHorizontal>
    </div>
  </div>
</template>

<script>
import {Grid, GridItem} from 'vant'

export default {
  components: {
    Grid, GridItem
  },
  props: {
    componentData: {
      type: Object | Array,
      default: () => {}
    }
  },
  data() {
    return {

    }
  }
}
</script>

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
