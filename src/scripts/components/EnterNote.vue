<template lang="html">
  <div class="enterNote">
      <div class="yo-header">进货单</div>
      <div class="note-sec">
        <p><input type="button" name="" value="登录"><span>更多爆款,低价采购,马上登录吧!</span></p>
      </div>
      <div class="note-list">
        <dl v-for="(item,index) in dataSource.datas" v-bind:key="index">
          <dt><img :src="item.goods_thumb" alt=""></dt>
          <dd>
            <p>{{item.goods_name}}</p><p>{{item.market_price}}</p><p>{{item.shop_price}}</p>
            <span>{{item.sell_count}}</span>
          </dd>
        </dl>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axiosUtil from '../utils/axios.js';
export default {
  data(){
    return{
      dataSource:{}
    }
  },
  mounted:function(){
    let that=this;
    axiosUtil.get({
      url:'api/goods/homeGoods',
      type:'get',
      callback:(res)=>{
        that.dataSource=res.data.body;
      }
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/usage/core/reset.scss";
  @import "../../styles/usage/fragment/yo-header.scss";
  @include yo-header(
    $bgcolor:#fff,
    $font-size:.2rem,
    $color:#000,
    $border-width:0
  )
  .yo-header{
    border-bottom: 2px solid #d5d5d5;
  }
  .note-sec{
    height:.89rem;
    background:#f3f3f3 url('../../../static/images/shopping_tuijian.png') no-repeat center .48rem;
    background-size:contain;
    p{
      height:.3rem;
      padding-left:.4rem;
      padding-top:.14rem;
      input{
        height:.3rem;
        width:.5rem;
        background:#f3f3f3;
        border:.02rem solid #d48280;
        border-radius:.05rem;
        color:#d48280;
        margin-right:.06rem;
      }
      span{
        color:#bdbdbd;
        font-size:.16rem;
        text-align: center;
      }
    }
  }
</style>
