import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

const Vue = require('vue');

let stroe = new Vuex.Store({
  state:{
    username:''
  },
  mutations:{
    login:(state,payload)=>{
      state.username = payload.username
    }
  }
})
