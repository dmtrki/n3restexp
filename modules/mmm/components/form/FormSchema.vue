<template>
  <ValidationObserver slim ref="obs" v-slot="{ handleSubmit, invalid }">
    <MmmForm
      v-bind="$attrs"
      v-on="$listeners"
      :title="title"
      @submit.prevent="handleSubmit(submit)"
    >
      <template v-for="field in schema.fields">
        <template v-if="field.type === 'html'" v-html="field.content" />
        <LazyNuxtDynamic
          v-else
          :component="`Mmm${field.component}`"
          v-bind="field"
        />
      </template>

      <MmmButton
        :class="{'is-disabled': invalid}"
        block
        secondary
        outline
        tag="button"
        submit
        @click="handleSubmit(submit)"
      >
        {{ submitText }}
      </MmmButton>
    </MmmForm>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {ValidationObserver},
  props: {
    schema: {
      type: Object,
      default: () => {}
    },
    get: {
      type: Boolean | String,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    submitText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    getSchema(){
      return () => import('~/schema/' + this.schema)
    }
  },
  methods: {
    handleInputChange(e){
      this.$emit('input', this.form)
    },
    submit(){
      // this.$emit('submit', this.form)
      console.log(this.$refs.obs)
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">

</style>