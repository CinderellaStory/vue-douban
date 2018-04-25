<template>
  <div class="footer">
    <ul>
      <router-link v-for="(item,index) in NavData" :key="index" :to="item.to" tag="li">
            {{item.text}}
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
          },
				{
					to:'/Distraction',
          text:'书影音',
				},
        {
					to:'/broadcast',
          text:'广播',
        },
				{
					to:'/group',
          text:'小组',
        },
				{
					to:'/Mine',
          text:'我的',
        }
        ]
            }
  }
}
</script>

<style scoped lang="less">
  .router-link-exact-active{color: #f73e4a !important; font-weight: bold}
  .footer {
    height: 50px;
  ul{
    line-height: 50px;
     display: flex;
     position: fixed;
     left: 0;
     right: 0;
     bottom: 0;
     border-top: 1px solid #f3f3f3;
     background: #fff;
     li{ 
      text-decoration: none; 
      flex: 1;
      text-align: center;
      font-size: 16px;
      color: #666;
      }
  }
  }
</style>
