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
    <p class="phone-title">
      我们将发送验证码到你的手机上
    </p>
    <p class="phone">
      <label for="phone">手机号</label><input v-model='value' id="phone" type="text" name="" value="" placeholder='请填写注册的手机号码'>
    </p>
    <div class="btn-next">
        <button name="button" @click="search">下一步</button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { MessageBox } from 'mint-ui';

export default {
  methods:{
    back(){
      this.$router.go(-1);
    },
    search(){
      let phone = this.value;
      let value = phone.trim()=='';
      if (value) {
        MessageBox('提示','手机号不能为空');
        return;
      }else if(!(/^1[34578]\d{9}$/.test(phone))){
        MessageBox("提示","手机号码有误，请重填");
        return;
      }else{
        window.location.href=`#/setpass/${this.value}`;
      }
    }
  },
  data(){
    return{
      title:"手机注册",
      value:''
    }
  }
}
</script>
<style scoped lang="scss">
.content{
  padding-top: .44rem;
  height: 100%;
  overflow-y: scroll;
  background: #eeeeee;
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
  border-bottom: 1px solid #eee;
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
    text-indent: -.4rem;
  }
}
.phone-title{
  color: #aaa;
  margin: .1rem;
}
.phone{
  height: .44rem;
  background-color: #fff;
  padding: 0 .1rem;
  font-size: .17rem;
  line-height: .44rem;
  label{
    height: 100%;
    width: .44rem;
    margin-right: .1rem;
  }
  input{
    border: 0;
    color: #aaa;
  }
}
.btn-next{
  text-align: center;
  padding-top: .1rem;
  button{
    height: .44rem;
    width: 94% ;
    background: #ff6119;
    color: #fff;
    border: 0;
    border-radius: .05rem;
  }
}
</style>
