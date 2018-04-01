<template>
    <div class="books">
         <NavBar></NavBar>
         <div class="content">
          <h3>{{inTheaters}}</h3>
            <div class="MovieList">
                <router-link v-for="(items,index) in books" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
            <h3>{{inTheaters}}</h3>
            <div class="MovieList">
                <router-link v-for="(items,index) in books" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
            <h3>{{inTheaters}}</h3>
            <div class="MovieList">
                <router-link v-for="(items,index) in books" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
         </div>
    </div>
</template>
<script>
import NavBar from './NavBar.vue'

export default {
   data(){
        return{
            inTheaters:'最受关注图书｜虚构类',
            comingSoon:'即将上映',
            NewMovie:'新片速递',
            books:[]
        }
    },
    created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8',null)
        .then(json =>{
            _this.books =json.books;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
    width: 100px;
    height: 142px;
    display: inline-block
}
.MovieList{
    display: flex;
    overflow-x: auto;
    padding: 15px 0 20px 0;
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
</style>