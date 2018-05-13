// 电影页面
<template>
    <div class="movie">
         <div class="content">
             <div class="list-item" v-for="(items,index) in data" :key="index">
               <div class="CategoryTitle">
                      <div class="CinemaHot">{{title[index]}}</div>
                      <router-link to="CinemaMore/prince">更多</router-link>
                  </div>
                <div class="MovieList">
                  <router-link v-for="(list,i) in items" :key="i" :to="{name:'subject',params:{id:list.id}}" tag="li">
                        <img v-lazy="list.images.large" alt="">
                        <div class="MovieText">{{list.title}}</div>
                    </router-link>
                </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios  from  'axios'

  function Theater(){
    return axios.get('/api/movie/coming_soon?&count=8');
  }
  function ComingSoon(){
    return axios.get('/api/movie/in_theaters?&count=8');
  }
  function Latest(){
    return axios.get('/api/movie/top250?&count=8');
  }
export default {
  data(){
    return{
      data:{
        theat:[],
        coming:[],
        latest:[]
      },
      title:{
        theat:'院影热线',
        coming:"正在上映",
        latest:'Top250'
      }
    }
  },
  mounted(){
    const _this = this;
    axios.all([Theater(),ComingSoon(),Latest()])
    .then(axios.spread(function (theat,coming,latest){
      _this.data.theat = theat.data.subjects;
      _this.data.coming = coming.data.subjects;
      _this.data.latest = latest.data.subjects;
    }))
  }
}
</script>

<style scpoed lang="less">
a{
    text-decoration: none;
}

.list-item{
  background: #fff;
  border-radius: 10px;
  padding-right: 14px;
  margin-bottom: 20px;
  .CategoryTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px 0;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #f73e4a;
    }
}
.MovieList{
    display: flex;
    overflow-x: auto;
    padding: 15px 0 14px 16px;
    li{
        flex: 1;
        text-align: center;
        margin-right: 10px;
        color: #111;
        width: 110px;
        img{
            width: 110px;
            height: 142px;
            display: inline-block;
            border-radius: 10px;
        }
        .MovieText{
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        font-size: 14px;
        margin-top: 6px;
        text-overflow: ellipsis;
        }
    }
}
}
</style>
