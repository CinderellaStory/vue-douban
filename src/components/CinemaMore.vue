<template>
  <div class="MovieList">
        <NavBar></NavBar>
        <div class="tabs">
            <router-link to="/CinemaMore/prince">正在热映</router-link>
            <router-link to="/CinemaMore/rose">即将上映</router-link>
        </div>
        <div>
              <router-view></router-view>
        </div>
        <!-- <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index">
            <img v-lazy="items.images.medium" alt="">
                  <div class="MovieText">
                      <div class="MovieTitle">{{items.title}}</div>
                      <div class="director">导演：<span>{{items.directors.name}}</span></div>
                  </div>
                  <div class="DetailBtn">{{DetailBtn}}</div>
        </router-link> -->
    </div>
</template>
<script>
import NavBar from './NavBar.vue'

export default {
//   data(){
//       return{
//           DetailBtn:'详情',
//           subjects:[]
//     }
//       },
//       created(){
//         const _this = this;
//         this.axios({method:'get',url: '/api/movie/in_theaters'})
//         .then(response =>{
//             _this.subjects =response.data.subjects
//           console.log(response.data.subjects);
//         })
//   },
  components:{
    NavBar
  }
}
</script>

<style scoped lang="less">
a{
    text-decoration: none;
}
img{
    width: 80px;
    height: 120px;
    display: inline-block
}
.tabs {
    display: flex;
a{
    flex: 1;
    color: #999;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold
}
.router-link-exact-active{
    border-bottom: 2px solid #42bd56;
    color: #42bd56
}
}
.CategoryTitle{
    justify-content: space-between;
    align-items: center;
    // padding: 8px 10px;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
    
}

.MovieList{
    a{
        display: flex;
    padding: 15px 10px;
    border-bottom: 1px solid #e4e4e4;
        .DetailBtn{
        flex: 1;
            border: 1px solid #117ae6;
            border-radius: 4px;
        text-align: center;
            width: 60px;
         line-height: 30px;
         height: 30px;
        // display: block;
        // margin-right: 0.48rem;
        color: #117ae6;
        }
        .MovieText{
            flex: 1;
        word-break: keep-all;
        white-space: nowrap;
        margin-left: 10px;
        font-size: 14px;
        text-overflow: ellipsis;
        .MovieTitle{
        width: 200px;
        font-size: 17px;
        color: #333;
        }
        
        }
    }
}
</style>