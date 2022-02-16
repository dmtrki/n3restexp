<script>
export default {
  name: 'AppNavList'
}
</script>

<template>
  <ul class="nav nav--header">
    <template v-if="commonData.menu">
      <li v-for="(item, index) in commonData.menu" :key="index" class="nav__item">
        <a :href="item.url" class="nav__link">
          {{ item.title }}
        </a>
      </li>
    </template>
    <li class="nav__item">
      <div class="navCallback" @click="callback">
        <div class="navCallback__icon">
          <span class="i-phonelink_ring"></span>
        </div>
        <div class="navCallback__text">
          Заказать звонок
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">

</style>
