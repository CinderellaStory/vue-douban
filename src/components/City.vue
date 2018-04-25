// 同城 city
<template>
  <div class="city content">
      <section v-for="(items,i) in subjects" :key="i">
        <div class="CategoryTitle">
                <div class="CinemaHot">{{title2[i]}}</div>
                <router-link to="CinemaMore/fox">更多</router-link>
            </div>
            <div class="cityList">
                <ul>
                    <router-link tag="li" v-for="(item,index) in items" :key="index" :to="{name:'event',params:{id:item.id}}">
                        <img v-lazy="item.large" alt="">
                        <p>{{item.title}}</p>
                        <div class="times">{{item.times}}</div>
                    </router-link>
                </ul>
            </div>
        </section>
  </div>
</template>
<script>
import axios from 'axios'

export default { 
        data(){
            return{
            title2:{
                hots:'热门活动',
                concert:'演唱会类',
                shows:'展览类'
             },
            subjects:{}
            }
        },
        created(){
            const _this = this;
            axios.get('http://localhost:5566/static/city.json')
            .then(json =>{
                _this.subjects =json.data
            })
    }
}
</script>

<style scoped lang="less">
.city{
    section{
        margin-bottom: 10px;
    .CategoryTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
    .CinemaHot{
        font-size: 16px;
    }
    a{
        color: #42bd56;
    }
}
.cityList{
    ul{
        display: flex;
        overflow-x: auto;
        li{
            flex: 1;
            width: 100px;
            text-align: center;
            margin-right: 10px;
            color: #111;
                img{
                    width: 100px;
                    height: 142px;
                    display: inline-block
                }
                p{
                   text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 16px;
                    font-size: 13px;
                    margin-top: 6px;
                }
                .times{
                    color: #ccc;
                    font-size: 12px;
                    margin-top: 6px;
                }
        }
    }
    }
}
}
</style>
