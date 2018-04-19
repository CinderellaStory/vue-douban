<template>
  <div class="broadcast">
    <div class="group">
      <p class="find">发现有趣的人</p>
      <p class="her">关注他们，发现更大的世界</p>
    </div>
    <ul>
      <li v-for="(item,index) in items" :key="index">
        <a href="">
          <div class="Info">
            <div class="avatar">
              <img v-lazy="item.avatar">
            </div>
            <div class="detail">
              <h4>{{item.title}}</h4>
              <p>{{item.fllow}}人关注</p>
            </div>
            <div class="FloowBtn">{{item.FloowBtn}}</div>
          </div>
          <div class="container">
            <p>{{item.article}}</p>
            <div class="photos">
              <img v-lazy="item.photos">
            </div>
            <div class="others">
              <span class="praise">{{item.number}}</span>
              <span class="review">{{item.review}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
      return{
        items:[]
      }
  },
  mounted(){
    this.getContent()
  },
  methods:{
    getContent(){
      const _this = this;
        axios.get('http://localhost:5566/static/broadcast.json').then(res =>{
          _this.items= res.data;
          console.log(res);
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .broadcast{
    background: #f6f6f6;
    .group{
      padding: 18px 0 10px 0;
      background-image: url(https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg);
      background-size: 100%;
      p{
        text-align: center;
        &.find{
          color: #111;
          font-size: 18px;
        }
        &.her{
          color: #c3c3c3;
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    ul{
      li{
        width: 80%;
        border: 1px solid #ccc;
        margin: 20px auto;
        border-radius: 5px;
        padding: 20px 20px 10px 16px;
        box-shadow:2px 2px 5px #ccc;
        background: #fff;
        a{
          color: #494949;
          .Info{
            .avatar{
              display: inline-block;
              img{
                width: 50px;
                height: 50px;
                vertical-align: middle;
                border-radius: 50%;
              }
            }
            .detail{
              display: inline-block;
                vertical-align: middle;
                width: 50%;
              margin-left: 10px;
              h4{
                  font-size: 18px;
              }
              p{
                  margin-top: 4px;
                  font-size: 12px;
                  color: #aaa;
              }
            }
            .FloowBtn{
              display: inline-block;
              color: #fff;
              background: #42bd56;
              padding: 4px 18px;
              font-size: 14px;
              border-radius: 3px;
            }
          }
          .container{
            margin: 10px 0 0 60px;
            p{
              font-size: 13px;
              line-height: 22px;
            }
            .photos{
              img{
                margin-top: 10px;
                height: 120px;
                width: 100%;
              }
            }
            .others{
            color: #ccc;
            margin-top: 10px;
            font-size: 14px;
            .praise::before{
              content: '';
              width: 20px;
              height: 20px;
              display: inline-block;
              vertical-align: middle;
              background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
            }
            .review{
              margin-left: 20px;
              &::before{
              content: '';
              width: 20px;
              height: 20px;
              display: inline-block;
              vertical-align: middle;
              background-image:url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg) 
            } 
            }
          }
          }
        }
      }
    }
  }
</style>
