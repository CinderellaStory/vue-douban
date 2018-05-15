<template>
   <div v-show="visible" class="dialog-tips dialog-center">
          <div>{{message}}</div>
      </div>
</template>
<script>
 export default {
  data() {
    return {
      visible: false,
      message: ""
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-tips{
    position: fixed;
    z-index: 100;
    padding: 16px 20px;
    white-space: nowrap;
    background: #000;
    opacity: 0.8;
    box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    .dialog-tips-icon{
        width: 54px;
        height: 54px;
        display: inline-block;
        margin-bottom: 13px;
    }
}
.dialog-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
       border-radius: 10px;
        div{
        color:#fff;
        font-size: 18px;
    }
}

</style>
