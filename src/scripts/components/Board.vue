<template lang="html">
  <div class="">
    <div class="yo-header">
      <span class="regret yo-ico">&#xe622;</span>
      <h2 class="title">
        <div class="">
          <span class="yo-ico">&#xe511;</span>
          <input type="text" name="" value="">
          <span class="yo-ico">&#xe617;</span>
        </div>
      </h2>
      <span class="affirm yo-ico">&#xf07e;</span>
    </div>
    <mt-swipe :auto="6000">
      <mt-swipe-item v-for="(item,index) in dataSource" :keys='index'>
        <img :src="item.images.large" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  // import 'mint-ui/lib/style.css'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  import axiosUtil from '../utils/axios';
  export default {
    data(){
      return{
        dataSource:[]
      }
    },
    mounted:function(){
      let that = this;
      axiosUtil.get({
        url:'api/v2/movie/in_theaters?count=10',
        type:'get',
        callback:(res)=>{
          that.dataSource = this.dataSource.concat(res.data.subjects)
        }
      })
    }
  }
</script>
