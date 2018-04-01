<template>
  <div class="footer">
    <ul>
      <router-link v-for="item in NavData" :to="item.to" tag="li">
            <p :class="item.class">{{item.text}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
       NavData:[
          {
              to: '/',
              text: '首页',
              class:'homeText'
          },
				{
					to:'/books',
          text:'书籍',
          class:"booksText"
				},
				{
					to:'/movie',
          text:'电影',
          class:'movieText'
				},
				{
					to:'/my',
          text:'我的',
          class:'myText'
        }
        ]
            }
  }
}
</script>

<style scoped lang="less">
  .router-link-exact-active p{color: red !important; font-weight: bold}
  .footer {
    height: 50px;
  ul{
    line-height: 50px;
     display: flex;
     position: fixed;
     left: 0;
     right: 0;
     top: 0;
     border-bottom: 1px solid #f3f3f3;
     background: #fff;
     li{ 
      text-decoration: none; 
      flex: 1;
      text-align: center;
      }

      .homeText{
        color: #2384E8;
      }
      .booksText{
        color: #9F7860;
      }
      .movieText{
        color: #E4A813;
      }
      .myText{
            color: #2AB8CC;
      }
  }
  }
</style>
