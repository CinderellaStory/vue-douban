<template>
  <div class="popular_reviews">
    <ul>
      <li v-for="(comment,index) in list" :key="index">
          <div class="desc">
              <a href="">
                  <img v-lazy="comment.author.avatar" alt="">
              </a>
              <div class="user-info">
                  <strong>{{comment.author.name}}</strong>
                  <p>{{comment.summary}}</p>
              </div>
          </div>
      </li>
      <li class="CommentAll">
          <a href="">{{all}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'PopularReviews',
  data(){
    return{
      all:'查看全部影评论'
    }
  },
  props: {
      list:Array
  }
}
</script>

<style lang="less" scoped>

// 短评
 .popular_reviews{
    li{
        padding: 15px 18px 15px 0;
        .desc{
            a{
                img{
                    width: 36px;
                    border-radius: 50%;
                    float: left;
                    margin-right: 10px;
                }
            }
            .user-info{
                p{
                margin-top: 6px;
                font-size: 12px;
                color: #aaa;
                }
            }
        }
        p{
            padding: 0 0 0 40px;
            line-height: 22px;
            color: #494949;
            font-size: 15px;
        }
        &.CommentAll{
            text-align: center;
            a{
            color: #42bd56;
            font-size: 15px;
            }
        }
    }

}
</style>
