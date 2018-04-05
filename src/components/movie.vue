// 电影页面
<template>
    <div class="movie">
         <div class="content">
             <div>
               <Theater></Theater>
               <Latest></Latest>
               <ComingSoon></ComingSoon>
            </div>
        </div>        
    </div>        
</template>
<script>
import ComingSoon from './Movie/ComingSoon.vue'
import Theater from './Movie/Theater.vue'
import Latest from './Movie/Latest.vue'

export default {
  components:{
    Theater,ComingSoon,Latest
  }
}
</script>

