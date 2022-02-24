<script setup>
import {ref, computed, onMounted} from "vue"
import { Cell } from 'vant'
import {useGetRootProductCategoryQuery, useGetProductCategoryQuery} from "~/graphql/operations";

const variables = ref(null),
      level = ref(0)


const items = ref([]),
    parent = ref(null),
    flat = ref([]),
    rootsCache = ref([]),
    isLoading = computed(() => (items.value.length === 0 || rootsCache.value.length === 0))

const select = async (item) => {
      items.value = []
      const cats = await getCategories(item.id)
      setTimeout(() => items.value = cats, 200)
      setTimeout(() => parent.value = item, 200)
    },
    levelBack = async () => {
      items.value = []
      const hasParent = getParentOf(this.parent)

      if (!hasParent) return goToRoots()

      parent.value = hasParent
      let children = getChildrenOf(hasParent)
      if (!children) children = await getCategories(hasParent.id)
      setTimeout(() => items.value = children, 200)
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
      items.value = []
      setTimeout(() => items.value = [...rootsCache.value], 200)
      parent.value = false
    },
    getCategories = async (parent_id = null) => {
      items.value = []
      variables.value = {
        parent_id: (parent_id === null) ? null : parseInt(parent_id)
      }
      const {data, pending, error} = await useGetProductCategoryQuery(variables.value)
      console.log(data)
      console.log(error)
      addToFlat(data.value)
      return await data.value
    },
    formulateUrl = (category) => {
      if (!category.products_count) return '#categories'

      let rootSlug = false
      if (this.parent.parent_id != null) {
        let root = this.flat.find(it => it.id == parent.value.parent_id)
        if (root && root.parent_id != null) root = flat.value.find(it => it.id == root.parent_id)
        rootSlug = root.slug
      }

      const url = rootSlug ? '/' + rootSlug : ''

      return `${url}/${this.parent.slug}/${category.slug}`
    };

onMounted(() => {
  const cats = getCategories()
  items.value = cats
  if (rootsCache.length === 0) rootsCache.value = cats
  if (flat.length === 0) flat.value = cats
})

</script>

<template>
  <div class="сascader" id="categories">
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
      <div v-else class="cascader__items">
        <template v-for="(item, index) in items">
          <Cell
            v-if="item.children_count !== 0 || item.products_count !== 0"
            v-bind:key="item.id"
            :title="item.title"
            is-link
            clickable
            :to="formulateUrl(item)"
            @click="select(item)"
          />
        </template>
      </div>
    </Transition>
  </div>
</template>

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
