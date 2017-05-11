<template lang="html">
  <section class="content">
    <div class="yo-header-index">
      <div class="regret flc">
        <div class="back" @click="back">
            <span class="yo-ico">&#xf07d;</span>
        </div>
      </div>
      <h2 class="title">
        {{title}}
      </h2>
    </div>
    <good-list notloading="false" uri="" ></good-list>
  </section>
</template>
<script>
import Vue from 'vue';
import GoodList from './GoodList.vue'
Vue.component('good-list', GoodList)
export default {
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  data(){
    return{
      title:''
    }
  },
  mounted:function(){
    this.title = this.$route.params.title
    console.log(this.title);
  }
}
</script>

<style scoped lang="scss">
.content{
  padding-top: .44rem;
  height: 100%;
  overflow-y: scroll;
}
.yo-header-index{
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  overflow: hidden;
  padding:.04rem 0;
  z-index: 9999;
  .flc{
    display: flex;
    width: .44rem;
    font-size: .2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: .1rem;
  }
  .title{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-indent: -.3rem;
  }
}
</style>
