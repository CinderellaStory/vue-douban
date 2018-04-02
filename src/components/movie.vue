<template>
    <div class="movie">
         <div class="content">
             <div>
               <Theater></Theater>
               <ComingSoon></ComingSoon>
            </div>
        </div>        
    </div>        
</template>
<script>
import ComingSoon from './ComingSoon.vue'
import Theater from './Theater.vue'

export default {
  components:{
    Theater,ComingSoon
  }
}
</script>

