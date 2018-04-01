<template>
  <div class="my">
       <NavBar></NavBar>
       <div class="MyHeader">
         <div class="container">
              <img src="https://img.mukewang.com/5333a1a90001c8d802000200-100-100.jpg" alt="">
              <div class="NameDetail">
                <div class="BasicInfo">
                  <p>浅浅时光</p>
                  <p>
                    <span>ID:748648464</span>
                    <a href="">个人主页&gt</a>
                  </p>
                </div>
                <div class="RelationShip">
                  <a href="">关注</a>
                  <a href="">被关注</a>
                </div>
              </div>
            </div>
        </div>
  </div>
</template>
<script>
import NavBar from './NavBar.vue'

export default {
  components:{
    NavBar
  }
}
</script>

<style scoped lang="less">
.MyHeader{
  height: 124px;
  background: #42bd56;
  .container{
   display: flex;
   color: #fff;
   justify-content: center;
   align-items: center;
   height:100%;
   padding: 0 20px;
  img{
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: 2px solid #fff
  }
  .NameDetail{
    flex: 1;
    margin-left: 30px;
    a{
      color: #fff;
    }
    .BasicInfo{
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      p{
        span{
        font-size: 12px;
        }
        a{
        font-size: 12px;
        float: right;
        }
      }
    }
    .RelationShip{
      margin-top: 10px;
    }
  }
  }
}
</style>

