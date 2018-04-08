<template>
  <div class="login">
     <h1>欢迎来到豆瓣</h1>
     <div class="LoginContent">   
        <form action="" method="get">
            <div class="LoginInfo">
                <label for="">
                    <input type="text" placeholder="邮箱 / 手机号 / 用户名">
                </label>
                <label for="">
                    <input type="text" placeholder="请输入密码">
                </label>
            </div>
            <button class="SubmitBtn" type="submit">登录</button>
        </form>
        <div class="Wrapper">
            <router-link to="Register">注册豆瓣</router-link>
            |
            <!-- <a href="" class="RecoverPassword">找回密码</a> -->
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
export default {
  data(){
      return{

      }
  },
  components:{

  }
}
</script>
<style lang="less" scoped>

// .fl{float: left}
// .fr{float: right}
// .ov{
//     overflow: hidden;
// }
// .login{
//     background: #fff;
// }
 h1{
     padding-top: 50px;
     text-align: center;
     color:#42bd56;
     height: 45px;
     line-height: 45px;
    //  a{
    //      color: #42bd56;
    //      font-size: 15px;
    //      position: absolute;
    //      left: 20px;
    //  }
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
            border: 1px solid #17AA52;
            background: #17AA52;
            width: 100%;
            padding: 10px 26px;
            color: #fff;
            font-size: 16px;
            border-radius: 3px;
            margin-top: 20px;
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
