<template lang="html">
  <section class="content">
    <div class="yo-header-index">
      <div class="regret flc">
        <div class="back" @click="back">
            <span class="yo-ico">&#xf07d;</span>
        </div>
      </div>
      <h2 class="title">
        {{title}}
      </h2>
    </div>
    <good-list notloading="false" :datalist='datalist'></good-list>
  </section>
</template>
<script>
import Vue from 'vue';
import axiosUtil from '../utils/axios';
import GoodList from './GoodList.vue'
Vue.component('good-list', GoodList)
export default {
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  data(){
    return{
      datalist:[],
      title:''
    }
  },
  mounted:function(){
    let that = this;
    that.title = this.$route.params.title
    axiosUtil.get({
      url:'api/goods/search?key='+that.title,
      type:'get',
      callback:(res)=>{
        that.datalist=that.datalist.concat(res.data.body.datas);
      }
    });
    console.log(this.title);
  }
}
</script>

<style scoped lang="scss">
.content{
  padding-top: .44rem;
  height: 100%;
  overflow-y: scroll;
}
.yo-header-index{
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  overflow: hidden;
  padding:.04rem 0;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  .flc{
    display: flex;
    width: .44rem;
    font-size: .2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: .1rem;
  }
  .title{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-indent: -.3rem;
  }
}
</style>
