// 新片速递
<template>
  <div class="ComingSoon">
       <div class="CategoryTitle">
            <div class="CinemaHot">{{top250}}</div>
            <router-link to="CinemaMore/fox">更多</router-link>
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
            top250:'新片速递',
            subjects:[]
            }
        },
        created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/movie/top250?&count=8')
        .then(json =>{
            _this.subjects =json.subjects
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
