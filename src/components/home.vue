<template>
  <div class="Home">
    <SearchInput @showTalion="open"></SearchInput>
    <Talion v-show="talion" @closeTalion="close"></Talion>
     <div class="content">
       <HomeSubnav></HomeSubnav>
       <HomeList></HomeList>
     </div>
  </div>
</template>
 
<script>
import HomeSubnav from './Home/HomeSubnav.vue'
import HomeList from './Home/HomeList.vue'
import SearchInput from './Search/SearchInput.vue'
import Talion from './Search/Talion.vue'

export default {
  components:{
    HomeSubnav,HomeList,SearchInput,Talion
  },
  data(){
    return{
      talion: ''
    }
  },
  methods:{
    open(){
      this.talion = 'open'
    },
    close(){
      this.talion = ''
    }
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

