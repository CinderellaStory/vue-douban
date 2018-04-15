// <template>
//   <div class="BMMheader">
//       <ul>
//         <router-link :class="item.class" v-for="(item,index) in NavData" :key="index" :to="item.to" tag="li">
//                 {{item.text}}
//         </router-link>
//     </ul>
//     <router-view></router-view>
//   </div>
// </template>
// <script>
// import books from './books'
// import movie from './movie'
// import comingSoon from './comingSoon'

// export default {
//   data(){
//       return{
//         NavData:[
//         {
//           to:'movie',
//           text:'电影',
//           class:""
//         },
//         {
//           to:'comingSoon',
//           text:'音乐',
//           class:''
//         },
//         {
//           to:'books',
//           text:'书籍',
//           class:""
//         },
//         {
//           to:'/',
//           text:'同城',
//           class:""
//         }
//         ]
//       }
//   },
//   components:{

//   }
// }
// </script>

// <style lang="less" scoped>
// .router-link-exact-active{color: #000 !important; border-bottom: 1px solid #000}
//   .BMMheader {
//     height: 40px;
//   ul{
//     line-height: 40px;
//      display: flex;
//      position: fixed;
//      left: 0;
//      right: 0;
//      top: 0;
//      border-bottom: 1px solid #f3f3f3;
//      background: #fff;
//      li{ 
//       text-decoration: none; 
//       flex: 1;
//       color: #999;
//       font-size: 14px;
//       text-align: center;
//       }

//       .homeText{
//         color: #2384E8;
//       }
//       .booksText{
//         color: #9F7860;
//       }
//       .movieText{
//         color: #E4A813;
//       }
//       .myText{
//             color: #2AB8CC;
//       }
//   }
//   }
// </style>
