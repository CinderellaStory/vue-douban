<template>
  <div class="trailers">
        <ul>
            <li class="video" v-for="(bg,b) in list" :key="b" v-bind:style="{'background-image':'url('+bg.medium+')'}">
                <router-link :to="{path:'trailer',params:{id:bg.id}}">
                    <span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt=""></span>
                </router-link>
            </li>
        </ul>
        <button @click="ClickMe">点击</button>
  </div>
</template>

<script>
export default {
  name:"trailers",
  props:{
      list:Array
  },
  methods:{
      ClickMe(){
        console.log(this.list);
      }
  }
}
</script>

<style lang="less" scoped>
    .trailers{
        ul{
            overflow: scroll;
            white-space: nowrap;
            li{
                margin-right: 6px;
                height: 120px;
                display: inline-block;
            &.video{
                background-size: 100%;
                width: 213.33333px;
                a{
                position: relative;
                    height: 100%;
                    display: block;
                span{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    img{
                    width: 42px;
                    height: 42px;
                    margin: -21px 0 0 -21px;
                    }
                }
                }
            }
            &.pic{
                img{
                        height: 100%;
                }
            }
        }
        }
    }
</style>
