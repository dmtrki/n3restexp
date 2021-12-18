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
      <CatalogCascader :roots="componentData.categories" />
    </MmmSection>
    <MmmCell
      v-if="componentData.manufacturersMore"
      :title="componentData.manufacturersMore"
      to="/manufacturers/"
    />
    <MmmSection
      offset-t="xsmall"
      v-if="componentData.manufacturers"
    >
      <Grid
        direction="horizontal"
        :column-num="2"
        :center="false"
        clickable
        :border="false"
      >
        <GridItem
          v-for="(manufacturer, index) in componentData.manufacturers"
          :key="index"
          icon="photo-o"
          :text="manufacturer.title"
          :to="`/manufacturers/${manufacturer.slug}/`"
        />
      </Grid>
    </MmmSection>
  </div>
</template>

<script>
import {Cell, CellGroup, Grid, GridItem} from 'vant'

export default {
  props: {
    componentData: {
      type: Array | Object,
      default: () => []
    }
  },
  components: {
    Cell, CellGroup, Grid, GridItem
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .homeCatalog {
    @include vw(margin-top, 34px);

    &__grid {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
