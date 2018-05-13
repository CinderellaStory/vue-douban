<template>
  <div class="Topic">
        <p>{{message}}</p>
      <ul>
          <li v-for="(item,index) in items.reviews" :key="index">
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
import axios from 'axios'

export default {
  data(){
      return{
          items:[]
      }
  },
   mounted() {
      this.getContent(),
      this.$emit('childEvent');
    },
    methods: {
      getContent(){
        const _this = this;
            const id = this.$route.params.id;
          axios.get('api/movie/subject/'+id+'/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=20&client=something&udid=dddddddddddddddddddddd').then(res =>{
            _this.items= res.data;
          })
            console.log(this.items)
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
