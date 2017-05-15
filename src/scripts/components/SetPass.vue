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
      验证码已经发送至{{phone}}
    </p>
    <p class="phone">
      <label for="phone">验证码</label><input v-model='code' id="code" type="text" name="" value="" placeholder='短信验证码'><span class="get-again" @click="getCode">{{time}}重新获取</span>
    </p>
    <p class="phone">
      <label for="phone">设置密码</label></label><input v-model='value' id="phone" type="password" name="" value="" placeholder='6-12位字母/数字组合'>
    </p>
    <div class="btn-next">
        <button name="button" @click="register">注册</button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { MessageBox } from 'mint-ui';
import axiosUtil from '../utils/axios';

export default {
  methods:{
    back(){
      this.$router.go(-1);
    },
    register(){
      let that = this;
      let value =this.value.trim()=='';
      if (value) {
        MessageBox('提示', '密码不能为空');
        return;
      }else if(that.code==that.getCode){
        axiosUtil.get({
          url:'http://datainfo.duapp.com/shopdata/userinfo.php',
          type:'post',
          data:{"status":"register","userID":that.phone,"password":that.value},
          callback:(res)=>{
            let msg = '';
            if(res==1){
              msg = '注册成功';
            }else{
              msg = '注册失败'
            }
            MessageBox.alert('提示', );
          }
        });
      }
    },
    getCode(){
      let that = this;
      if(this.canClick){
        that.jishi();
        let res= eval({"mobile":18801497118,"mobile_code":5893})
        that.getcode = res.mobile_code;
        // axiosUtil.get({
        //   url:'mock/sms.php?mobile='+that.phone,
        //   type:'get',
        //   callback:(res)=>{
        //     res = eval(res);
        //     that.getCode = res.mobile_code;
        //   }
        // })
      }
    },
    jishi(){
      let that = this,count = 60;
      let time = setInterval(()=>{
        if(count==1){
          that.time ='';
          this.canClick = true;
          clearInterval(time);
        }else{
          count--;
          that.time = count+'秒后';
        }
      },1000)
    }
  },
  data(){
    return{
      title:"设置登陆密码",
      canClick:true,
      phone:'',
      value:'',
      code:'',
      getcode:'',
      time:'60秒后'
    }
  },
  mounted:function(){
    this.phone = this.$route.params.phone;
    this.getCode();
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
  position: relative;
  margin:.01rem 0;
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
.get-again{
  position: absolute;
  font-size: .1rem;
  right: 0;
  z-index: 999;
  color: #aaa;
  text-indent: .1rem;
}
</style>
