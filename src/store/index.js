import { createStore } from 'vuex'

export default createStore({
  state: {
    isShowCity: false,
    selectCity: {
      name: '',
      code: ''
    },
    strategyHeadNav: {
      INDEX: 0,
      index: 0
    }
  },
  mutations: {
    setShowCity(state, data) {
      state.isShowCity = data;
    },
    setSelectCity(state, data) {
      state.selectCity = data;
    },
    setStrategyHeadNav(state, data) {
      (data.INDEX != -1) && (state.strategyHeadNav.INDEX = data.INDEX);
      (data.index != -1) && (state.strategyHeadNav.index = data.index);
    },
  },
  actions: {
  },
  modules: {
  }
})
