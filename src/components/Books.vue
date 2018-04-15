<template>
     <div class="books">
          <div class="content" v-for="(items,index) in data" :key="index">
            <div class="CategoryTitle">
                    <div class="title">{{title[index]}}</div>
                    <router-link to="BookMore/BookFiction">更多</router-link>
                </div>
                <div class="BookList">
                    <router-link v-for="(list,i) in items" :to="list.alt" :key="i">
                        <img v-lazy="list.images.large" alt="">
                        <div class="BookText">{{list.title}}</div>
                    </router-link>
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
    padding: 8px 10px;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
    }
 .BookList{
     display: flex;
     overflow-x: auto;
     padding: 15px 0 20px 0;
     a{
         flex: 1;
         text-align: center;
         margin-right: 0.48rem;
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