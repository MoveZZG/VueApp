<template lang="html">
  <div class="">
    <div class="yo-header-index">
      <div class="regret flc">
        <span class="yo-ico">&#xe622;</span>
        <span>客服</span>
      </div>
      <h2 class="searchBox">
          <div class="sousuo">
              <span class="yo-ico">&#xe511;</span>
          </div>
          <input type="text" name="" value="" placeholder="搜索">
          <span class="yo-ico">&#xe617;</span>
      </h2>
      <div class="affirm flc">
        <span class="yo-ico">&#xe604;</span>
        <span>信息</span>
      </div>
    </div>
    <!-- <mt-swipe :auto="6000">
      <mt-swipe-item v-for="(item,index) in dataSource" :keys='index'>
        <img :src="item.goods_thumb" alt="">
      </mt-swipe-item>
    </mt-swipe> -->
    <section class="banner">
      <div  v-for="(item,index) in dataSource">
        <router-link :to="{path:''}">
          <a><img :src="item.ads[0].ad_img" alt=""></a>
        </router-link>
      </div>
    </section>
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
        url:'api/home/index3',
        type:'get',
        callback:(res)=>{
          console.log(res.data.body);
          that.dataSource = this.dataSource.concat(res.data.body);
        }
      })
    }
  }
</script>

<style scoped lang='scss'>
.yo-header-index{
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  overflow: hidden;
  margin: .04rem 0;
  .flc{
    display: flex;
    width: .44rem;
    flex-direction: column;
    align-items:flex-start;
    font-size: .11rem;
    color: #fff;
    span{
      width: 100%;
      text-align: center;
      display: block;
    }
    .yo-ico{
      font-size: .15rem;
    }
  }
  .searchBox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ececec;
    box-sizing: border-box;
    border: .1px #e4f4f3 solid;
    width: 2.8rem;
    font-size: .15rem;
    border-radius: .05rem .05rem;
    .yo-ico{
      font-size: .15rem;
      color: #c4c4c4
    }
    input{
      color: #565656;
      background: transparent;
      height: .23rem;
      border: 0;
      margin: 0 .1rem;
    }
  }
}
// .mint-swipe{
//   height: 1.9rem;
//   .mint-swipe-item{
//     background: red;
//     img{
//       width: 100%;
//     }
//   }
// }
.banner{
  height: 2.25rem;
  width: 100%;
  div{
    height: 100%;
    img{
      width: 100%;
    }
  }
}

</style>
