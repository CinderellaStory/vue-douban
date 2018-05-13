<template>
     <div class="books">
          <div class="content">
            <div class="list-item" v-for="(items,index) in data" :key="index">
                <div class="CategoryTitle">
                    <div class="title">{{title[index]}}</div>
                    <router-link to="BookMore/BookFiction">更多</router-link>
                </div>
                <div class="BookList">
                    <router-link v-for="(list,i) in items" tag="li" :to="{name:'subject',params:{id:list.id}}" :key="i">
                        <img v-lazy="list.images.large" alt="">
                        <div class="BookText">{{list.title}}</div>
                    </router-link>
                </div>
            </div>
          </div> 
     </div>
 </template>
 <script>
 import axios  from  'axios'
 function hotf(){
   return axios.get('/api/book/search?q=虚构类');
  }
   function hotn(){
    return axios.get('/api/book/search?q=非虚构类');
  }
export default {
    data(){
        return{
           data:{
                hotfiction:[],
                hotnonfiction:[]
           },
            title:{
                hotfiction:'虚构类',
                hotnonfiction:'非虚构类'
            }
        }
    },
   mounted(){
       
      const _this = this;
       axios.all([hotf(),hotn()])
       .then(axios.spread(function (hotfiction,hotnonfiction){
           _this.data.hotfiction = hotfiction.data.books;
           _this.data.hotnonfiction = hotnonfiction.data.books;
       }))
   },
  components:{
  }
}
 </script>
 <style scoped lang="less">
 a{
     text-decoration: none;
 }
 img{
     width: 100px;
     height: 140px;
 }
 .CategoryTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px 0;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #f73e4a;
    }
    }
 .BookList{
     display: flex;
     overflow-x: auto;
    padding: 15px 0 14px 16px;
     li{
         flex: 1;
         text-align: center;
         margin-right: 10px;
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
 </style> 