<template>
  <div class="ComingSoon">
       <div class="CategoryTitle">
            <div class="CinemaHot">{{ComingSoon}}</div>
            <router-link to="CinemaMore/rose">更多</router-link>
        </div>
        <div class="MovieList">
            <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index">
                <img v-lazy="items.images.medium" alt="">
                <div class="MovieText">{{items.title}}</div>
            </router-link>
        </div>
  </div>
</template>
<script>
export default {
        data(){
            return{
            ComingSoon:'即将上映',
            subjects:[]
            }
        },
        created(){
        const _this = this;
        this.axios({method:'get',url: '/api/movie/coming_soon?&count=8'})
        .then(response =>{
            _this.subjects =response.data.subjects
          console.log(response.data.subjects);
        })
    }
}
</script>

<style scoped lang="less">
.ComingSoon{
    .CategoryTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
}
.MovieList{
    display: flex;
    overflow-x: auto;
    padding: 15px 0 20px 10px;
    a{
        flex: 1;
        text-align: center;
        margin-right: 0.48rem;
        color: #111;
        width: 100px;
        .MovieText{
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        font-size: 14px;
        text-overflow: ellipsis;
        }
    }
}
}
</style>
