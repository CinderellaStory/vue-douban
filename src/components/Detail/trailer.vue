<template>
  <div class="trailer">
      <header>
          <h2>{{subjects.title}}</h2>
          <!-- <img src="" alt="">
          <a href=""></a> -->
          <video :src="subjects.trailers[0].resource_url" height="240" controls="controls" autoplay="autoplay">
          </video>
      </header>
  </div>
</template>

<script>
import axios  from  'axios'

export default {
  data(){
    return{
       subjects:[]
   }
  },
  created(){
    const _this = this;
    const id = this.$route.params.id;
    // this.$jsonp('/api/movie/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd')
    //     .then(res =>{
    //         _this.subjects = res;
    //     })
            console.log(id)
  }
}
</script>

<style lang="less" scoped>
  video{
    width: 100%;
  }
</style>
