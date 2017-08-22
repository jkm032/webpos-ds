<template>
<div class="sidebar">
    <ul class="list">
        <li><router-link :to="{path:'/order'}" class="order">订单</router-link></li>
        <li><router-link :to="{path:'/shift-settlement'}" class="shift">交班</router-link></li>
        <li><router-link :to="{path:'/order/order-sales-return'}" class="return">退货</router-link></li>
    </ul>
    <div class="logout-box ui-whitespace"><button class="logout">退出登录</button></div>
</div>
</template>
<script>
export default {
}
</script>

