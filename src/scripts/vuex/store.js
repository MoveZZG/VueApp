import Vue from 'vue'

import Vuex from 'vuex'

// const Vue = require('vue');
Vue.use(Vuex);
let store = new Vuex.Store({
  state:{
    username:{}
  },
  mutations:{
    login:(state,payload)=>{
      console.log(payload.username);
      state.username = payload.username;
    }
  }
})

export default store
