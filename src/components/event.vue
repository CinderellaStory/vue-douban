// 20:42 - 22:04  用时：1个小时22分钟
<template>
  <div class="Event">
      <section>
        <div class="Poster">
            <div class="PosterBg"></div>
            <img v-lazy="items.image" alt="">
        </div>
        <div class="EventInfo">
          <h2>{{items.title}}</h2>
          <p class="EventDetail">
            时间：{{items.begin_time}} ~ {{items.end_time}}
          </p>
          <p class="Address">地址：{{items.address}}</p>
          <p class="types">类型：<span>{{items.category_name}}-{{items.subcategory_name}}</span></p>
         <p>
           {{items.wisher_count}}人感兴趣<span>{{items.participant_count}}人参加</span>
         </p>
        </div>
        <div class="btn">
          <button>感兴趣</button>
          <button>要参加</button>
        </div>
      </section>
      <section>
        <div class="ActiveDeatil">
          <h1>活动详情：</h1>
          <p>{{items.content}}</p>
        </div>
      </section>
  </div>
</template>
<script>
import axios  from  'axios'

export default {
  data() {
    return {
      items:[]
    }
  },
  created(){
    const _this = this;
    axios.get('/api/event/30260491')
    .then(res=>{
      _this.items = res.data;
      console.log(res.data);
    })
  }
}
</script>

<style lang="less" scoped>
  .Event{
    section{
    h1{
      font-size: 16px;
      color: #494949;
      margin: 10px 0; 
      }
      .Poster{
        height: 200px;
        padding: 20px 0;
        overflow: hidden;
        position: relative;
        .PosterBg{
          background:url("https://img3.doubanio.com/pview/event_poster/raw/public/85285a3defdcedd.jpg") center center no-repeat;
          position: absolute;
          z-index: 0;
          left: -10px;
          top: -10px;
          right: -10px;
          bottom: -10px;
          background-size: 100%;
          filter: blur(3px);}
          img{
            height: 200px;
            position: relative;
            display: block;
            text-align: center;
            margin: 0 auto;
          }
      }
      .EventInfo{
        padding: 20px 20px 10px 20px;
        background: #fff;
        h2{
          font-size: 16px;
          color: #494949;
        }
        p{
          color: #9b9b9b;
          font-size: 13px;
          padding: 7px 0 0 0;
          &.types span{
            color: #42BD56;
          }
        }
      }
      .btn{
        display: flex;
        text-align: center;
        margin: 20px 10px;
        button{
          flex: 1;
          border: 1px solid #FCB42E;
          color: #FCB42E;
          background: #fff;
          display: inline-block;
          font-size: 13px;
          width: 100px;
          height: 40px;
          border-radius: 5px;
          margin:0 10px;
        }
      }
      .ActiveDeatil{
        margin: 0 20px;
        color: #494949;
        font-size: 15px;
        line-height: 24px;
      }
    }
  }
</style>
