<template>
  <div class="footer">
    <router-link v-for="item in NavData" :to="item.to">
            <p>{{item.text}}</p>
</router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
       NavData:[
          {
              to: '/',
              text: '首页'
          },
				{
					to:'/books',
					text:'书籍'
				},
				{
					to:'/movie',
					text:'电影'
				},
				{
					to:'/my',
					text:'我的'
        }
        ]
            }
  }
}
</script>

<style scoped lang="less">
  
  .footer{
    border-top: 1px solid #e4e4e4;
    height: 50px;
     display: flex;
     position: fixed;
     left: 0;
     right: 0;
     bottom: 0;
     background: #fff;
     a{ 
      text-decoration: none; 
      flex: 1;
      text-align: center;
      }
  }
</style>
