<template>
  <div class="my">
       <div class="MyHeader">
         <div class="container">
              <img src="https://img.mukewang.com/5333a1a90001c8d802000200-100-100.jpg" alt="">
              <div class="NameDetail">
                <div class="BasicInfo">
                  <p>浅浅时光</p>
                  <p>
                    <span>ID:748648464</span>
                    <!-- <a href="">个人主页&gt</a> -->
                    <router-link :to="{name:'HomePage'}">个人主页 &gt;</router-link>
                  </p>
                </div>
                <div class="RelationShip">
                  <router-link :to="{name:'fllower'}">关注 {{fllowed}}</router-link>
                  <router-link :to="{name:'fllowed'}">被关注 {{fllower}}</router-link>
                </div>
              </div>
            </div>
        </div>
        <div class="List">
            <ul>
              <router-link v-for="items in list" :to="items.to" tag="li">
                <img :src="items.icon" alt="" class="icon">
                <span>{{items.text}}</span>
                <span style="float:right;color:#ccc">&gt;</span>
              </router-link>
            </ul>
        </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      fllowed:'111111',
      fllower:'11',
      list:[
          {
            to:'/Mine/MyLikes',
            name:'MyLikes',
            icon:'https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png',
            text:'喜欢'
          },
          {
            to:'/Mine/MyNotes',
            icon:'https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png',
            text:'日记'
          },
          {
            to:'/Mine/MyPhotos',
            icon:'https://img3.doubanio.com/f/talion/1a4604b83e0d7e091c610fe662c9a50518188193/pics/card/album.png',
            text:'相册'
          },
          {
            to:'/Mine/MyStatus',
            icon:'https://img3.doubanio.com/f/talion/a827877341968d09f309b70646f409d9fe39a2f9/pics/card/broadcast.png',
            text:'广播'
          },
          {
            to:'/Mine/MyMovies',
            icon:'https://img3.doubanio.com/f/talion/7d8c1ccedee37780b29e790e311da66ac863cd7b/pics/card/movie.png',
            text:'电视'
          },
          {
            to:'/Mine/MyBooks',
            icon:'https://img3.doubanio.com/f/talion/d0ffbee4f5ce5b59594dc53fad59c93cb3e8f646/pics/card/read.png',
            text:'读书'
          },
          {
            to:'/Mine/MyMusics',
            icon:'https://img3.doubanio.com/f/talion/d91d24876aaf5a441a4677a893a8d86068fbf5b1/pics/card/music.png',
            text:'音乐'
          },
          {
            to:'/Mine/MyNotes',
            icon:'https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png',
            text:'日记'
          } 
      ]
    }
  },
  components:{
  }
}
</script>

<style scoped lang="less">
// @fr:float:left

.MyHeader{
  height: 124px;
  background: #42bd56;
  .container{
   display: flex;
   color: #fff;
   justify-content: center;
   align-items: center;
   height:100%;
   padding: 0 20px;
  img{
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: 2px solid #fff
  }
  .NameDetail{
    flex: 1;
    margin-left: 30px;
    a{
      color: #fff;
    }
    .BasicInfo{
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      p{
        span{
        font-size: 12px;
        }
        a{
        font-size: 12px;
        float: right;
        }
      }
    }
    .RelationShip{
      margin-top: 10px;
    }
    a{
      font-size: 12px;
      margin-right: 10px;
    }
  }
  }
}
.List{
  background: #fff;
ul{
  li{
    border-bottom: 1px solid #ccc;
    padding:0 20px;
    height: 46px;
    line-height: 46px;
  .icon{
    height: 26px;
    width: 26px;
    vertical-align:middle
  }
}
  }
  }
</style>

