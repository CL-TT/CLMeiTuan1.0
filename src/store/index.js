import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '北京',
    userName: null
  },
  mutations: {
    changePosition(state, value) {
      state.position = value;
    },

    setUserName(state, value) {
      state.userName = value;
    }
  },
  actions: {
    changePosition(context, value) {
      context.commit('changePosition', value);
    },

    setUserName(context, value) {
      context.commit('setUserName', value);
    }
  },
  modules: {}
})