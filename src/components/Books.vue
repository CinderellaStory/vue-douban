<template>
     <div class="books">
          <div class="content">
           <hotfiction></hotfiction>
           <hotnonfiction></hotnonfiction>
          </div>
     </div>
 </template>
 <script>
 import hotfiction from './Book/hotfiction.vue'
import hotnonfiction from './Book/hotnonfiction.vue'

export default {
  components:{
    hotfiction,hotnonfiction
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
 .MovieList{
     display: flex;
     overflow-x: auto;
     padding: 15px 0 20px 0;
     a{
         flex: 1;
         text-align: center;
         margin-right: 0.48rem;
         color: #111;
         width: 100px;
         .MovieText{
         word-break: keep-all;
         white-space: nowrap;
         overflow: hidden;
         width: 100%;
         font size: 14px;
         text-overflow: ellipsis;
         }
     }
 }
 </style> 