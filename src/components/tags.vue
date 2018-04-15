<template>
  <div class="tags">
      <router-link v-for="(tag,index) in tags" :to="tag.to" :key="index">{{tag.text}}</router-link>
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
    a{
        background: #f5f5f5;
        color: #494949;
        margin: 10px 10px 0 0;
        border-radius: 28px;    
        padding: 4px 16px;
        margin: 6px 10px;
        display: inline-block;
        font-size: 15px;
        line-height: 28px;
    }
}
</style>
