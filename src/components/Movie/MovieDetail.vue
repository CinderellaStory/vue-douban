// 电影详情页
<template>
  <div class="MovieList">
       <h1>{{subjects[0].title}}</h1>
    </div>
</template>
<script>
export default {
  data(){
      return{
          DetailBtn:'详情',
          subjects:[],
          title:''
         }
      },
      created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(json =>{
            _this.subjects =json.subjects;
            console.log(json.subjects)
        })
  }
}
</script>

<style scoped lang="less">

</style>