<template>
  <div class="Home">
     <div class="content">
       <!-- <h1>这是首页</h1> -->
       <HomeSubnav></HomeSubnav>
       <HomeList></HomeList>
     </div>
  </div>
</template>

<script>
import HomeSubnav from './HomeSubnav.vue'
import HomeList from './HomeList.vue'

export default {
  components:{
    HomeSubnav,HomeList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

</style>
<style>
.Home{
  background:#fff;
}
</style>

