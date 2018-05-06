// 正在热映  更多数据

// 正在热映  更多数据
<template>
  <div class="MovieList">
      <ul>
        <li v-for="(items,index) in subjects" :to="items.alt" :key="index">
            <img v-lazy="items.images.medium" alt="">
            <div class="MovieText">
                <div class="MovieTitle">{{items.title}}</div>
                <div class="director">
                    <p>导演：{{items.directors[0].name}}</p>
                    <p>演员：<span v-for="(i,o) in items.casts" :key="o">{{items.casts[o].name}}/</span></p>
                </div>                
            </div>
            <div class="DetailBtn">
                <router-link :to="{name:'subject',params:{id:items.id}}">{{DetailBtn}}</router-link>
            </div>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
      return{
          DetailBtn:'详情',
          subjects:[]
         }
      },
      created(){
        const _this = this;
        this.$jsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(json =>{
            _this.subjects =json.subjects
        })
  }
}
</script>

<style scoped lang="less">
a{
    text-decoration: none;
}
img{
    width: 100px;
    height: 140px;
    border-radius: 10px;
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
        padding: 15px 14px;
        border-bottom: 1px solid #e4e4e4;
        background: #fff;
        border-radius: 20px;
        margin: 14px;
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
        font-weight: bold
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