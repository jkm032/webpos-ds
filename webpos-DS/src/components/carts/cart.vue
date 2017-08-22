<template>
    <div class="cart" id="cart">
		<ctntop></ctntop>
		<div class="cbottom flex-h">
			<div class="cleft">
				<!-- <router-view name="ctnleft"></router-view> -->
				<ctnleft></ctnleft>
			</div>
			<div class="cright">
				<!-- <router-view name="ctnright"></router-view> -->
				<ctnright></ctnright>
			</div>
			<!-- <router-view name="sidebar"></router-view> -->
			 <sidebar></sidebar> 
		</div>
    </div>
</template>

<script>
	import Nav1 from '../navs/nav1'
	import Sidebar from '../navs/sideBar'
	import CartLeft from '../carts/cart-left'
	import CartRight from '../carts/cart-right'

	import $ from 'jquery'

export default {
	name: 'cart',
	components:{
		'ctntop': Nav1,
		'ctnleft': CartLeft,
		'ctnright': CartRight,
		'sidebar': Sidebar
	}
}

</script>
