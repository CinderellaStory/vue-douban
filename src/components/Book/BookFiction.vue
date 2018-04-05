// 虚构类  更多数据
<template>
  <div class="BookList">
        <router-link v-for="(items,index) in books" :to="items.alt" :key="index" tag="li">
            <img v-lazy="items.images.large" alt="">
            <div class="BookText">
                <div class="BookTitle">{{items.title}}</div>
                <div class="BookDetail">
                    <p>{{items.author[0]}}/{{items.author[1]}}/{{items.publisher}}/{{items.binding}}/{{items.pages}}/{{items.price}}</p>
                    <p>{{items.pubdate}}</p>
                </div>  
            </div>
            <div class="DetailBtn">
                <router-link :to="{name:'MovieDetail',params:{userId:items.id}}">{{DetailBtn}}</router-link>
            </div>
        </router-link>
    </div>
</template>
<script>

export default {
  data(){
      return{
          DetailBtn:'详情',
          books:[]
         }
      },
      created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/book/search?q=虚构类')
        .then(json=>{
            _this.books =json.books
        })
  }
}
</script>

<style scoped lang="less">
a{
    text-decoration: none;
}
img{
    height: 146px;
    width: 100px;
}
.BookList{
    li{
        display: flex;
    padding: 15px 14px;
    border-bottom: 1px solid #e4e4e4;
        .DetailBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        a{
            border: 1px solid #117ae6;
            border-radius: 4px;
        text-align: center;
            width: 60px;
         line-height: 30px;
         height: 30px;
        color: #117ae6;
        }
        }
        .BookText{
            flex: 1;
        width: 200px;
        margin-left: 10px;
        font-size: 14px;
        .BookTitle{
        font-size: 18px;
        color: #333;
        font-weight: bold;
        }
        .BookDetail{
            margin-top: 10px;
            p{
                color: #494949;
                line-height: 20px;
            }
        }
        }
    }
}
</style>