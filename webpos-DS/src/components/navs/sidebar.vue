<template>
<div class="sidebar">侧边栏导航
    <ul>
        <li><router-link :to="{path:'/order'}">订单</router-link></li>
        <li><router-link :to="{path:'/shift-settlement'}">交班</router-link></li>
        <li><router-link :to="{path:'/order/order-sales-return'}">退货</router-link></li>
        <!-- <li><a href="/#/order">订单</a></li>
        <li><a href="/#/shift-settlement">交班</a></li>
        <li><a href="/sales-rtn">退货</a></li> -->
    </ul>
</div>
</template>
<script>
export default {
}
</script>
<style>
.sidebar{
    position: fixed;
    width:200px;
    height: 100%;
    top: 45px;
    left: 0;
    z-index: 99;
    text-align: center;
    background: blueviolet;
}
</style>

