<template>
  <div class="group">
    <div class="group2">
      <p class="find">428896个有趣的人</p>
      <p class="her">立即选择加入吧！</p>
    </div>
      <section v-for="(items,i) in array" :key="i">
        <h6>{{title[i]}}</h6>
        <ul>
          <li class="ov" v-for="(item,index) in items" :key="index">
            <a href="">
              <img v-lazy="item.avatar" alt="">
              <div class="detail">
                <h4>{{item.title}}</h4>
                <p>{{item.container}}</p>
              </div>
              <div class="AddBtn">{{AddBtn}}</div>
            </a>
          </li>
        </ul>
      </section>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
      return{
        AddBtn:"加入",
        title:{
          news:'新组速报',
          hots:'热门小组',
          videos:'影视小组',
          books:'读书小组',
          musics:'音乐小组',
          citys:'同城小组',
          schools:'高校小组',
          works:'职场小组'
        },
        array:{}
      }
  },
    created(){
        const _this = this; 
          axios.get('http://localhost:5566/static/group.json').then(res =>{
            _this.array= res.data;
          })
      }
}
</script>

<style lang="less" scoped>
  .group{
    .group2{
      padding: 14px 0 10px 0;
      background-image: url(https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg);
      background-size: 100%;
      p{
        text-align: center;
        &.find{
          color: #111;
          font-size: 20px;
          font-weight: bold;
        }
        &.her{
          color: #aaa;
          margin-top: 6px;
          font-size: 15px;
        }
      }
    }
    section{
      margin:30px 0; 
      h6{
        text-align: center;
        color: #333;
        font-size: 16px;
        margin: 20px;
        font-weight: normal;
        &::before{
          content: '';
          width: 31%;
          height: 1px;
          margin-right: 30px;
          display: inline-block;
          vertical-align: middle;
          background: #c3c3c3;
        }
        &::after{
          content: '';
          width: 31%;
          margin-left: 30px;
          height: 1px;
          display: inline-block;
          vertical-align: middle;
          background: #ccc;
        }
      }
      ul{
        li{
        margin: 30px 20px;
          a{
            color: #494949;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 50px;
              width: 15%;
              height: 15%;
            }
            .detail{
              width: 64%;
              display: inline-block;
              margin: 0 10px;
              h4{
                font-size: 17px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              p{
                line-height: 14px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                margin-top: 4px;
                -webkit-box-orient: vertical;
                color: #ccc;
                font-size: 12px
              }
            }
            .AddBtn{
              display: inline-block;
              // width: 20%;
              border-radius: 4px;
              border: solid 1px #f73e4a;
              font-size: 14px;
              line-height: 1.2;
              color: #f73e4a;
              padding: 5px 10px;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
