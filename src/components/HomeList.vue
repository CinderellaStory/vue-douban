<template>
  <div class="HomeList">
      <router-link v-for="(items,index) in events" :to='items.alt'>
          <div class="ArticleContent fl">
              <h3>{{items.title}}</h3>
              <!-- <p>{{items.content}}</p> -->
              <div class="author">{{items.category_name}}</div>
          </div>
          <div class="ArticleDetail fl">
              <img :src="items.image_hlarge" alt="">
              <p>来自栏目 {{items.subcategory_name}}</p>
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
        this.$jsonp('https://api.douban.com/v2/event/list?loc=108288')
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
.fr{float: left}
.HomeList{
    overflow: hidden;
    margin-left: 14px;
   a{
       padding: 25px 18px 25px 0;
       height: 140px;
       overflow: hidden;
       border-bottom: 1px solid #eee;
       display: inline-block;
    .ArticleContent{
        width: 70%;
        display: inline-block;
        h3{
            color: #494949;
            font-size: 18px;
            font-weight: bold;
        }
        p{}
        .author{
            color: #ccc;font-size: 12px;
        }
    }
    .ArticleDetail{
        width: 30%;
        display: inline-block;
        img{ width: 100%; height: 110px; }
        p{color: #ccc;font-size: 12px;margin:20px 0; }
    }
   }
}
</style>
