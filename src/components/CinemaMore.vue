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
    </div>
</template>
<script>
import NavBar from './NavBar.vue'

export default {
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
}
.router-link-exact-active{
    border-bottom: 2px solid #42bd56;
    color: #42bd56;
    font-weight: bold
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