<template>
  <div class="MovieList">
        <router-link v-for="(items,index) in subjects" :to="items.alt" :key="index" tag="li">
            <img v-lazy="items.images.medium" alt="">
                  <div class="MovieText">
                      <div class="MovieTitle">{{items.title}}</div>
                      <div class="director">
                          <p>导演：{{items.directors[0].name}}</p>
                          <p>演员：<span v-for="(i,o) in items.casts" :key="o">{{items.casts[o].name}}/</span></p>
                      </div>                   </div>
                  <div class="DetailBtn">
                      <a href="">{{DetailBtn}}</a>
                  </div>
        </router-link>
    </div>
</template>
<script>
import prince from './prince';
import rose from './rose';

export default {
  data(){
      return{
          DetailBtn:'详情',
          subjects:[],
          currentTab: 'prince'
         }
      },
      components: { // 声明子组件  是刚才那样 已经出了来  你看下怎么取索引的 看下数组和对象的区别  加油~
        prince,
        rose
        },
         methods: {
            toggleTab: function(tab) {
            this.currentTab = tab; // tab 为当前触发标签页的组件名  好等一下
            }
            },
      created(){
        const _this = this;
        this.axios({method:'get',url: '/api/movie/in_theaters'})
        .then(response =>{
            _this.subjects =response.data.subjects
          console.log(response.data.subjects);
        })
  }
}
</script>

<style scoped lang="less">
a{
    text-decoration: none;
}
img{
    width: 80px;
    height: 120px;
    display: inline-block
}
.CategoryTitle{
    justify-content: space-between;
    align-items: center;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
    
}

.MovieList{
    li{
        display: flex;
    padding: 15px 10px;
    border-bottom: 1px solid #e4e4e4;
        .DetailBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            border: 1px solid #117ae6;
            border-radius: 4px;
        text-align: center;
            width: 60px;
         line-height: 30px;
         height: 30px;
        // display: block;
        // margin-right: 0.48rem;
        color: #117ae6;
        }
        }
        .MovieText{
            flex: 1;
        width: 200px;
        margin-left: 10px;
        font-size: 14px;
        .MovieTitle{
        font-size: 17px;
        color: #333;
        }
        .director{
            margin-top: 10px;
            p{
                color: #999;
                line-height: 20px;
            }
        }
        }
    }
}
</style>