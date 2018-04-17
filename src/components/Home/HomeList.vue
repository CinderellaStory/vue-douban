<template>
  <div class="HomeList">
      <router-link v-for="(items,index) in events" :to='items.alt' :key="index">
          <div class="ov">
            <div class="ArticleContent fl">
                <h3>{{items.title}}</h3>
                <p v-text="items.content">{{items.content}}</p>
                <!-- <p>2018年第15周，《头号玩家》口碑炸裂上映，一百多个彩蛋眼花缭乱，年过七十的斯皮尔伯格竟然能拍出一部让影迷游戏迷动漫迷集体叫好的作品实在难得！《暴烈无声》《第三度嫌疑人》等院线成本小佳片纷纷上榜，为榜单注入新鲜血液。  </p> -->
            </div>
            <div class="ArticleDetail fl">
                <img  v-lazy="items.image_hlarge" alt="">
            </div>
          </div>
            <div class="ArticleFooter ov">
                <p class="author fl">{{items.category_name}}</p>
                <p class="fr">来自栏目 {{items.subcategory_name}}</p>
            </div>
      </router-link>
  </div>
</template>
<script>
export default {
  data(){
      return{
          events:[]
      }
  },
  created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/event/list?loc=shenzhen')
        .then( json => {
            _this.events = json.events
        })
    },
  components:{

  }
}
</script>

<style lang="less" scoped>
.fl{float: left}
.fr{float: right}
.ov{overflow: hidden}
.HomeList{
    overflow: hidden;
    margin-left: 10px;
   a{
       padding: 20px 0px 10px 0;
       overflow: hidden;
       border-bottom: 1px solid #eee;
       display: inline-block;
    .ArticleContent{
        width: 68%;
        display: inline-block;
        h3{
            color: #494949;
            font-size: 18px;
            font-weight: bold;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; //需要控制的文本行数
            overflow: hidden;
        }
        p{
            color:#aaa;
            font-size: 12px;
            margin-top: 10px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; //需要控制的文本行数
            overflow: hidden;
        }
    }
    .ArticleDetail{
        width: 30%;
        text-align: right;
        display: inline-block;
        img{ 
            width: 80%;
            height: 120px;
         }
    }
    .ArticleFooter{
        position: relative;
        p{
            color: #ccc;font-size: 12px;margin:10px 0; 
        }
        .fl{
            width: 68%;
        }
        .fr{
            position: absolute;
            right: 12px;
        }
    }
   }
}
</style>
