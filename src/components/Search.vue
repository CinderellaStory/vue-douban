<template>
  <div class="search">
      <input type="text" placeholder="请输入搜索内容">
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
.search {
    background: #f73e4a;
    height: 52px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    input{
        height: 32px;
        width: 88%;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 13px;
        padding-left: 10px;
    }
}
</style>
