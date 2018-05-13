<template> 
  <div class="MovieList">
        <div class="tabs">
            <router-link to="/CinemaMore/prince">正在热映</router-link>
            <router-link to="/CinemaMore/fox">即将上映</router-link>
            <router-link to="/CinemaMore/rose">免费观看2</router-link>
        </div>  
        <div class="MoreList">
            <router-view></router-view>
        </div>
    </div>
</template>
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
   top: 0;
    position: fixed;
    width: 100%;
     display: flex;
    background: #fff;
a{
    flex: 1;
    color: #999;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}
.router-link-exact-active{
    border-bottom: 2px solid #f73e4a;
    color: #f73e4a;
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
    margin-top: 64px;
    a{
        display: flex;
    padding: 15px 20px;
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