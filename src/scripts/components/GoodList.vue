<template lang="html">
  <section class="goodList">
    <ul class="note-list" v-if="isShow" v-infinite-scroll="loadMore"
      infinite-scroll-disabled="notloading"
      infinite-scroll-distance="10">
      <li v-for="(item,index) in dataSource" v-bind:key="index">
        <div class="goods-img"><img :src="item.goods_thumb" alt=""></div>
        <div class="goods-info">
          <p class="good-name">{{item.goods_name}}</p>
          <div class="price">
            <p class="market-price">￥{{item.market_price}}</p>
            <p class="shop-price">￥{{item.shop_price}}</p>
          </div>
          <p class="sell-count">成交{{item.sell_count}}单</p>
        </div>
      </li>
    </ul>
    <!-- <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul> -->
    <p class="page-infinite-loading" v-if="!notloading">
      <mt-spinner type="double-bounce"></mt-spinner>
    </p>
  </section>
</template>
<script>
import Vue from 'vue';
import axiosUtil from '../utils/axios.js';
import { InfiniteScroll } from 'mint-ui';
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
Vue.use(InfiniteScroll);
export default {
  data(){
    return{
      isShow:false,
      list:[1,2,3],
      dataSource:[]
    }
  },
  props: ['notloading', 'uri'],
  methods:{
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        for (let i = 1; i <= 10; i++) {
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted:function(){
    let that=this;
    axiosUtil.get({
      url:'api/goods/homeGoods/'+that.uri,
      type:'get',
      callback:(res)=>{
        that.dataSource=that.dataSource.concat(res.data.body.datas);
        this.isShow = true;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .goodList{
    ul{
      background: #fff;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        width: 48%;
        margin: 1%;
        box-shadow:#ccc 0 0 .01rem;
        border: 1px #dedede solid;
        border-radius: .02rem;
        img{
          width: 100%
        }
        .goods-info{
          padding:0 .05rem;
          color:#cccccc;
          .good-name{
            font-size: .13rem;
            padding-top: .1rem;
            height: .56rem;
            color: #333333;
          }
          .price{
            display: flex;
            font-size: .11rem;
            .market-price{
              color: #e12627;
              margin-right: .11rem;
            }
            .shop-price{
              text-decoration: line-through;
            }
          }
          .sell-count{
            text-align: right;
            padding: .05rem 0;
          }
        }
      }
    }
  }
  .page-infinite-loading{
    display: flex;
    justify-content: center;
  }
</style>
