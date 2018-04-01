<template>
    <div class="movie">
        <NavBar></NavBar>
         <div class="content">
             <div>
               <Theater></Theater>
               <ComingSoon></ComingSoon>
            </div>
        </div>        
    </div>        
</template>
<script>
import NavBar from './NavBar.vue'
import ComingSoon from './ComingSoon.vue'
import Theater from './Theater.vue'

export default {
  components:{
    NavBar,Theater,ComingSoon
  }
}
</script>

