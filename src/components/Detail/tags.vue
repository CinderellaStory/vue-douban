<template>
    <div class="tags">
        <ul>
            <li v-for="(tag,index) in list" :key="index">
                <a href="">{{tag}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
 name:'tags',
  props:{
      list:Array
  }
}
</script>

<style lang="less" scoped>
.tags{
    li{
        background: #f5f5f5;
        border:1px solid #f73e4a;
        border-radius: 28px;    
        padding: 2px 14px;
        margin: 14px 0 0 18px;
        display: inline-block;
        a{
        color: #f73e4a;
        font-size: 12px;
        }
    }
}
</style>
