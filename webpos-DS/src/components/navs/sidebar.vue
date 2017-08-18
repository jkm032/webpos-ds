<template>
<div class="sidebar">侧边栏导航
    <ul>
        <!-- <li><router-link :to="/orders">订单</router-link></li>
        <li><router-link :to="/transform">交班</router-link></li>
        <li><router-link :to="/sales-rtn">退货</router-link></li> -->
    </ul>
</div>
</template>
<script>
//     import Nav2 from './navs/nav2'
// 	import CartLeft from './carts/cart-left'
// 	import CartRight from './carts/cart-right'
// export default {
//   components:{
// 		'ctntop': Nav1,
// 		'ctnleft': CartLeft,
// 		'ctnright': CartRight,
// 		'sidebar': Sidebar
// 	}
// }
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

