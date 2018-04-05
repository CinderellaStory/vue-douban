// 最受关注图书｜非虚构类
<template>
  <div class="hotnonfiction">
       <div class="CategoryTitle">
            <div class="title">{{hotnonfiction}}</div>
            <router-link to="BookMore/BookNonfiction">更多</router-link>
        </div>
        <div class="BookList">
            <router-link v-for="(items,index) in books" :to="items.alt" :key="index">
                <img v-lazy="items.images.large" alt="">
                <div class="BookText">{{items.title}}</div>
            </router-link>
        </div>
  </div>
</template>
 <script>
 
 export default {
    data(){
         return{
             hotnonfiction:'最受关注图书｜非虚构类',
             books:[]
         }
     },
     created(){
         const _this = this;
         this.$jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
         .then(json =>{
             _this.books =json.books;
         })
         .catch(function (error) {
           console.log(error);
         });
     }
 }
 </script>
 <style scoped lang="less">
 img{
    width: 105px;
    height: 142px;
    display: inline-block
}
 .hotnonfiction{
    .CategoryTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    .title{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
}
.BookList{
    display: flex;
    overflow-x: auto;
    padding: 20px 0;
    a{
        flex: 1;
        text-align: center;
        margin-right: 16px;
        color: #111;
        width: 100px;
        .BookText{
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        font-size: 14px;
        text-overflow: ellipsis;
        }
    }
}
}
 </style> 