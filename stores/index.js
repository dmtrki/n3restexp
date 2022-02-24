import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      searchQuery: '',
      breadcrumbs: [],
      lastAction: 0,
      notifications: []
    }
  },
  getters: {

  },
  actions: {

  }
})