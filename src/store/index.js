import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const userAbout = {
  namespaced: true, // 开启命名空间
  state: {
    userName: '',
  },
  mutations: {
    SET_USERNAME(state, value) {
      state.userName = value
      return false
    }
  }
}
const orderAbout = {
  namespaced: true, // 开启命名空间
  state: {
    orderNum: null,
    ifAgree: false,
    showKeyboard:false,
    value:'',
    productInfo: {}
  },
  mutations: {
    SET_ORDER_NUM(state, value) {
      state.orderNum = value
      return false
    },
    SET_IF_AGREE(state, value) {
      state.ifAgree = value
      return false
    },
    SET_PRODUCT_INFO(state, value) {
      state.productInfo = value
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
    userAbout,
    orderAbout
  },
  getters: {

  }
})
