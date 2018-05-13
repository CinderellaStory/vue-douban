<template>
  <div class="reviews">
      <ul>
          <li v-for="(comment,index) in items.reviews" :key="index">
               <div class="desc">
                    <a href="">
                        <img v-lazy="comment.author.avatar" alt="">
                    </a>
                    <div class="user-info">
                        <strong>{{comment.author.name}}</strong>
                        <p>{{comment.created_at}}</p>
                    </div>
                </div>
                <p>
                    {{comment.content}}
                </p>
                <div class="btn-info ov">
                    <div class="praise fl">
                        <span class="">{{comment.text}}</span>
                    </div>
                    <div class="more fr"></div>
                </div>
          </li>
          <li class="CommentAll">
              <a href="">{{all}}</a>
          </li>
      </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
      return{
          all:'查看所有短评',
          items:[]
      }
  },
 mounted () {
    this.getContent()
},
methods: {
    getContent(){
    const _this = this;
        axios.get('api/movie/subject/24773958/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=20&client=something&udid=dddddddddddddddddddddd').then(res =>{
        _this.items = res.data;
        })
    }
    }
}
</script>

<style lang="less" scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
.ov{
    overflow: hidden;
}
    .reviews{
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
