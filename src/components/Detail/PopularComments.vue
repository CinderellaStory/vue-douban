<template>
  <div class="Popular_comments">
      <ul>
          <li v-for="(item,index) in list" :key="index">
             <a href="" class="ov">
                 <div class="fl">
                     <p class="title">{{item.author.name}}</p>
                     <p class="container">{{item.content}}</p>
                     <p class="number">{{item.useful_count}}人浏览</p>
                 </div>
                 <div class="fr">
                     <img v-lazy="item.author.avatar" alt="">
                 </div>
             </a>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'PopularComments',
  props: {
      list:Array
      }
}
</script>

<style lang="less" scoped>
    .Popular_comments{
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
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                    }
                    .fr{
                        width: 16%;
                        img{
                             width: 54px;
                             height: 54px;
                        }
                    }
                }
            }
        }
    }
</style>
