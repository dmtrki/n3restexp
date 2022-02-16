import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      version: 0.1,
      items: [],
      count: 0 ,
      deliveryType: 0,
      deliveryAddress: '',
      deliveryStorage: 0,
      paymentType: 0,
      deliveryTypes: {},
      addresses: [],
      storages: {},
      paymentTypes: {}
    }
  },
  getters: {
    isEmpty: (state) => {
      return state.count === 0
    }
  },
  actions: {
    async add (uuid) {
      if (!this.items.find(p => uuid === p.uuid)) {
        this.items = [...this.items, { uuid: uuid, qty: 1 }]
      }
      await this.calcQuantity()
    },
    calcQuantity() {
      let counter = 0
      this.items.forEach(item => {
        counter = counter + item.qty
      });
      this.count = counter
    },
    remove (uuid) {
      this.items = Array.from(this.items.filter(prod => prod.uuid !== uuid))
    },
    async setQuantity ({ uuid, qty }) {
      this.items = [
        ...this.items.filter(prod => prod.uuid !== uuid),
        { ...this.items.find(prod => prod.uuid === uuid), qty }
      ]
    },
    setDeliveryType (deliveryType) {
      this.deliveryType = deliveryType
    },
    setDeliveryAddress (deliveryAddress) {
      this.deliveryAddress = deliveryAddress
    },
    setDeliveryStorage (deliveryStorage) {
      this.deliveryStorage = deliveryStorage
    },
  }
})