//娱乐 Distraction
<template>
  <div class="Distraction">
    <div class="BMMheader">
      <ul>
        <router-link :class="item.class" v-for="(item,index) in NavData" :key="index" :to="item.to" tag="li">
                {{item.text}}
        </router-link>
       </ul>
    </div>
    <div class="DistractionContent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import books from './books'
import movie from './movie'
import music from './music'
import City from './City'

export default {
  data(){
      return{
        NavData:[
        {
          to:'/Distraction/',
          text:'电影'
        },
        {
          to:'/Distraction/music',
          text:'音乐'
        },
        {
          to:'/Distraction/books',
          text:'书籍'
        },
        {
          to:'/Distraction/City',
          text:'同城'
        }
        ]
      }
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
.router-link-exact-active{color: #000 !important; border-bottom: 1px solid #000}
  .BMMheader {
    height: 40px;
  ul{
    line-height: 40px;
     display: flex;
     position: fixed;
     left: 0;
     right: 0;
     top: 0;
     border-bottom: 1px solid #f3f3f3;
     background: #fff;
     li{ 
      text-decoration: none; 
      flex: 1;
      color: #999;
      font-size: 14px;
      text-align: center;
      }

      .homeText{
        color: #2384E8;
      }
      .booksText{
        color: #9F7860;
      }
      .movieText{
        color: #E4A813;
      }
      .myText{
            color: #2AB8CC;
      }
  }
  }
</style>
