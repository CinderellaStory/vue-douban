// 影院热线
<template>
<div class="marking">
  <router-link v-for="(item,index) in items" :to="item.to" :key='index'>{{item.text}}</router-link>
</div>  
</template>
<script>
  export default {
    data(){
      return{
        items:[
          {
            text:'想看',
            to:''
          },
          {
            text:'看过',
            to:''
          }
        ]
      }
    }
  }
</script> 

<style scpoed lang="less">
.marking{
  display: flex;
  a{
    flex: 1;
    text-align: center;
    border: 1px solid #ffb712;
    color: #ffb712;
    line-height: 30px;
    margin-right: 10px;
    border-radius: 3px;
  }
}
</style>