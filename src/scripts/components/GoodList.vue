<template lang="html">
  <section  class="goodList">
    <ul class="note-list">
      <li v-for="(item,index) in datalist" v-bind:key="index">
        <router-link  :to="`/goodinfo/${item.goods_id}`">
          <div class="goods-img"><img :src="item.goods_thumb" alt=""></div>
          <div class="goods-info">
            <p class="good-name">{{item.goods_name}}</p>
            <div class="bottom">
              <div class="price">
                <p class="market-price">￥{{item.market_price}}</p>
                <p class="shop-price">￥{{item.shop_price}}</p>
              </div>
              <p class="sell-count">成交{{item.sell_count}}单</p>
            </div>
          </div>
      </router-link>
      </li>
    </ul>
  </section>
</template>
<script>
import Vue from 'vue';
import axiosUtil from '../utils/axios.js';
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
export default {
  data(){
    return{
      dataSource:[]
    }
  },
  props: ['notloading', 'uri','datalist'],
  mounted:function(){
  }
}
</script>

<style lang="scss" scoped>
  .goodList{
    ul{
      overflow-y: scroll;
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
        position: relative;
        overflow: hidden;
        .goods-img{
          display: flex;
          justify-content:center;
          align-items: center;
            img{
              height: 2.08rem;
            }
        }
        .goods-info{
          flex:1;
          padding:0 .05rem;
          color:#cccccc;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .good-name{
            font-size: .13rem;
            padding-top: .1rem;
            color: #333333;
            margin-bottom: .1rem;
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
