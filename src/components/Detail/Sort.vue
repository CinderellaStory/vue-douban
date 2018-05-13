<template>
  <div class="Sort">
      <h2>分类浏览</h2>
      <ul>
          <li v-for="(item,index) in subjects" :key="index" :to="item.to">
                {{item.title}}
                <span></span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
          subjects:[
              {
                 title:'经典' ,
                 to:''
              },
              {
                 title:'冷门佳片' ,
                 to:''
              },
              {
                 title:'豆瓣高分' ,
                 to:''
              },
              {
                 title:'动作' ,
                 to:''
              },
              {
                 title:'爱情' ,
                 to:''
              },
              {
                 title:'科幻' ,
                 to:''
              }
          ]
      }
  },
  created(){
    // const _this = this;
    // this.$jsonp('https://api.douban.com/v2/movie/search?tag=经典')
    // .then(json =>{
    //     _this.subjects =json.subjects
    // })
}
}
</script>

<style lang="less" scoped>
.Sort{
    h2{
        font-size: 18px;
        margin-bottom: 20px;
    }
    ul{
        li{
            width: 41%;
            float: left;
            border-top: solid 1px #eee;
            border-right: solid 1px #eee;
            padding-right: 1.12rem;
            height: 50px;
            line-height: 50px;
            color: #42bd56;
            padding-left: 10px;
            span{
                color: #ccc;
                float: right;
                font-weight: bold;
                display: inline-block;
                border-right: solid 1px #ccc;
                border-bottom: solid 1px #ccc;
                width: .5rem;
                height: .5rem;
                transform: rotate(-45deg);
                margin-top: 20px;
            }
        }
    }
}
</style>
