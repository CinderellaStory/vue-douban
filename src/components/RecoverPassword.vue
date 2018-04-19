<template>
  <div class="RecoverPassword">
      <h1>欢迎来到豆瓣</h1>
     <div class="RegisterContent">
        <form action="" method="get">
                <div class="RegisterInfo">
                    <label for="">
                        <input type="text" placeholder="邮箱 / 手机号">
                    </label>
                    <label for="">
                        <input type="text" placeholder="请输入验证码">
                        <img src="https://www.douban.com/misc/captcha?id=ZSqNugpSdIoz26crasVJUheF:en&size=m" alt="">
                    </label>
                </div>
                <button class="SubmitBtn" type="submit">提交</button>
        </form>
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
h1{
     padding-top: 50px;
     text-align: center;
     color:#42bd56;
     height: 45px;
     line-height: 45px;
 }
 .RegisterContent{ 
    padding: 15px;
    margin-top: 20px;
        form{
        .RegisterInfo{
            position: relative;
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
                img{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    height: 46px;
                    width: 160px;
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
  }
</style>
