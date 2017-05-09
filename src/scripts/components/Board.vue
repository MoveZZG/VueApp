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
    <mt-loadmore v-if="hasdata" :top-method="loadTop" :topDropText="'释放刷新'"  :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
      <section class="banner">
        <div  v-for="(item,index) in dataSource.ads" >
          <router-link  :to="item.ad_url">
            <a><img :src="item.ad_img" alt=""></a>
          </router-link>
        </div>
      </section>
      <section class="fenlei">
          <dl class=""  v-for="(item,index) in dataSource.shortcuts">
            <router-link  :to="item.url">
              <dt><img :src="item.icon" :alt="item.name"></dt>
            </router-link>
            <dd v-text="item.name"></dd>
          </dl>
      </section>
      <section class="huodong">
          <div v-for="(item,index) in dataSource.modules.arr">
             <router-link  :to="item.url">
               <img :src="item.img">
             </router-link>
          </div>
      </section>
      <section class="jiugongge" v-for="(item,index) in dataSource.goods_jiugongge">
        <div class="left">
         <router-link :to="item.left.url">
           <img :src="item.left.img" alt="item.left.name">
         </router-link>
        </div>
        <div class="right">
          <div class="item" v-for="(item1,index) in item.right" >
            <router-link :to="item1.url">
              <img :src="item1.img" alt="item1.name">
            </router-link>
          </div>
        </div>
        <div class="bottom">
         <router-link :to="item.bottom.url">
           <img :src="item.bottom.img" alt="item.bottom.name">
         </router-link>
        </div>
      </section>
      <good-list notloading="true" uri=""></good-list>
    </mt-loadmore>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  import axiosUtil from '../utils/axios';
  import { Loadmore } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import GoodList from './GoodList.vue'
  Vue.component('good-list', GoodList)
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Loadmore.name, Loadmore);
  export default {
    data(){
      return{
        dataSource:{},
        allLoaded:false,
        hasdata:false
      }
    },
    methods:{
      loadTop: function () {
        let that = this;
        setTimeout(function(){
          that.$refs.loadmore.onTopLoaded();
        }.bind(this),3000)
      }
    },
    mounted:function(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      let that = this;
      axiosUtil.get({
        url:'api/home/index3',
        type:'get',
        callback:(res)=>{
          that.dataSource = res.data.body;
          this.hasdata = true;
          setTimeout(()=>{
            Indicator.close();
          },500)
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
  z-index: 9999;
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
    opacity: 0.8;
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
  width: 100%;
  div{
    height: 100%;
    a{
      display: block;
      height: 100%;
      img{
        width: 100%;
      }
    }
  }
}
// 分类
.fenlei{
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  background: #fff;
  margin-bottom: .02rem;
  dl{
    width: 25%;
    text-align: center;
    img{
      width: .45rem;
    }
  }
  dd{
    padding-top: .06rem;
    font-size: .13rem;
    text-align: center;
  }
}
//活动
.huodong{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: .1rem;
  overflow: hidden;
  >div{
    width: 33%;
    height: .62rem;
    a{display: block;}
    img{
      display: block;
      width: 100%;
    }
  }
}
.jiugongge{
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  a{
    display: block;
    img{
        width: 100%;
    }
  }
  .left{
    width: 38%;
  }
  .right{
    width: 62%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    .item{
      height: 50%;
      width: 49%;
    }
  }
  .bottom{
    width: 100%;
  }
}
</style>
