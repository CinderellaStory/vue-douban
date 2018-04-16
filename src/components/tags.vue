<template>
  <div class="tags">
      <ul>
         <li v-for="(tag,index) in tags" :to="tag.to" :key="index">
             <a href="">{{tag.text}}</a>
         </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
          tags:[
              {text:'科幻',to:''},
              {text:'怪兽',to:''},
              {text:'美国',to:''},
              {text:'动作',to:''},
              {text:'灾难',to:''},
              {text:'2018',to:''},
              {text:'冒险',to:''}
          ]
      }
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
.tags{
    li{
        background: #f5f5f5;
        border-radius: 28px;    
        padding: 0px 16px;
        margin: 6px 10px;
        display: inline-block;
        line-height: 28px;
        a{
        color: #494949;
        font-size: 15px;
        }
    }
}
</style>
