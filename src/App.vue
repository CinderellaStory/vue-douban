<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
*{padding: 0;margin: 0;}
body,div{font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;}
.content{padding:10px 10px 0 20px; }
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
