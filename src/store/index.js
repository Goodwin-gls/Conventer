import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valute: {},
    isLoading: true
  },
  getters: {
    valuteArray(state) {
      return Object.values(state.valute)
    }
  },
  mutations: {
    setValute(state, newValute) {
      state.valute = newValute
    },
    setLoad(state, boolean) {
      state.isLoading = boolean
    }
  },
  actions: {
    async fetchCurrency({commit, state}) {
      if (state.isLoading) {
        let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        let data = await response.json()
        commit('setValute', data.Valute)
        commit('setLoad', false)
      }
    }
  }
})
