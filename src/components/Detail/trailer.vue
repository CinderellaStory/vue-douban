// 自动播放
<template>
  <div class="trailer">
      <header>
          <h2>{{subjects.title}}</h2>
      </header>
      <section>
        <h3>{{subjects.trailers[0].title}}</h3>
        <video :src="subjects.trailers[0].resource_url" height="210" controls="controls">
        </video>
      </section>
      <section>
        <div class="trailerList">
          <h4>预告片({{subjects.trailers.length}})</h4>
          <ul>
            <li v-for="(trailer,t) in subjects.trailers" :key="t" v-bind:style="{'background-image':'url('+trailer.medium+')'}">
              <a href="">
                  <span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt=""></span>
              </a>
              <p>{{trailer.title}}</p>
            </li>
          </ul>
        </div>
      </section>
  </div>
</template>

<script>
import axios  from  'axios'

export default {
  data(){
    return{
       subjects:[]
   }
  },
  created(){
    const _this = this;
    axios.get('/api/movie/subject/24773958?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd')
        .then(res =>{
            _this.subjects = res.data;
            // console.log(res.data.trailers)
        })
  }
}
</script>

<style lang="less" scoped>
  video{
    width: 100%;
  }
  .trailer{
    section{
      .trailerList{
        padding: 18px;
        h4{
          font-size: 16px;
          font-weight: normal;
          color: #aaa;
        }
        ul{
            margin-top: 14px;
            overflow: scroll;
            white-space: nowrap;
            li{
                margin-right: 6px;
                height: 120px;
                display: inline-block;
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
                p{
                    padding-right: 20px;
                    color: #494949;
                    font-size: 14px;
                    line-height: 22px;
                }
        }
        }
      }
      }
    }
</style>
