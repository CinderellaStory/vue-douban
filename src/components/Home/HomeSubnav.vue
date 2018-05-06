<template>
  <div class="HomeSubnav">
        <router-link v-for="(item,index) in items" :to="item.to" :key="index">
            {{item.text}} 
        </router-link>
  </div>
</template>
<script>
export default {
  data(){
      return{
          items:[
              {
                  text:'登录',
                  to:'/login'
              },
              {
                  text:'即将上映',
                  to:'CinemaMore/fox'
              },
              {
                  text:'同城',
                  to:'Distraction/City'
              },
              {
                  text:'音乐',
                  to:'Distraction/music'
              }
          ]
      }
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
.HomeSubnav{
    margin-top: 56px;
    overflow: hidden;
    a{
        width: 48%;
        background: #f6f6f6;
        text-align: center;
        padding: 10px;
        margin: 3px;
        color: #494949;box-sizing: border-box;float:left;

    }
}
</style>
