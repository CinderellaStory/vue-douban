<template>
  <div class="SubNav">
     <ul>
         <router-link v-for="(nav,s) in  navs" :key="s" :to="nav.to" tag="li">{{nav.text}}</router-link>
     </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
        navs:[
            {
                text:"注册账号",
                to:'Register'
            },
            {
                text:"登录豆瓣",
                to:'login'
            },
            {
                text:"使用桌面版",
                to:' '
            },
            {
                text:"使用豆瓣App",
                to:' '
            }
        ]
   }
  }
}
</script>

<style lang="less" scoped>
.SubNav{
    border-top:1px solid #f3f3f3; 
    margin-top: 20px;
    ul{
        li{
            width: 50%;
            font-size: 14px;
            display: inline-block;   
            box-sizing: border-box;
            text-align: center;
            border-bottom: 1px solid #f3f3f3;
            color: #f73e4a;
            padding: 10px 0;
            &:nth-child(n+1){
                border-right: 1px solid #e5e5e5;
            }
        }
    }
}
</style>
