<template lang="html">
  <div class="m-myinfo">
    <header>
      <div class="info-top" v-if="!isLogin">
        <a href="#"><img src="../../../static/images/user_myself_default.png" alt=""/></a>
        <span>未登录</span>
      </div>
      <div class="info-top" v-else>
        <a href="#"><img :src="username[3]" alt=""/></a>
        <span>{{username.userID}}</span>
      </div>
    </header>
    <div class="info-sec">
      <div class="info-sec-top">
        <div class="info-sec-top-con">
          <span class="span1"><img src="../../../static/images/bind_wx_right_icon.png" alt=""/></span>
          <span class="span2"><img src="../../../static/images/all_order.png" alt=""/>全部订单</span>
        </div>
      </div>
      <div class="info-sec-bottom">
        <ul>
          <li>
            <img src="../../../static/images/to_pay.png" alt="">
            <span>待付款</span>
          </li>
          <li>
            <img src="../../../static/images/to_deliver.png" alt="">
            <span>代发货</span>
          </li>
          <li>
            <img src="../../../static/images/to_receive.png" alt="">
            <span>待收货</span>
          </li>
          <li>
            <img src="../../../static/images/to_exchange.png" alt="">
            <span>换货区</span>
          </li>
          <li>
            <img src="../../../static/images/received.png" alt="">
            <span>已收货</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="info-nav">
      <div class="info-nav-top">
        <div class="info-nav-top-con">
          <span class="span2"><img src="../../../static/images/home_assets_icon.png" alt=""/>我的资产</span>
        </div>
      </div>
      <div class="info-nav-bottom">
        <ul>
          <li>
            <img src="../../../static/images/assets_money_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_coupon_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_favorite_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_bill_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_belly_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_address_icon.png" alt="">
          </li>
          <li>
            <img src="../../../static/images/assets_help_icon.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../vuex/store';
import Vue from 'vue';
export default {
  data(){
    return{
      isLogin:false,
      username:{}
    }
  },
  mounted:function(){
    let username = store.state.username;
    let isShow = username[0]||false;
    console.log(isShow);
    if(isShow){
        this.username = username;
        this.isLogin = true;
    }else{
      window.location.href='#/login';
    }
  }
}
</script>
<style lang="scss">
  .m-myinfo{
    height:100%;
    background:#f3f4f6;
    header{
      width:100%;
      height:2.18rem;
      .info-top{
        height:2.18rem;
        background:url(../../../static/images/bg_myself.png) no-repeat center top;
        background-size:100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a{
          width:.86rem;
          img{
            width:.86rem;
          }
        }
        span{
          padding-top:.06rem;
          color: #fff;
          font-size: .18rem;
        }
      }
    }
    .info-sec{
      height:.2.26rem;
      background:#fff;
      .info-sec-top{
        display: flex;
        justify-content: center;
        height:.44rem;
        .info-sec-top-con{
          width:96%;
          height:.44rem;
          border-bottom:2px solid #f7f7f7;
          .span1{
            float: right;
            img{
                height:.14rem;
                margin-top:.15rem;
            }
          }
          .span2{
            height:.44rem;
            font-size:.14rem;
            line-height:.44rem;
            img{
                height:.24rem;
                float: left;
                margin-right:.11rem;
                margin-top:.1rem;
            }
          }
        }
      }
      .info-sec-bottom{
        height:.66rem;
        ul{
          display: flex;
          justify-content: space-around;
          li{
            height:.66rem;
            float:left;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            img{
              height:.24rem;
              margin-left:.06rem;
            }
            span{
              font-size: .12rem;
            }
          }
        }
      }
    }
    .info-nav{
      height:2.26rem;
      background:#fff;
      margin-top: .1rem;
      .info-nav-top{
        height:.44rem;
        .info-nav-top-con{
          width:100%;
          height:.44rem;
          border-bottom:2px solid #f5f5f5;
          .span2{
            color:#a7a7a7;
            height:.44rem;
            font-size:.14rem;
            line-height:.44rem;
            img{
                display: block;
                height:.24rem;
                float: left;
                margin-left:.06rem;
                margin-right:.11rem;
                margin-top:.1rem;
            }
          }
        }
      }
      .info-nav-bottom{
        height:1.88rem;
        ul{
          height:1.88rem;
          li{
            height:.92rem;
            width:25%;
            float:left;
            border-bottom:.02rem solid #f5f5f5;
            border-right:.02rem solid #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height:.48rem;
            }
          }
          li:nth-child(4){
            border-right:none;
          }
        }
      }
    }
}
</style>
