<template>
    <div class="order" id="order">
		<div class="ctop">
			<ctntop></ctntop>
		</div>
		<div class="cbottom">
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
	import OrderList from './order-list'
	import OrderDetails from './order-details'

export default {
	components:{
		'ctntop': Nav1,
		'ctnleft': OrderList,
		'ctnright': OrderDetails,
		'sidebar': Sidebar
	}
}

</script>
<style>
.order{
	width: 100%;
	height:500px; 
}
.ctop{
	height: 45px;
	width: 100%;
}
.cbottom{
	width: 100%;
	height: 500px;
	display: flex;
}
.cleft,.cright{
	width: 50%;
	height: 100%;
	text-align: center;
	border: 1px solid #ddd;
}
</style>
