<template>
<div class="odr-list-right">订单右边栏
    <div class="money" v-if="this.$route.path == '/order'"> 应收金额</div>
    <div class="money" v-else> 退款金额</div>
    <router-link :to="{path:'/sales-return'}" v-if="this.$route.path == '/order'">退款</router-link>
</div>
</template>
<script>
export default {
    name: 'order-right',
    computed: {
        message() {
          return this.$store.state.count
        }
      }
  }
</script>
<style>
.odr-list-right{
    line-height: 500px;
    text-align: center;
    position: relative;
}
.money{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    background: #e4393c;
    color: #fff;
    font-size: 14px;
    line-height: 100px;
}
</style>
