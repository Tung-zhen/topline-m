import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // null { token, refresh_token }
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为了放置刷新数据丢失,这里海选哦把数据放到本地存储持久化
      // 注意:本地存储只能存字符串,不能存对象
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
