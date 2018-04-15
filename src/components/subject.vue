<template>
  <div class="MovieList">
      <div class="MovieDetail">
          <h2>{{subject.title}}</h2>
          <section class="Detail ov">
              <div class="fl DetailInfo">
                <p>
                    {{subject.year}} /
                    {{subject.genres[0]}} /
                    {{subject.genres[1]}} /
                    {{subject.genres[2]}} /
                    {{subject.casts[0].name}} /
                    {{subject.casts[1].name}} /
                    {{subject.casts[2].name}} /
                    {{subject.casts[3].name}} /
                    {{subject.directors[0].name}} /
                    {{subject.countries[0]}} 
                </p>
              </div>
              <div class="fr DetailImg">
                  <!-- <img v-lazy="subject.images.large" alt=""> -->
              </div>
          </section> 
          <section>
              <marking></marking>
          </section>
        <section>
          <div class="subject-intro">
              <h4>{{subject.title}}的简介</h4>
              <p>{{subject.summary}}</p>
          </div>
        </section>
        <section>
         <div class="subject-pics">
             <h4>影人</h4>
            <div class="subject-item">
                 <router-link v-for="(item,index) in items" :to="item.to" :key="index">
                 <img v-lazy="item.images" alt="">
                 <p class="subject-name">{{item.title}}</p>
                 <p class="subject-role">{{item.role}}</p>
             </router-link>
            </div>
         </div>
        </section>
        <section>
             <h4>查看更多豆瓣高分电影电视剧</h4>
             <tags></tags>
        </section>
        <section>
            <h4>狂暴巨兽的预告片和图片</h4>
            <!-- <pics></pics> -->
            <div class="pics">
                <ul>
                    <li class="video" style="background-image:url(https://img1.doubanio.com/img/trailer/medium/2519044368.jpg?152351330)"> 
                        <a href="">
                            <span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt=""></span>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="">
                            <img src="https://img3.doubanio.com/view/photo/s/public/p2518665184.webp" alt="">
                        </a>
                    </li>
                    <li class="pic">
                        <a href="">
                            <img src="https://img1.doubanio.com/view/photo/s/public/p2518910437.webp" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </section>  
        <section>
            <h4>{{subject.title}}的短评</h4>
            <comments></comments>
        </section>  
        <section>
            <h4>了解更多电影信息</h4>
            <sort></sort>
        </section>  
        <section>
            <h4>{{subject.title}}的豆列</h4>
            <interests></interests>
        </section>  
        <section>
            <h4>豆瓣正在热议</h4>
            <Topic></Topic>
        </section>  
      </div>
    </div>
</template>
<script>
import marking from './marking.vue'
import tags from './tags.vue'
import comments from './comments.vue'
import sort from './sort.vue'
import interests from './interests.vue'
import Topic from './Topic.vue'

export default {
  data(){
      return{
          subject:[],
          items:[
              {
                  images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1432840050.06.jpg',
                  title:'布拉德·佩顿',
                  to:'',
                  role:'导演'
              },
              {
                  images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg',
                  title:'道恩·强森',
                  to:'',
                  role:'演员'
              },
              {
                  images:'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486878030.07.jpg',
                  title:'娜奥米·哈里斯',
                  to:'',
                  role:'演员'
              },
              {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6531.jpg',
                title:'杰弗里·迪恩·摩根',
                to:'',
                role:'演员'
              },
               {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58173.jpg',
                title:'玛琳·阿克曼',
                to:'',
                role:'演员'
              },
               {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50135.jpg',
                title:'杰克·莱西',
                to:'',
                role:'演员'
              },
              {
                images:'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57068.jpg',
                title:'乔·曼根尼罗',
                to:'',
                role:'演员'
              },
              {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4715.jpg',
                title:'玛丽·谢尔顿',
                to:'',
                role:'演员'
              },
              {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51015.jpg',
                title:'P·J·伯恩',
                to:'',
                role:'演员'
              },
              {
                images:'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517395263.5.jpg',
                title:'德米垂斯·格罗斯',
                to:'',
                role:'演员'
              }
          ]
         }
      },
      created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/movie/subject/26430636')
        .then(json =>{
            _this.subject = json
            // console.log(json.summary)
        })
  },
  components:{
      marking,tags,comments,sort,interests,Topic
  }
}
</script>

<style scoped lang="less">
h4{
    color: #aaa;
    margin: 0 0 15px;
    font-size: 16px;
    width: 100%;
    font-weight: normal;
}
.fl{float: left}
.fr{float: right}
.ov{overflow: hidden}
section{
    margin-bottom: 30px;
    overflow: hidden;
}
.MovieList{
    margin: 20px;
    .Detail{
        width: 100%;
        margin-top: 10px;
        .DetailInfo{
            width: 65%;
            p{
                color: #494949;
                font-size: 14px;
            }
        }
        .DetailImg{
            width: 30%;
            img{
                max-width: 100px;
            }
        }
    }
    .subject-intro{
        p{
            font-size: 15px;
            color: #494949;
            // overflow : hidden;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 3;
            // -webkit-box-orient: vertical;
        }
    }
    .subject-pics{
        .subject-item{
        display: flex;
        overflow-x: auto;
        a{
            flex: 1;
            margin-right: 10px;
            text-align: center;
        img{
            width: 75px;
        }
        .subject-name{
            font-size: 14px;
            color: #494949;
            margin: 10px 0;
        }
        .subject-role{
            font-size: 14px;
            color: #aaa;
        }
        }
        }
    }
    .pics{
        ul{
            overflow: scroll;
            white-space: nowrap;
            li{
                height: 120px;
                display: inline-block;
            &.video{
                background-size: 100%;
                width: 213.33333px;
                a{
                position: relative;
                    height: 100%;
                    display: block;
                span{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    img{
                    width: 42px;
                    height: 42px;
                    margin: -21px 0 0 -21px;
                    }
                }
                }
            }
            &.pic{
                img{
                        height: 100%;
                }
            }
        }
        }
    }
}
</style>