<template>
  <div class="Topic">
      <ul>
          <li v-for="(item,index) in items">
             <a href="" class="ov">
                 <div class="fl">
                     <p class="title">{{item.title}}</p>
                     <p class="container">{{item.container}}</p>
                     <p class="number">{{item.number}}人浏览</p>
                 </div>
                 <div class="fr">
                     <img v-lazy="item.pic" alt="">
                 </div>
             </a>
          </li>
      </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
      return{
          items:[]
      }
  },
   mounted () {
      this.getContent()
    },
    methods: {
      getContent(){
        const _this = this;
          axios.get('http://localhost:5566/static/Topic.json').then(res =>{
            _this.items= res.data;
          })
      }
      }
}
</script>

<style lang="less" scoped>
    .Topic{
        letter-spacing: 2px;
        ul{
            li{
                a{
                    padding: 18px 0;
                    display: block;
                    .fl{
                        width: 78%;
                        .title{
                            font-size: 17px;
                            font-weight: 600;
                            color: #494949;
                            margin-right: 84px;
                            width: 100%;
                            margin-bottom: 6px;
                        }
                        .number{
                            color: #9b9b9b;
                            font-size: 13px;
                        }
                        .container{
                            color: #999;
                            font-size: 13px;
                            margin-bottom: 10px;
                        }
                    }
                    .fr{
                        width: 20%;
                        img{
                             width: 100%;
                             height: 100px;
                        }
                    }
                }
            }
        }
    }
</style>
