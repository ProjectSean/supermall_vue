import { createStore } from 'vuex'

export default createStore({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      state.carList.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
