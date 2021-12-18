export const state = () => ({
  version: 0.2,
  items: [],
  count: 0 ,
  deliveryType: false,
  deliveryAddress: false,
  deliveryStorage: false,
  paymentType: false,
  addresses: [],
  added: false
})
export const mutations = {
  ADD_PRODUCT (state, uuid) {
    if (!state.items.find(p => uuid === p.uuid)) {
      state.items = [...state.items, { uuid: uuid, qty: 1 }]
    }
  },
  REMOVE_PRODUCT (state, uuid) {
    state.items = Array.from(state.items.filter(prod => prod.uuid !== uuid))
  },
  SET_PRODUCT_QTY (state, { uuid, qty }) {
    state.items = [
      ...state.items.filter(prod => prod.uuid !== uuid),
      { ...state.items.find(prod => prod.uuid === uuid), qty }
    ]
  },
  CALC_ITEMS_QUANTITY (state) {
    let counter = 0
    state.items.forEach(item => {
      counter = counter + item.qty
    });
    state.count = counter
  },  
  SET_DELIVERY_TYPE (state, deliveryType) {
    state.deliveryType = deliveryType
  },
  SET_DELIVERY_ADDRESS (state, deliveryAddress) {
    state.deliveryAddress = deliveryAddress
  },
  SET_DELIVERY_STORAGE (state, deliveryStorage) {
    state.deliveryStorage = deliveryStorage
  },
  SET_PAYMENT (state, paymentType) {
    state.paymentType = paymentType
  },
}
export const getters = {
}
export const actions = {
  async add ({ commit }, uuid) {
    await commit('ADD_PRODUCT', uuid)
    await commit('CALC_ITEMS_QUANTITY')
  },
  async remove ({ commit }, uuid) {
    await commit('REMOVE_PRODUCT', uuid)
  },
  async setQuantity ({ commit }, { uuid, qty }) {
    await commit('SET_PRODUCT_QTY', { uuid, qty })
  },
  async setDeliveryType ({ commit }, deliveryType) {
    await commit('SET_DELIVERY_TYPE', deliveryType)
  },
  async setDeliveryAddress ({ commit }, deliveryAddress) {
    await commit('SET_DELIVERY_ADDRESS', deliveryAddress)
  },
  async setDeliveryStorage ({ commit }, deliveryStorage) {
    await commit('SET_DELIVERY_STORAGE', deliveryStorage)
  },
}