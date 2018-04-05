<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style lang="less">
*{padding: 0;margin: 0;}
body,div{font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;}
.content{padding:10px 10px 0 10px; }
h3{
  font-weight: normal
}
body{
  background: #f7f7f7;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
