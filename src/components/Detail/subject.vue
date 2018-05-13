<template>
  <div class="MovieList">
      <div class="MovieDetail">
        <div class="DetailImg">
            <img v-lazy="subject.images.large" alt="">
        </div>
        <section class="Detail">
            <h2>{{subject.title}}</h2>
            <div class="DetailInfo">
            <p>
                <rating :rating="subject.rating"></rating>
                <span>{{subject.ratings_count}}人评价</span>
            </p>
            <p>
                {{subject.subjectMeta}}
            </p>
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
                <router-link v-for="(item,index) in subject.directors" :to="item.id" :key="index">
                    <img v-lazy="item.avatars.small" alt="">
                    <p class="subject-name">{{item.name}}</p>
                    <p class="subject-role">导演</p>
                </router-link>
                 <router-link v-for="(item,index) in subject.casts" :to="item.id" :key="index">
                    <img v-lazy="item.avatars.small" alt="">
                    <p class="subject-name">{{item.name}}</p>
                    <p class="subject-role">演员</p>
                </router-link>
            </div>
         </div>
        </section>
        <section>
             <h4>查看更多豆瓣高分电影电视剧</h4>
             <div class="tags">
                <ul>
                    <li v-for="(tag,index) in subject.tags" :key="index">
                        <a href="">{{tag}}</a>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <h4>狂暴巨兽的预告片和图片</h4>
            <div class="pics">
                <ul>
                    <li class="video" v-for="(bg,b) in subject.trailers" :key="b" v-bind:style="{'background-image':'url('+bg.medium+')'}">
                        <router-link :to="{name:'trailer',params:{id:bg.id}}">
                            <span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt=""></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <h4>{{subject.title}}的短评</h4>
             <div class="comments">
                <ul>
                    <li v-for="(comment,index) in subject.popular_reviews" :key="index">
                        <div class="desc">
                            <a href="">
                                <img v-lazy="comment.author.avatar" alt="">
                            </a>
                            <div class="user-info">
                                <strong>{{comment.author.name}}</strong>
                                <p>{{comment.summary}}</p>
                            </div>
                        </div>
                        <p>
                            {{comment.detail}}
                        </p>
                        <div class="btn-info ov">
                            <div class="praise fl">
                                <span class="">{{subject.comments_count}}</span>
                            </div>
                            <div class="more fr"></div>
                        </div>
                    </li>
                    <li class="CommentAll">
                        <a href="">{{all}}</a>
                    </li>
                </ul>
            </div>
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
            <Topic :message="parentMsg"></Topic>
        </section>
      </div>
    </div>
</template>
<script>
import marking from './marking.vue'
import Rating from './Rating.vue'
import sort from './sort.vue'
import interests from './interests.vue'
import Topic from './Topic.vue'
import axios  from  'axios'

export default {
  data(){
      return{
          subject:[],
          classify: '',
          parentMsg:'hfkah'
         }
      },
  mounted(){
      this.subjectMeta();
  },
  components:{
      marking,sort,interests,Topic,Rating
    //   comments,
  },
  methods:{
      subjectMeta(){
           const _this = this;
            const id = this.$route.params.id;
            axios.get('/api/movie/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd')
            .then(res =>{
                _this.subject = res.data;
                // console.log(res.data.trailers)
                _this.subject.subjectMeta = 
                json.durations + ' / ' +
                json.genres.join(' / ') + ' / ' +
                json.directors.map(item => item.name).join('(导演) / ') + '(导演) / ' +
                json.casts.map(item => item.name).join(' / ') + ' / ' +
                json.pubdates[2] + ' 上映 ' 
            })
      }
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
   background: #fff; padding: 20px;
}
.MovieList{
    width: 100%;
    .DetailImg{
        background: rgb(240, 165, 165);
        height: 270px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
        height: 180px;
        }
    }
    .Detail{
        .DetailInfo{
            p{
                color: #494949;
                font-size: 14px;
                margin-bottom: 10px;
                span{
                    color:#aaa;
                    font-size: 14px;
                }
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
            margin-right: 16px;
            text-align: center;
        img{
            width: 90px;
            height: 127px;
        }
        .subject-name{
            font-size: 14px;
            color: #494949;
            margin-top: 5px;
        }
        .subject-role{
            font-size: 14px;
            color: #aaa;
            margin-top: 5px;
         }
        }
        }
    }
    .pics{
        ul{
            overflow: scroll;
            white-space: nowrap;
            li{
                margin-right: 6px;
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
.tags{
    li{
        background: #f5f5f5;
        border:1px solid #f73e4a;
        border-radius: 28px;    
        padding: 2px 14px;
        margin: 14px 0 0 18px;
        display: inline-block;
        a{
        color: #f73e4a;
        font-size: 12px;
        }
    }
}
// 短评
 .comments{
        li{
            padding: 15px 18px 15px 0;
            .desc{
                a{
                    img{
                        width: 36px;
                        border-radius: 50%;
                        float: left;
                        margin-right: 10px;
                    }
                }
                .user-info{
                    p{
                    margin-top: 6px;
                    font-size: 12px;
                    color: #aaa;
                    }
                }
            }
            p{
                padding: 0 0 0 40px;
                line-height: 22px;
                color: #494949;
                font-size: 15px;
            }
            .btn-info{
                margin: 10px 0 0 40px;
                .praise::before{
                    content: '';
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
                }
                span{
                    display: inline-block;
                    vertical-align: middle;
                    color: #ccc;
                    font-size: 14px;
                    margin-left: 4px;
                }
                .more::before{
                content: '';
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg)
                }
            }
            &.CommentAll{
                text-align: center;
                a{
                color: #42bd56;
                font-size: 15px;
                }
            }
        }

    }
</style>
