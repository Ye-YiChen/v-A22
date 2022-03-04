import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const userAbout = {
  namespaced: true, // 开启命名空间
  state: {
    userName: '',

  },
  mutations: {
    SET_USERNAME(state,value) {
      state.userName = value
      return false
    }
  }
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userAbout
  },
  getters: {

  }
})
