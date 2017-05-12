<template lang="html">
  <div class="search">
    <router-link to="/Sousuo">
      <header class="yo-header-a">
        <span class="yo-ico">&#xe511;</span><input type="text" name="" value="" placeholder="搜索">
      </header>
    </router-link>
    <div class="c-type">
      <div class="category" v-for="(item,index) in dataSource.categorys" v-bind:key="index">
          <a @click="sea(item)" ><img :src="item.cat_img" alt=""></a>
        </router-link>
      </div>
    </div>
    <div class="c-type1">
      <div class="tags" v-for="(item,index) in dataSource.tags" v-bind:key="index">
        <router-link :to="`/lists/${item.tag_words}/id/${item.tag_id}`">
          <a><img :src="item.tag_img" alt=""></a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import SearchList from './SearchList.vue';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import axiosUtil from '../utils/axios';
Vue.component('search-list',SearchList);
export default {
  data(){
    return{
      dataSource:{}
    }
  },
  methods:{
    sea:function(item){
      console.log(item.goods_count);
      if(item.goods_count==0){
        Toast({
          message: '抱歉您所选的内容暂时未开放！',
          position: 'bottom',
          duration: 2000
          });
      }else{
        window.location.href=`#/lists/${item.cat_name}/id/${item.cat_id}`
      }
    }
  },
  mounted:function(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let that=this;
    axiosUtil.get({
      url:'api/home/category',
      type:'get',
      callback:(res)=>{
        that.dataSource=res.data.body;
        setTimeout(()=>{
          Indicator.close();
        },300)
      }
    })
  },

}
</script>
<style scoped lang="scss">
  .yo-header-a{
      width:100%;
      height:.46rem;
      background:#fff;
      border-bottom: .02rem solid #ddd;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
    input{
      background:#f4f4f4;
      border:none;
      text-align: center;
      line-height:.28rem;
      width:96%;
      height:.28rem;
      border-radius:.1rem;
      font-size:.14rem;
      color:#87878c;
      font-family: "宋体";
      position: relative;
    }
    .yo-ico{
      color:#87878c;
      position: absolute;
      left:36%;
      line-height: .46rem;
      z-index:1;
    }
  }
  .c-type{
    padding-top:.54rem;
    background:#fff;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .category{
      width:30.7%;
      padding-top:.1rem;
      img{
        width:100%;
        float: left;
      }
    }
  }
  .c-type1{
    padding-top:.3rem;
    .tags{
      width: 100%;
      img{
        width:100%;
      }
    }
  }
</style>
