<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <div class="header__main">
      <div class="header__nav">
        <AppNavList />
      </div>
      <div class="header__search">
        <AppSearch />
      </div>
    </div>
    <div class="header__actions">

    </div>
  </div>
</template>

<style lang="scss">

</style>
