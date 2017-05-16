<template lang="html">
  <div class="m-login">
    <header class="login-logo">
      <span @click="back"><img src="../../../static/images/details_close_1_icon.png" alt=""/></span>
    </header>
    <div class="login-form">
      <form class="" action="index.html" method="post">
        <p>账号<input type="text" v-model="value" name="" value="" placeholder="手机号码"></p>
        <p>密码<input type="password" v-model="password" name="" value="" placeholder="密码"></p>
        <p class="login-p" @click="checkout"><input type="button" name="" value="登录" ></p>
        <p class="login-p login-p1"><input type="button" name="" value="微信一键登录"></p>
        <p class="login-p login-a"><a class="remeber" href="#">忘记密码？</a></p>
        <p class="login-p login-a login-regist"><a class="remeber no" href="#">还没有账号？</a><button class="btn"><router-link class="btn1" to='/register'>手机注册</router-link></button></p>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store';
import Vue from 'vue';
import { MessageBox } from 'mint-ui';
import axiosUtil from '../utils/axios';
export default {
  methods:{
    back(){
      this.$router.go(-1);
    },
    checkout(){
      let that = this;
      let value =this.value.trim()=='';
      if (value) {
        MessageBox('提示', '密码不能为空');
        return;
      }else{
        axiosUtil.get({
          url:'user/shopdata/userinfo.php?status=login&userID='+that.value+'&password='+that.password,
          type:'get',
          callback:(res)=>{
            let msg = '';
            console.log(res.data);
            if(res.data.userID!=''){
              msg = '登录成功';
              localStorage.setItem('username',value);
            }else{
              msg = '登录失败'
            }
            MessageBox.alert('提示', msg);
            store.commit({
              type:'login',
              username:value
            })
          }
        });
      }
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
      time:'60秒后',
      password:''
    }
  },
  mounted:function(){
  }
}
</script>

<style scoped lang="scss">
.m-login{
   height:100%;
   background:#fff;
  .login-logo{
    height:2.5rem;
    width:100%;
    background:url('../../../static/images/bg_logo.9.png') no-repeat center;
    background-size: 100% 100%;
    span{
      height:.2rem;
      float: right;
      margin-right:5.3%;
      margin-top:.25rem;
      img{
        height:.2rem;
      }
    }
  }
  .login-form{
    form{
      p{
        height:.44rem;
        width:100%;
        font-size:.18rem;
        border-bottom:.01rem solid #f1f1f6;
        line-height:.44rem;
        padding-left:2.7%;
        color:#2b2b2b;
        input{
          font-size: .14rem;
          padding-left:3.7%;
          color:#cacad0;
          border:0;
        }
      }
      .login-p{
        margin-top:.1rem;
        margin-left: 11.7%;
        width:76.8%;
        height:.36rem;
        background:#e5002e;
        text-align: center;
        line-height: .36rem;
        border-radius:.04rem;
        input{
          font-size:.14rem;
          color:#fff;
          background:none;
        }
        .remeber{
          float: right;
          color:#bbb;
          font-size:.14rem;
          text-decoration: underline;
        }
      }
      .login-p1{
        background: #7fcb2b;
      }
      .login-a{
        border:none;
        background:none;
      }
      .login-regist{
        .no{
          float:left;
          margin-left:13%;
          text-decoration: none;
        }
        .btn{
            width:20%;
            height:.05rem;
            width:30%;
            height:.3rem;
            text-align: center;
            line-height:.3rem;
            border-radius:.04rem;
            border:1px solid #fa615c;
            background:#fff;
            .btn1{
                color:#fa615c;
                font-size:.1rem;
            }
        }
      }
    }
  }
}
</style>
