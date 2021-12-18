<template>
  <div
    :class="classList"
  >
    <ValidationProvider
      :name="name"
      :rules="validation"
      v-slot="{
        classes,
        errors
      }"
      tag="div"
      ref="provider"
      class="mmmTextarea__wrap"
    >
      <textarea
        :class="[inputClassList, ...classes]"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        v-model="modelValue"
        @blur="$emit('blur', $event.target.value)"
        ref="inputElement"
      />
      <label
        v-if="label"
        class="mmmTextarea__label"
        :for="name"
        @click="$refs.inputElement.focus()"
      >
        {{ label }}
      </label>
    </ValidationProvider>
    <div class="mmmTextarea__info">
      <div v-if="hint" class="mmmTextarea__hint">

      </div>
      <div class="mmmTextarea__error">
        {{ getError }}
      </div>
    </div>      
  </div>
</template>
<script>
import { ValidationProvider, configure } from 'vee-validate'
import theming from '~~/mixins/mmm/componentTheming'
import inputing from '~~/mixins/mmm/baseInput'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    required: 'is-required',
    changed: 'is-changed',
    touched: 'is-touched',
    untouched: 'is-untouched',
    pristine: false,
    dirty: false,
  }
})

export default {
  mixins: [theming, inputing],
  components: {ValidationProvider},
  props: {

  },
  data() {
    return {
      classBase: 'Input',
      modelValue: ''
    }
  },
  computed: {
    inputClassList() {
      const b = this.classRoot + '__in'
      let classList = [b]
      return classList.join(' ')
    },
    getError() {
      return ''
    }
  }
}
</script>

<style lang="scss">
@include block(mmmTextarea) {
  @include inputBase;

  @include element(wrap) {
    width: 100%;
    position: relative;
  }

  @include element(in) {
    @include input;
    @include vmin(min-height, 55px);
    @include vmin(max-height, 233px);
  }

  @include element(label) {
    @include label;
  }
}
</style>
