<template>
    <div class="movie">
        <NavBar></NavBar>
         <div class="content">
             <div class="CategoryTitle">
                <div class="CinemaHot">{{inTheaters}}</div>
                <!-- <router-link :to="{name: '/movie/Default'}">默认内容</router-link> -->
                <!-- <router-link :to="{name:'CinemaMore'}">更多</router-link> -->
                <router-link to="CinemaMore/rose">更多</router-link>
                <button @click="MoreBtn">更多</button>
                <!-- <a href=""></a> -->
             </div>
            <div class="MovieList">
                <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
            <!-- <h4>{{comingSoon}}</h4>
            <div class="MovieList">
                <router-link v-for="items in list" :to="items.to">
                        <img :src="items.MovieImg" alt="">
                    <div class="MovieText">{{items.text}}</div>
                </router-link>
            </div>
            <h4>{{NewMovie}}</h4>
            <div class="MovieList">
                <router-link v-for="items in list" :to="items.to">
                        <img :src="items.MovieImg" alt="">
                    <div class="MovieText">{{items.text}}</div>
                </router-link>
            </div> -->
        </div>        
    </div>        
</template>
<script>
import NavBar from './NavBar.vue'

export default {
    data(){
        return{
            inTheaters:'影院热线',
            comingSoon:'即将上映',
            NewMovie:'新片速递',
            subjects:[]
        }
    },
    methods:{
        MoreBtn:function(){
        this.$router.push({ path: 'CinemaMore' })
        }
    },
    created(){
        const _this = this;
        this.axios({method:'get',url: '/api/movie/in_theaters?&count=8'})
        .then(response =>{
            _this.subjects =response.data.subjects
          console.log(response.data.subjects);
        })
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
</style>
