<template>
  <section :class="classList">
    <slot />
  </section>
</template>

<script>
import themingMixing from "@/mixins/mmm/componentTheming";

export default {
  mixins: [themingMixing],
  props: {
    background: {
      type: String | Boolean,
      default: false
    },
  },
  data() {
    return {
      classBase: 'CellGroup',
    }
  },
}
</script>

<style lang="scss">

</style>
