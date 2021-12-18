<script setup>
import {ref, computed} from 'vue'
import homepageQuery from '~/gql/queries/homepage'
import  useClientHandle from '@urql/vue'

const urql = useClientHandle()

const {pageData, fetching} = await urql.useQuery({query: homepageQuery}),
    extras = pageData.extras,
    title = extras.meta_title ?? extras.title,
    promoData = {
      featured: JSON.parse(extras.home_featured)
    },
    catalogData = {
      manufacturers: response.manufacturers,
      manufacturersCount: response.manufacturersCount
    }
</script>

<template>
  <h1>fuck</h1>
</template>

<style lang="scss">

</style>
