<template>
  <div class="search">
      <input type="text" placeholder="请输入搜索内容" @click="showTalion">
      <span>🔍</span>
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  components:{

  }, 
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
    background: #f73e4a;
    height: 56px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    input{
        height: 32px;
        width: 78%;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 15px;
        padding-left: 30px;
    }
    span{
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        left: 9%;
        top: 28%;
    }
}
</style>
