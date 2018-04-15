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
export default {
  data(){
      return{
          items:[
              {
                  title:'中国现在的考试模式应该如何改进呢？',
                  number:'2334',
                  container:'距离高考不到100天，教育部宣布将取消鼓励性加分。',
                  pic:'https://qnmob3.doubanio.com/view/elanor_image/raw/public/5M37B792.jpg?imageView2/2/q/90/w/200/h/200/format/jpg'
              },
              {
                  title:'韩版《小森林》与日版相比如何？',
                  number:'2334',
                  container:'不喜欢韩国，本着要拿来比的心情看韩版，但因为金泰梨自带的纯情气质莫名的提升了好感。',
                  pic:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512152196.jpg'
              },
              {
                  title:'如何追上父母老去的速度',
                  number:'2334',
                  container:'如果我妈不在了，我觉得我的世界就失去了光泽。',
                  pic:'https://qnmob3.doubanio.com/view/elanor_image/raw/public/46393580.jpg?imageView2/2/q/90/w/200/h/200/format/jpg'
              },
              {
                  title:'《狂暴巨兽》与其他巨兽电影相比如何？',
                  number:'2334',
                  container:'“喜欢你就对你好，讨厌你就吃掉你”。很难想象，出自铁血壮汉巨石强森之口。',
                  pic:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516079193.jpg'
              },
              {
                  title:'韩版《小森林》与日版相比如何？',
                  number:'2334',
                  container:'不喜欢韩国，本着要拿来比的心情看韩版，但因为金泰梨自带的纯情气质莫名的提升了好感。',
                  pic:'https://qnmob3.doubanio.com/view/elanor_image/raw/public/5M37B792.jpg?imageView2/2/q/90/w/200/h/200/format/jpg'
              }
          ]
      }
  },
  components:{

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
