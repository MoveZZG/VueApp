<template lang="html">
  <div class="enterNote">
      <div class="yo-header-a">进货单</div>
      <div class="note-sec">
        <p><button class="btn"><router-link class="btn1" to='/login'>登录</router-link></button><span>更多爆款,低价采购,马上登录吧!</span></p>
      </div>
      <!-- <div class="note-list">
        <dl v-for="(item,index) in dataSource.datas" v-bind:key="index">
          <dt><img :src="item.goods_thumb" alt=""></dt>
          <dd>
            <p>{{item.goods_name}}</p><p>{{item.market_price}}</p><p>{{item.shop_price}}</p>
            <span>{{item.sell_count}}</span>
          </dd>
        </dl>
      </div> -->
      <good-list notloading="true" :datalist = "dataList"></good-list>
  </div>
</template>

<script>
import Vue from 'vue';
import GoodList from './GoodList.vue'
Vue.component('good-list', GoodList)
import { Indicator } from 'mint-ui';
import axiosUtil from '../utils/axios.js';
export default {
  data(){
    return{
      dataList:[],
      dataSource:{}
    }
  },
  mounted:function(){
    let that=this;
    Indicator.open({
      text: '加载中',
      spinnerType: 'fading-circle'
    });
    axiosUtil.get({
      url:'api/goods/homeGoods',
      type:'get',
      callback:(res)=>{
        that.dataSource=res.data.body;
        setTimeout(()=>{
          Indicator.close();
        },500)
      }
    });
    axiosUtil.get({
      url:'api/goods/homeGoods',
      type:'get',
      callback:(res)=>{
        that.dataList=that.dataList.concat(res.data.body.datas);
      }
    });
  }
}
</script>
<style scoped lang="scss">
  .yo-header-a{
    background:#fff;
    font-size:.2rem;
    color:#000;
    border-width:0;
    height: .44rem;
    width:100%;
    text-align: center;
    line-height:.44rem;
    position:fixed;
    border-bottom: .01rem solid #d5d5d5;
    z-index: 999;
  }
  .note-sec{
    height:1.33rem;
    padding-top:.44rem;
    background:#f3f3f3 url('../../../static/images/shopping_tuijian.png') no-repeat center .92rem;
    background-size:contain;
    p{
      height:.3rem;
      padding-left:.4rem;
      padding-top:.14rem;
      .btn{
        height:.3rem;
        width:.5rem;
        background:#f3f3f3;
        border:.02rem solid #d48280;
        border-radius:.05rem;
        margin-right:.06rem;
        .btn1{
          color:#d48280;
        }
      }
      span{
        color:#bdbdbd;
        font-size:.16rem;
        text-align: center;
      }
    }
  }
</style>
