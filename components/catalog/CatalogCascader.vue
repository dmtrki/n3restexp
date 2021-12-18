<template>
  <div class="categoriesCascader" id="categories">
    <Transition name="slide-fade" appear>
      <Cell
        v-if="parent"
        :value="parent.title"
        @click="levelBack"
        icon="arrow-left"
        clickable
      />
    </Transition>
    <Transition appear name="slide-fade" mode="out-in">
      <MmmLoading v-if="isLoading" list />
      <div v-else class="categoriesCascader__items">
        <template v-for="(category, index) in categories">
          <Cell
            v-if="category.children_count !== 0 || category.products_count !== 0"
            v-bind:key="category.id"
            :title="category.title"
            is-link
            clickable
            :to="formulateUrl(category)"
            @click="select(category)"
          />
        </template>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import {ref, computed, onMounted} from "vue"
import { Cell } from 'vant'
import {productCategoryRootsQuery, productCategoriesQuery} from '~/gql/queries'
import {useClientHandle} from '@urql/vue'

const urql = useClientHandle(),
      variables = ref()

const categories = ref([]),
      parent = ref(false),
      flat = [],
      rootsCache = [],
      loading = computed(() => (categories.value.length === 0 || rootsCache.value.length === 0))

const select = async category => {
      categories.value = []
      const cats = await getCategories(category.id)
      setTimeout(() => categories.value = cats, 200)
      setTimeout(() => parent.value = category, 200)
    },
    levelBack = async () => {
      categories.value = []
      const hasParent = getParentOf(this.parent)

      if (!hasParent) return goToRoots()

      parent.value = hasParent
      let children = getChildrenOf(hasParent)
      if (!children) children = await getCategories(hasParent.id)
      setTimeout(() => categories.value = children, 200)
    },
    addToFlat = (cats) => {
      cats.forEach(cat => {
        if (
            parseInt(cat.children_count) !== 0
            && !flat.value.find(it => parseInt(it.id) === parseInt(cat.id))
        ) flat.value.push({...cat, ...{children: []}})

        let parent = flat.value.find(it => parseInt(it.id) === parseInt(cat.parent_id))

        if (!parent) {
          flat.value.push({...cat, ...{children: []}})
        } else {
          if (!parent.children) parent = {...parent, ...{children: []}}
          if (
              parent.children.length === 0
              || !parent.children.find(it => parseInt(it.id) === parseInt(cat.id))
          ) parent.children.push(cat)
          flat.value.map(it => {
            if (it.id == parent.id) return parent
            return it
          })
        }
      })
    },
    getParentOf = item => item.parent_id === null ? false : flat.value.find(it => parseInt(it.id) === parseInt(item.parent_id)),
    getChildrenOf = (item) => {
      const fromFlat = flat.value.find(it => parseInt(it.id) === parseInt(item.id))
      return (fromFlat && fromFlat.children && fromFlat.children.length) ? fromFlat.children : false
    },
    goToRoots = () => {
      categories.value = []
      setTimeout(() => categories.value = [...rootsCache.value], 200)
      parent.value = false
    },
    getCategories = async (parent_id = null) => {
      categories.value = []
      variables.value = {parent_id: (parent_id === null) ? null : parseInt(parent_id)}
      const request = await urql.useQuery({query: productCategoriesQuery, variables}),
            cats =  request.data

      addToFlat(cats)
      return await cats
    },
    formulateUrl = (category) => {
      if (!category.products_count) return '#categories'

      let rootSlug = false
      if (this.parent.parent_id != null) {
        let root = this.flat.find(it => it.id == this.parent.parent_id)
        if (root && root.parent_id != null) root = this.flat.find(it => it.id == root.parent_id)
        rootSlug = root.slug
      }

      const url = rootSlug ? '/' + rootSlug : ''

      return `${url}/${this.parent.slug}/${category.slug}`
    };

    onMounted(() => {
      const cats = getCategories()
      categories.value = cats
      if (rootsCache.length === 0) rootsCache.value = cats
      if (flat.length === 0) flat.value = cats
    })

</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease-out;
}
.slide-fade-leave-active {
  transition: all .5s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(21px);
  opacity: 0;
}

.slide-fade-move {
  opacity: 1;
}

</style>
