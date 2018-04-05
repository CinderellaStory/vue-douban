<template>
  <div class="Home">
     <div class="content">
       <HomeSubnav></HomeSubnav>
       <HomeList></HomeList>
     </div>
  </div>
</template>

<script>
import HomeSubnav from './Home/HomeSubnav.vue'
import HomeList from './Home/HomeList.vue'

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

