<template>
  <div class="login">
     <h1>欢迎来到豆瓣</h1>
     <div class="LoginContent">   
        <form action="" method="get">
            <div class="LoginInfo">
                <label for="">
                    <input type="text" v-model="LoginInfo.LoginName" placeholder="邮箱 / 手机号 / 用户名">
                </label>
                <label for="">
                    <input type="text" v-model="LoginInfo.LoginPwd" placeholder="请输入密码">
                </label>
            </div>
            <button class="SubmitBtn" type="submit" @click="login">登录</button>
        </form>
        <div class="Wrapper">
            <router-link to="Register">注册豆瓣</router-link>
            |
            <router-link to="RecoverPassword">找回密码</router-link>
        </div>
        <div class="LoginFooter">
            <div class="MoreLogin">
                <a href="">微信登录</a>
                <span>|</span>
                <a href="">微博登录</a>
            </div>
        </div>
     </div>
  </div>
</template>
<script>
import {default as data} from '../store/user.js'

export default {
  data(){
      return{
          LoginInfo:
              {
                  LoginName:'admin',
                  LoginPwd:'123456'
              }
      }
  },
  methods:{
      login:function(){
          var a = data.LoginUser.username;
          var b = this.LoginInfo.LoginName;
          var c = data.LoginUser.password;
          var d = this.LoginInfo.LoginPwd;
           if(a===b&&c===d){
                console.log(data.LoginUser.username);
                this.$toast("恭喜登录成功!");
                this.$router.push({ path: '/mine' });
            }
            else{
                console.log(this.LoginInfo.LoginName);
                this.$toast("密码或用户名错误,请重新输入密码");
            }
      }
  }
}
</script>
<style lang="less" scoped>
 h1{
     padding-top: 50px;
     text-align: center;
     color:#f73e4a;
     height: 45px;
     line-height: 45px;
 }
 .LoginContent{ 
    padding: 15px;
    margin-top: 20px;
        form{
        .LoginInfo{
            label{
                input{
                    width: 97%;
                    height: 44px;
                    font-size: 15px;
                    padding-left:8px;
                    margin-bottom: 14px;
                    outline: none;
                    border: 1px solid #ccc;
                }
            }
            }
        .SubmitBtn{
            border: 1px solid #f73e4a;
            background: #f73e4a;
            width: 100%;
            padding: 10px 26px;
            color: #fff;
            font-size: 16px;
            border-radius: 3px;
            margin-top: 20px;
            outline: none
        }
        }
    .Wrapper{
        margin-top: 20px;
        color: #999;
        font-size: 14px;
        text-align: center;
            a{
            color: #999;
            font-size: 14px;
            }
    }
    .LoginFooter{
        .MoreLogin{
            position: absolute;
            bottom: 20px;
            color: #999;
            font-size: 14px;
            left: 20%;
            a{
            color: #999;
            font-size: 14px;
            }
            span{
                padding: 0 50px;
            }
        }
    }
  }
</style>
