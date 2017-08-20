<template>
    <div class="cart-right">退货退款右侧内容
        <router-link :to="{path:'/sales-return-comfirm'}">下一步</router-link>
    </div>
</template>

<script>
import Calculator from '../public/calculator'

export default {
	components:{
		'calculator': Calculator
	}
}
</script>
<style>
.cart-right{
    line-height: 500px;
    text-align: center;
    position: relative;
}
.cpt-box{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100px;
}
</style>
