<template>
  <div class="comments">
      <ul>
          <li v-for="(comment,index) in comments" :key="index" :to="comment.to">
               <div class="desc">
                    <a href="">
                        <img v-lazy="comment.pic" alt="">
                    </a>
                    <div class="user-info">
                        <strong>{{comment.user}}</strong>
                        <p>{{comment.times}}</p>
                    </div>
                </div>
                <p>
                    {{comment.detail}}
                </p>
                <div class="btn-info ov">
                    <div class="praise fl">
                        <span class="">{{comment.text}}</span>
                    </div>
                    <div class="more fr"></div>
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
  data(){
      return{
          all:'查看所有短评',
          comments:[
              {
                to:'',
                user:'懂得多',
                pic:'https://img3.doubanio.com/icon/up48964478-3.jpg',
                times:'2012-12-12',
                detail:'本来是想给三星的，不过看到这么多没看片子的大神怒刷一星，我觉得有必要改成五星中和一下。这种片子既然买了票就别想着剧情逻辑了，咣咣猛砸一通，结局来个happy ending就行，场面特效音效这些就完全值回票钱了。',
                text:344
              },
              {
                to:'',
                user:'会飞的猫',
                pic:'https://img3.doubanio.com/icon/up140457119-3.jpg',
                times:'2012-12-12',
                detail:'剧情诙谐幽默，画面震撼，既搞笑又幽默，男主和猩猩之间的情感互动对于喜欢动物的观众而言，仍旧充满了感动。',
                text:240
              },
              {
                to:'',
                user:'搬砖侠',
                pic:'https://img1.doubanio.com/icon/up59626068-19.jpg',
                times:'2012-12-12',
                detail:'意外还行的爆米花大片，作为游戏改编电影来说，中规中矩，缺点固然是剧本的薄弱，但仔细一想，也许导演从来就没有太大的野心，足够爽快刺激就够了。地表最强硬汉强森大战三大巨兽，《猩球崛起》+《金刚》+《哥斯拉》合体版，特效戏居然多数是白天，维塔工作室牛逼，但是最喜欢的角色居然是尼根大叔！',
                text:78
              },
              {
                to:'',
                user:'斜杠青年',
                pic:'https://img3.doubanio.com/icon/up2160141-4.jpg',
                times:'2012-12-12',
                detail:'姐姐是疯子、弟弟是傻子，至于那个老牛仔，也许他真是正义联盟的人……',
                text:12
              }
          ]
      }
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
.ov{
    overflow: hidden;
}
    .comments{
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
            .btn-info{
                margin: 10px 0 0 40px;
                .praise::before{
                    content: '';
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)
                }
                span{
                    display: inline-block;
                    vertical-align: middle;
                    color: #ccc;
                    font-size: 14px;
                    margin-left: 4px;
                }
                .more::before{
                content: '';
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-image: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg)
                }
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
