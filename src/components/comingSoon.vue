// 电影页面
<template>
    <div class="movie">
         <div class="content">
             <div class="Theater" v-for="(items,index) in data" :key="index">
               <div class="CategoryTitle">
                      <div class="CinemaHot">{{title[index]}}</div>
                      <router-link to="CinemaMore/prince">更多</router-link>
                  </div>
                <div class="MovieList">
                    <router-link v-for="(list,i) in items" :key="i" :to="list.alt">
                        <img v-lazy="list.image" alt=""> 
                        <div class="MovieText">{{list.title}}</div>
                    </router-link>
                </div>
          </div>
        </div>        
    </div>        
</template>
<script>
 import axios  from  'axios'

   function Chinese(){
    return axios.get('/api/music/search?q=薛之谦');
  }
   function Occident(){
    return axios.get('/api/music/search?q=张杰');
  }
export default {
  data(){
    return{
      data:{
        Chinese:[],
        Occident:[]
      },
      title:{
        Chinese:'薛之谦',
        Occident:'张杰'
      }
    }
  },
  mounted(){  
    const _this = this;
    axios.all([Chinese(),Occident()])
    .then(axios.spread(function (Chinese,Occident){
      _this.data.Chinese = Chinese.data.musics;
      _this.data.Occident = Occident.data.musics;
    }))
  }
}
</script>

<style scpoed lang="less">
a{
    text-decoration: none;
}
img{
    width: 100px;
    height: 142px;
    display: inline-block
}
.Theater{
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