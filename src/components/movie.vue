<template>
    <div class="movie">
            <h3>{{inTheaters}}</h3>
            <div class="MovieList">
                <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
             <h3>{{inTheaters}}</h3>
            <div class="MovieList">
                <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index">
                    <img v-lazy="items.images.medium" alt="">
                    <div class="MovieText">{{items.title}}</div>
                </router-link>
            </div>
             <h3>{{inTheaters}}</h3>
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
        <NavBottom></NavBottom>
    </div>        
</template>
<script>
import NavBottom from './NavBottom.vue'

export default {
    data(){
        return{
            inTheaters:'影院热线',
            comingSoon:'即将上映',
            NewMovie:'新片速递',
            subjects:[]
        }
    },
    created(){
        const _this = this;
        this.axios({method:'get',url: '/api/movie/in_theaters'})
        .then(response =>{
            _this.subjects =response.data.subjects
        })
    },
  components:{
    NavBottom
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
