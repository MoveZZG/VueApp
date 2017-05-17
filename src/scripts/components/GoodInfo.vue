<template lang="html">
  <div class="m-goodinfo">
    <div class="yo-header-a">
      <span class="regrets"><a @click="back"><img src="../../../static/images/retrun_2_icon.png" alt=""></a></span>
    </div>
    <div class="goodinfo-video">
      <video :src="dataSource.video_src"  autoplay >
      </video>
    </div>
    <div class="info-con">
      <p class="title">{{dataSource.goods_name}}</p>
      <p class="price">￥{{dataSource.shop_price}}</p>
      <div class="info-con-bottom">
        <p>成交<span>{{dataSource.sell_count}}</span>件<b>|</b></p>
        <p>总库存<span>{{dataSource.goods_number}}</span>件</p>
        <p class="less-shop">至少购买<span>{{dataSource.min_limit}}</span>件</p>
      </div>
    </div>
    <div class="info-center">
      <div class="container">
        <div class="op" v-for="(item,index) in dataSource.attributes">
          <p>{{item.attr_name}}</p>
          <ul>
            <li v-for="(item1,index) in item.attrs"><a href="#">{{item1.attr_value}}</a></li>
          </ul>
        </div>
      </div>
      <div class="number">
          <p><img src="../../../static/images/adi_icon.png" alt=""><span>0</span><img src="../../../static/images/add_icon.png" alt=""></p>
      </div>
    </div>
    <div class="info-detail">
      <p class="info-detail-title">继续拖动,查看文详情</p>
    </div>
    <div class="info-detail-con" v-html="dataRusult.goods_desc">
    </div>
    <div class="info-bottom">
      <ul>
        <li class="li1"><a href="#"><img src="../../../static/images/nav_icon_kefu_white.png" alt=""/></a></li>
        <li class="li2"><a href="#"><img src="../../../static/images/xq_sc_icon_up.png" alt=""/></a></li>
        <li class="li3"><a href="#"><img src="../../../static/images/xq_car_icon.png" alt=""/></a></li>
        <li class="li4"><a href="#">加入进货单</a></li>
        <li class="li5"><a href="#">立即购买</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axiosUtil from '../utils/axios.js';
export default {
  props:['goodinfo'],
  data(){
    return{
      dataSource:{},
      dataRusult:{}
    }
  },
  methods:{
    back:function(){
      this.$router.go(-1)
    }
  },
  mounted:function(){
    let that=this;
    that.goods_id=this.$route.params.id;
    console.log(that.goods_id);
    axiosUtil.get({
      // url: '/api/goods/goodsDetail?goods_id='+that.goods_id,
      url:'http://ypwh.applinzi.com/home.php?type=goodsdetailcn&parms='+that.goods_id,
      type:'get',
      callback:function(res){
        that.dataSource=res.data.body.datas;
        console.log(that.dataSource);
      }
    });
    axiosUtil.get({
      url: '/api/goods/goodsDetail?goods_id='+that.goods_id,
      type:'get',
      callback:function(res){
        that.dataRusult=res.data.body;
        console.log(that.dataRusult);
      }
    });

  }
}
</script>

<style scoped lang="scss">
.m-goodinfo{
  background:#e9e9e9;
  height:100%;
  overflow-y: scroll;
  .yo-header-a{
    position: relative;
    .regrets{
      position: absolute;
      left:4.3%;
      top:.12rem;
      z-index: 9999;
      a{
        img{
          height:.2rem;
        }
      }
    }
  }
  .goodinfo-video{
    height:2.11rem;
    background:url('../../../static/images/xq_zw_bg.png') no-repeat center;
    background-size:100% 100%;
    video{
      height:2.11rem;
    }
  }
  .info-con{
    height:1.04rem;
    background:#fff;
    color:#060606;
    font-weight: bold;
    .title{
      padding-left:4%;
      font-size:.16rem;
      padding-top:.06rem;
    }
    .price{
      padding-left:4%;
      font-size:.14rem;
      color:#e50e38;
      padding-top:.15rem;
    }
    .info-con-bottom{
      height:.14rem;
      padding-left:2.1%;
      font-size:.14rem;
      margin-top:.16rem;
      p{
        float: left;
        b{
          color:#c3c3c3;
        }
      }
      .less-shop{
        float: right;
        margin-right: .08rem;
        span{
          color:#e82748;
        }
      }
    }
  }
  .info-center{
    min-height:2.22rem;
    margin-top:.08rem;
    background: #fff;
    padding-left:.12rem;
    color:#737373;
    font-size:.14rem;
    .container{
      padding-top: .01rem;
      min-height:1.58rem;
      .op{
        padding-top: .15rem;
        min-height: .72rem;
        ul{
          overflow: hidden;
          margin-top: .1rem;
          li{
            width:18.7%;
            height:.29rem;
            background: #f0f0f0;
            float: left;
            border-radius:.1rem;
            text-align: center;
            line-height:.29rem;
            margin-right: .14rem;
            margin-top:.1rem;
            a{
              color:#041018;
              text-decoration: underline;
            }
          }
        }
      }
    }
    .number{
      min-height:.49rem;
      margin-top: .05rem;
      border-top:.01rem solid #fbfbfb;
      p{
        float: right;
        margin-right:-.14rem;
        padding-top:.09rem;
        img{
          height:.31rem;
          margin-left:.21rem;
          margin-right:.21rem;
        }
      }
    }
  }
  .info-bottom{
    position: fixed;
    bottom:0;
    height:.5rem;
    width:100%;
    ul{
      height:.5rem;
      li{
        width:13.3%;
        height:.5rem;
        float: left;
        background:#fff;
        text-align: center;
        line-height: .5rem;
        a{
          color:#fff;
          font-size: .12rem;
          text-decoration: underline;
          height:.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            height:.32rem;
          }
        }
      }
      .li1{
        background:#fe8c25;
      }
      .li2{
        border-right:.01rem solid #f5f5f5;
      }
      .li4{
        width:30%;
        background:#fd521f;
      }
      .li5{
        width:30%;
        background:#e4012f;
      }
    }
  }
  .info-detail{
    .info-detail-title{
      min-height: .70rem;
      text-align: center;
      color:#5d5d5d;
      font-size:.16rem;
      margin-top:.33rem;
    }
  }
  .info-detail-con{
    width:100%;
    background: #fff
  }
}
</style>
