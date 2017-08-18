<template>
    <div class="cart-right">购物车右侧内容。。。
        <div class="cpt-box">
            <calculator></calculator>
        </div>
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
