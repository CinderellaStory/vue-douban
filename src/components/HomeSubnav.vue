<template>
  <div class="HomeSubnav">
        <router-link v-for="item in items" :to="item.to">
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
                  text:'正在上映',
                  to:'CinemaMore/prince'
              },
              {
                  text:'即将上映',
                  to:'CinemaMore/fox'
              },
              {
                  text:'虚构类',
                  to:'BookMore/BookFiction'
              },
              {
                  text:'虚构类',
                  to:'BookMore/BookNonfiction'
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
    margin: 20px 0;
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
