<script setup>
import {Cell, CellGroup, Grid, GridItem} from 'vant'

const { dataset } = defineProps({
  dataset: {
    type: [Object, Array],
    default: () => {}
  }
})
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
        full-width
        offset-t="xsmall"
    >
      <Cascader />
    </MmmSection>
    <MmmCell
        v-if="dataset.manufacturersMore"
        :title="dataset.manufacturersMore"
        to="/manufacturers/"
    />
    <MmmSection
        offset-t="xsmall"
        v-if="dataset.manufacturers"
    >
      <Grid
          direction="horizontal"
          :column-num="2"
          :center="false"
          clickable
          :border="false"
      >
        <GridItem
            v-for="(manufacturer, index) in dataset.manufacturers"
            :key="index"
            icon="photo-o"
            :text="manufacturer.title"
            :to="`/manufacturers/${manufacturer.slug}/`"
        />
      </Grid>
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