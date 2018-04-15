<template>
  <div id="app">
    <router-view/>
    <NavBar></NavBar>
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
.fl{
    float: left;
}
.fr{
    float: right;
}
.ov{
    overflow: hidden;
}
html{
}
*{padding: 0;margin: 0;}
body,div{font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;}
.content{padding:10px 10px 0 10px; }
h3{
  font-weight: normal
}
body{
  background: #fff;
  display: flex;
    flex-direction: column;
    height: 100%;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
