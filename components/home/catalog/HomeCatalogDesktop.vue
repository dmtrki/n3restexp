<script setup>
const { dataset } = defineProps({
  dataset: {
    type: [Object, Array],
    default: () => {}
  }
})
</script>

<script>
export default {
  name: 'HomeCatalogDesktop'
}
</script>

<template>
  <div class="homeCatalog">
    <MmmCell
      title="Каталог оборудования"
      subtitle="для HORECA"
      large
    >
      <template #action>
        <MmmButton
          xsmall
          primary
          outline
          icon="filters"
          css-icon
          icon-right
        >
          Подобрать
        </MmmButton>
      </template>
    </MmmCell>
    <MmmSection
        v-if="dataset.roots"
        full-width
        offset-t="xsmall"
    >
      <MmmSlider>
        <div v-for="item in dataset.roots">
          {{ item }}
        </div>
      </MmmSlider>
    </MmmSection>
    <MmmCell
      v-if="dataset.manufacturersMore"
      :title="dataset.manufacturersMore"
      to="/manufacturers"
    />
    <MmmSection
        v-if="dataset.manufacturers"
        offset-t="xsmall"
    >
      <div v-for="item in dataset.manufacturers">
        {{ item }}
      </div>
    </MmmSection>
  </div>
</template>

<style lang="scss">
  .homeCatalog {
    @include vw(margin-top, 34px);

    &__grid {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
