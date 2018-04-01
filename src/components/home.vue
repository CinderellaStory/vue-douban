<template>
  <div class="hello">
    <NavBar></NavBar>
     <div class="content">
       <h1>这是首页</h1>
     </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components:{
    NavBar
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
