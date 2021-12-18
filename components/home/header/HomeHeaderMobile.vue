<script setup>
import { Button, Search } from 'vant'
const props = defineProps({
  headerData: {
    type: Object,
    default: () => {}
  }
})
const commonData = useAppData(),
    searchString = ref('')
</script>

<template>
  <div class="homeHeader">
    <div class="homeHeader__info">
       <div class="homeHeader__logo">
         <nuxt-link to="/" class="logo" />
       </div>
       <div class="homeHeader__contacts">
         <div class="homeHeader__phone">
            {{commonData.common_phone ?? ''}}
          </div>
          <MmmButton
            secondary
            small
            icon="phone"
            icon-right
            css-icon
          >
            Позвоним Вам
          </MmmButton>
       </div>
    </div>
    <div class="homeHeader__search">
      <AppSearch />
    </div>
  </div>
</template>

<style lang="scss">

@include block(homeHeader) {
  @include vmin(padding-left, 13px);
  @include vmin(padding-right, 13px);
  @include vmin(margin-bottom, 34px);

  @include element(info) {
    display: flex;
    justify-content: space-between;
  }



  @include element(phone) {
    margin-bottom: 0.25rem;
    text-align: right;
    font-size: 1.1rem;
    letter-spacing: 1.3px;
    @include vmin(margin-bottom, 8px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @include element(search) {
    @include vmin(margin-top, 13px);
    --ggs: .8;
  }
}
</style>

<style scoped>
div.m_slider >>> .v-hl-container {
  clip-path: none;
  padding-top: 34px;
  padding-bottom: 34px;
  margin-bottom: 0;
}

div.m_slider >>> .v-hl-btn.v-hl-btn-between {
  transform: none;
}
</style>
