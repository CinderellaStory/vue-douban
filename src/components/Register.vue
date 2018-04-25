<template>
  <div class="Register">
     <h1>欢迎来到豆瓣</h1>
     <div class="RegisterContent">
        <form action="" method="get">
                <div class="RegisterInfo">
                    <label for="">
                        <input type="text" placeholder="邮箱 / 手机号">
                    </label>
                    <label for="">
                        <input type="password" placeholder="请输入密码">
                    </label>
                    <label for="">
                        <input type="text" placeholder="请输入昵称">
                    </label>
                </div>
                <button class="SubmitBtn" type="submit">立即注册</button>
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
     color:#f73e4a;
     height: 45px;
     line-height: 45px;
 }
 .RegisterContent{ 
    padding: 15px;
    margin-top: 20px;
        form{
        .RegisterInfo{
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
        }
        }
  }
</style>
