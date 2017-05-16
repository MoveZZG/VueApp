import Vue from 'vue';

import Vuex from 'vuex';

const  Vue = require('vue');

let store = new Vuex.store({
  state:{
    username:''
  },
  mutations:{
    login:(state,payload)=>{
      state.username = payload.username;
    }
  }
})

export default store
