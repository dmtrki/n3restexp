<script setup>
import {useGetHomepageQuery} from '~/graphql/operations'

const {fetching, error, data} = await useGetHomepageQuery()

    const page = data.value.page ?? null,
          extras = page !== null && page.extras ? page.extras : false,
          title = extras ? extras.meta_title ?? page.title : false,
          promoData = extras && extras.home_featured ? {featured: extras.home_featured} : false,
          catalogData = {
            manufacturers: data.value.manufacturers ?? null,
            manufacturersCount: data.value.manufacturersCount ?? null
          }

</script>

<template>
  <section>
    <MmmSection first-section accent light>
      <HomeHeader />
      <HomePromo :promo-data="promoData" />
    </MmmSection>
    <HomeCatalog :catalog-data="catalogData" />
    <HomeInfo />
  </section>
</template>
