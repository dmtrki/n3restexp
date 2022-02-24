<script setup>
import {useGetHomepageQuery} from '~/graphql/operations'

const {fetching, error, data} = await useGetHomepageQuery()

const hasData = computed(() => fetching.value === false && typeof data !== 'undefined')

const page = hasData.value !== false ? data.value.page ?? null : null,
      extras = page !== null && page.extras ? page.extras : false,
      title = extras ? extras.meta_title ?? page.title : false,
      promo = extras && extras.home_featured ? {featured: JSON.parse(extras.home_featured)} : false,
      catalog = {
        manufacturers: data.value.manufacturers ?? null,
        manufacturersCount: data.value.manufacturersCount ?? null
      }
</script>

<template>
  <section>
    <HomeHeader />
    <HomePromo :dataset="promo" />
    <HomeCatalog :dataset="catalog" />
  </section>
</template>
