<template lang="html">
  <div class="m-lists">
    <div class="yo-header-a">
      <span class="regrets"><a @click="back"><img src="../../../static/images/return_icon1.png" alt=""></a></span>
      <h2 class="title">{{title}}</h2>
      <span class="affirms"><a href="#"><img src="../../../static/images/array_2_icon.png" alt=""></a></span>
    </div>
    <div class="lists-nav">
      <ul>
        <li><a href="#">时间</a></li>
        <li><a href="#">销量</a></li>
        <li><a href="#">价格</a></li>
        <li><a href="#">筛选</a></li>
      </ul>
    </div>
    <div class="goodList">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
        <ul class="note-list">
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
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Indicator } from 'mint-ui';
import axiosUtil from '../utils/axios.js';
export default {
  data(){
    return{
      title:'',
      catId:1,
      page:1,
      dataSource:[],
      allLoaded:false
    }
  },
  methods:{
    loadTop:function(){
      let that=this;
      setTimeout(function(){
        that.fenlei(1,function(res){
          that.dataSource=res;
          that.$refs.loadmore.onTopLoaded();
        });
      },1000);
    },
    loadBottom:function(){
      let that=this;
      let page = ++this.page;
      console.log(page);
      setTimeout(function(){
        that.fenlei(page,function(res){
          that.dataSource=that.dataSource.concat(res);
          that.$refs.loadmore.onBottomLoaded();
        });
      },1000);
    },
    back:function(){
      // let that=this;
      this.$router.go(-1)
    },
    fenlei:function(page,fl){
      let that=this;
      axiosUtil.get({
        url: '/api/goods/catGoods?cat_id='+that.catId+'&page='+page,
        type:'get',
        callback:(res)=>{
          fl(res.data.body.datas);
        }
      })
    }
  },
  mounted:function(){
    let that = this;
    this.title = this.$route.params.title;
    this.catId = this.$route.params.id;
    Indicator.open({
      text: '加载中',
      spinnerType: 'fading-circle'
    });
    this.fenlei(1,function(res){
      that.dataSource=res;
      setTimeout(()=>{
        Indicator.close();
      },500)
    });
  },
}
</script>
<style scoped lang="scss">
.m-lists{
  display: flex;
  height: 100%;
  flex-direction: column;
  .yo-header-a{
    position: relative;
    height:.44rem;
    border-bottom:.01rem solid #dcdcdc;
    .regrets{
      position: absolute;
      left:4.3%;
      top:.12rem;
      a{
        img{
          height:.2rem;
        }
      }
    }
    .title{
      text-align: center;
      line-height: .44rem;
      font-size:.18rem;
      font-weight: normal;
      color:#f84649;
    }
    .affirms{
      position: absolute;
      right:4.3%;
      top:.12rem;
      a{
        img{
          height:.16rem;
        }
      }
    }
  }
  .lists-nav{
    height:.4rem;
    ul{
      display: flex;
      justify-content:space-around;
      align-items: center;
      height:.4rem;
      li{
        float: left;
        a{
          font-size: .15rem;
          color:#000;
          text-decoration: underline;
        }
      }
    }
  }
  .goodList{
    overflow-y: scroll;
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
}
</style>
