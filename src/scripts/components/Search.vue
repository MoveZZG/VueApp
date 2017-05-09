<template lang="html">
  <div class="search">
    <header class="yo-header">
        <span class="yo-ico">&#xe511;</span><input type="text" name="" value="" placeholder="搜索商品" >
    </header>
    <div class="c-type">
      <div class="category" v-for="(item,index) in dataSource.categorys" v-bind:key="index">
        <router-link to="/home">
          <a><img :src="item.cat_img" alt=""></a>
        </router-link>
      </div>
    </div>
    <div class="c-type1">
      <div class="tags" v-for="(item,index) in dataSource.tags" v-bind:key="index">
        <router-link to="/home">
          <a><img :src="item.tag_img" alt=""></a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import SearchList from './SearchList.vue';
Vue.component('search-list',SearchList);
import axiosUtil from '../utils/axios';
export default {
  data(){
    return{
      dataSource:{}
    }
  },
  mounted:function(){
    let that=this;
    axiosUtil.get({
      url:'api/home/category',
      type:'get',
      callback:(res)=>{
        that.dataSource=res.data.body;
      }
    })
  }
}
</script>
<style scoped lang="scss">
  .yo-header{
      height:.46rem;
      background:#fff;
      border-bottom: .02rem solid #ddd;
      position: relative;
    input{
      background:#f4f4f4;
      border:none;
      text-align: center;
      line-height:.28rem;
      width:96%;
      height:.28rem;
      margin-top:.07rem;
      border-radius:.1rem;
      font-size:.14rem;
      color:#87878c;
      font-family: "宋体";
    }
    .yo-ico{
      color:#87878c;
      position: absolute;
      left:1.4rem;
    }
  }
  .c-type{
    margin-top:.18rem;
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
