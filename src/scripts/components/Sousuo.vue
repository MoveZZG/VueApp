<template lang="html">
  <section class="container">
    <div class="yo-header-index">
      <div class="regret flc">
        <div class="back" @click="back">
            <span class="yo-ico">&#xf07d;</span>
        </div>
      </div>
      <h2 class="searchBox">
          <div class="sousuo">
            <span class="yo-ico">&#xe511;</span>
            <input type="text" name="" value=""  v-model="value"  placeholder="搜索">
          </div>
      </h2>
        <div class="affirm flc">
            <button class="btn" @click="search">搜索</button>
        </div>
    </div>
    <div class="edit">
      <div class="title">
        搜索历史
      </div>
      <div class="content">
        <div v-for="(item,index) in searchList" class="title" @click="selectItem($event)">
          {{item}}
        </div>
      </div>
      <div class="btn-clear">
          <button name="button" @click="clearStore">清除搜索历史</button>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue';
import axiosUtil from '../utils/axios';
import { Indicator } from 'mint-ui';
import { Search } from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.component(Search.name, Search);
export default {
  data(){
    return{
      value:'',
      searchList:[],
      dataSource:{}
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    clearStore(){
      MessageBox.confirm('确定执行此操作?').then(action => {
        localStorage.setItem('searchList','');
        this.searchList = [];
      });
    },
    search(){
      let value =this.value.trim()=='';
      if (value) {
        MessageBox('提示', '内容不能为空');
        return;
      }else{
        let flag = false;
        for(var i = 0,l= this.searchList.length;i<l;i++){
          if(this.value.trim()==this.searchList[i])
            flag= true;
        }
        if(!flag){
          this.searchList.push(this.value);
          localStorage.setItem('searchList',this.searchList);
        }
        window.location.href=`#/chart/${this.value}`;
      }
    },
    selectItem(e){
      console.log(e.target.innerHTML.trim());
      this.value=e.target.innerHTML.trim();
    }
  },
  mounted:function(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let that=this;
    // axiosUtil.get({
    //   url:'api/home/category',
    //   type:'get',
    //   callback:(res)=>{
    //     that.dataSource=res.data.body;
    //
    //   }
    // })
    let item =  localStorage.getItem('searchList').split(',');
    if(item!="")
    that.searchList = that.searchList.concat(item);
    setTimeout(()=>{
      Indicator.close();
    },300)
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  height: 100%;
  .edit{
    flex:1;
    overflow-y: scroll;
  }
}
.yo-header-index{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  overflow: hidden;
  padding:.04rem 0;
  z-index: 9999;
  .flc{
    display: flex;
    width: .44rem;
    height: 100%;
    font-size: .2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: .05rem;
    .back{
      font-weight: bolder;
      font-size: .2rem;
    }
    .btn{
      border: 0;
      padding: .05rem .09rem;
      background:#ff6119;
      font-size: .13rem;
      color: #fff;
      border-radius: .05rem;
    }
  }
  .searchBox{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ececec;
    box-sizing: border-box;
    border: .1px #e4f4f3 solide;
    font-size: .15rem;
    border-radius: .05rem .05rem;
    padding-left: .05rem;
    opacity: 0.8;
    input{
      color: #565656;
      background: transparent;
      border: 0;
    }
  }
}
.edit{
  color: #a0a0a0;
  font-size: .14rem;
  .title{
    margin-left: .16rem;
    line-height: .52rem;
    border-bottom: solid 1px #eeeeee;
  }
  .content{
    color:#565656;
  }
  .btn-clear{
    margin-top: .2rem;
    button{
      display: block;
      border: 0;
      margin: 0 auto;
      background: #eee;
      width: 2rem;
      height: .4rem;
    }
  }
}
</style>
