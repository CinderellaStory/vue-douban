// 正在热映
<template>
  <div class="MovieList">
        <div>
            <img v-lazy="subjects.images.medium" alt="" :key="index">
            <div class="MovieText">
                <div class="MovieTitle">{{subjects.title}}</div>
                <div class="director">
                    <p>导演：{{subjects.directors[0].name}}</p>
                    <!-- <p>演员：<span v-for="(i,o) in items.casts" :key="o">{{items.casts[o].name}}/</span></p> -->
                </div>                
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data(){
      return{
          subjects:[]
         }
      },
      created(){
        const _this = this;
        this.axios({method:'get',url: '/api/movie/in_theaters'})
        .then(response =>{
            _this.data =response.data.subjects;
            console.log(response.data.subjects);
        })
  }
}
</script>

<style scoped lang="less">

</style>