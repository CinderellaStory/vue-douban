// 影院热线
<template>
<div class="interests">
    <ul>
         <li v-for="(item,index) in items" :key='index'>
             <a href="">{{item.text}}</a>
         </li>
    </ul>
</div>  
</template>
<script>
  export default {
    data(){
      return{
        items:[
          {
            text:'中国',
          },
          {
            text:'期待观影',
            to:''
          },
          {
            text:'等待公映',
          },
          {
            text:'期待',
          },
          {
            text:'【2018年国内电影排期】',
          },
          {
            text:'小说vs经典',
          }
        ]
      }
    }
  }
</script> 

<style scpoed lang="less">
.interests{
  ul{
    li{
        margin: 0 4px 10px 4px;
        text-align: center;
        float: left;
        border: 1px solid #42bd56;
        line-height: 30px;
        padding: 12px;
        border-radius: 3px;
        a{
            color: #42bd56;
        }
    }
  }
}
</style>