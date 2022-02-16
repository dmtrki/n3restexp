<script setup>
import {useGetCommonDataQuery} from '~/graphql/operations'

const {deviceBasedComponent} = useDeviceBasedComponent('HomeHeader')
const {fetching, error, data} = await useGetCommonDataQuery()

const dataset = data.value.page.extras
</script>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<template>
  <Component :is="deviceBasedComponent" :dataset="dataset" />
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  background-image: url(assets/svg/logo.svg);
  background-repeat: no-repeat;
  @include vmin(width, 44px);
  // @include vmin(height, 66px);
  min-height: 34px;
  height: 100%;
  text-decoration: none;
}

</style>
