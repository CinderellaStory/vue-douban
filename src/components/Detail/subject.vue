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
            <p>原名：{{subject.original_title}}</p>
            <p>{{subject.subjectMeta}}</p>
            <p>上映时间：{{subject.pubdate}}</p>
            <p>片长：{{subject.durations[0]}}</p>
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
             <tags :list="tags"></tags>
        </section>
        <section>
            <h4>{{subject.title}}的预告片和图片</h4>
            <trailers :list="trailers"></trailers>
        </section>
        <section>
            <h4>{{subject.title}}的短评</h4>
            <popularreviews :list="popular_reviews"></popularreviews>
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
            <popularcomments :list="popular_comments"></popularcomments>
        </section>
      </div>
    </div>
</template>
<script>
import marking from './marking.vue'
import Rating from './Rating.vue'
import sort from './sort.vue'
import tags from './tags.vue'
import trailers from './trailers.vue'
import interests from './interests.vue'
import popularcomments from './PopularComments.vue'
import popularreviews from './PopularReviews.vue'
import axios  from  'axios'

export default {
  name:'subject',
  data(){
      return{
          subject:[],
          classify: '',
          popular_comments:[],
          tags:[],
          trailers:[],
          popular_reviews:[]
         }
      },
  mounted(){
      this.subjectMeta();
  },
  methods:{
      subjectMeta(){
          const _this = this;
            const id = this.$route.params.id;
            // axios.get('/api/movie/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd')
            // .then(res =>{
            //     res = res.data
            //     _this.subject = res
            //     _this.popular_reviews = res.popular_reviews
            //     _this.subject.subjectMeta = 
            //     res.durations + ' / ' +
            //     res.genres.join(' / ') + ' / ' +
            //     res.directors.map(item => item.name).join('(导演) / ') + '(导演) / ' +
            //     res.casts.map(item => item.name).join(' / ') + ' / ' +
            //     res.pubdates[2] + ' 上映 ' 
            // })
            axios.get('/api/movie/subject/'+id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd')
            .then(this.getInfo)
            },
            getInfo (res){
                const _this = this
                   _this.subject = res.data
                    _this.subject.subjectMeta = 
                    res.data.year+'/'+
                    res.data.genres.join(' / ') + ' / ' +
                    res.data.directors.map(item => item.name).join('(导演) / ') + '(导演) / ' +
                    res.data.casts.map(item => item.name).join(' / ')
                   _this.popular_comments = res.data.popular_comments
                   _this.tags = res.data.tags
                   _this.trailers = res.data.trailers
                   _this.popular_reviews = res.data.popular_reviews
                   console.log(res.data.popular_reviews)
              }
  },
  components:{
      marking,sort,interests,popularcomments,Rating,tags,trailers,popularreviews
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
                color: #717171;
                font-size: 12px;
                line-height: 20px;
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
}
</style>
