<template>
  <div class="Talion">
      <div class="talion-nav">
          <span @click="closeTalion">关闭</span>
         <form class="search" onsubmit="return false">
             <input type="text">
         </form>
      </div>
      <div class="talion-list">
          <ul>
              <router-link v-for="(item,index) in items" :key="index" tag="li" :to="item.to">
                  <p class="name" :class="item.class">{{item.name}}</p>
                  <p class="genre">{{item.genre}}</p>
              </router-link>
          </ul>
      </div>
      <SubNav></SubNav>
  </div>
</template>

<script>
import SubNav from './SubNav'
export default {
  data(){
    return{
        items:[
            {
                name:'电影',
                genre:'院影热映',
                class:'movies',
                to:'../Distraction'
            },
            {
                name:'电视',
                genre:'正在热播',
                class:'tv',
                to:' '
            },
            {
                name:'图书',
                genre:'畅销排行',
                class:'books',
                to:'../Distraction/books'
            },
            {
                name:'同城',
                genre:'周末活动',
                class:'citys',
                to:'../Distraction/City'
            },
            {
                name:'小组',
                genre:'志趣相投',
                class:'group',
                to:'../group'
            },
            {
                name:'音乐',
                genre:'新碟榜',
                class:'musics',
                to:'../Distraction/music'
            },
            {
                name:'阅读',
                genre:'电子书',
                class:'read',
                to:' '
            },
            {
                name:'游戏',
                genre:'虚拟世界',
                class:'games',
                to:' '
            },
            {
                name:'应用',
                genre:'玩手机',
                class:'app',
                to:' '
            },
            {
                name:'东西',
                genre:'心爱之物',
                class:'thing',
                to:' '
            },
            {
                name:'FM',
                genre:'红心歌单',
                class:'fm',
                to:' '
            },
            {
                name:'市集',
                genre:'购买原创',
                class:'market',
                to:' '
            }
        ]
   }
  },
  methods:{
      closeTalion(){
          this.$emit('closeTalion')
      }
  },
  components:{
      SubNav
  }
}
</script>

<style lang="less" scoped>
.movies{
    color: rgb(35, 132, 232);
}
.tv{
    color: rgb(122, 106, 219);
}
.books{
color: rgb(159, 120, 96);
}
.citys{
    color: rgb(230, 70, 126);
}
.group{
    color: rgb(42, 184, 204);
}
.musics{
    color: rgb(244, 143, 46);
}
.read{
    color: rgb(159, 120, 96);
}
.games{
    color: rgb(87, 116, 197);
}
.app{
    color: rgb(89, 108, 221);
}
.thing{
    color: rgb(225, 100, 77);
}
.fm{
    color: rgb(64, 207, 169);
}
.market{
    color: rgb(66, 189, 86);
}
.Talion{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #fff;
    .talion-nav{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f3f3f3;
        width: 100%;
       padding:0 20px 0 20px;
        span{
            display: inline-block;
            padding-right:10px;
            color: #f73e4a;
            font-size: 14px;
            vertical-align: middle;
        }
        form{
           width: 68%;
             display: inline-block;
            input{
                height: 36px;
                padding-left: 15px;
                border: 0;
                outline: none;
                background: #f3f3f3;
                width: 100%;
            }
        }
    }
    .talion-list{
        padding-top: 30px;
        ul{
            li{
                width: 33.3%;
                display: inline-block;
                text-align: center;
                margin-bottom: 30px;
                .name{
                    font-size: 24px;
                }
                .genre{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
}
</style>
