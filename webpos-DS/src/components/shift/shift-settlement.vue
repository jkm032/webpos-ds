<template>
 <div class="order" id="order">
		<div class="ctop">
			<ctntop></ctntop>
		</div>
		<div class="cbottom">
            <div class="shift-settlement">交班结算页面
            </div>
			<sidebar></sidebar>
		</div>
    </div>
</template>
<script>
    import Nav1 from '../navs/nav1'
	import Sidebar from '../navs/sideBar'

export default {
	components:{
		'ctntop': Nav1,
		'sidebar': Sidebar
	}
}
</script>
<style>
.shift-settlement{
    width: 100%;
    line-height: 500px;
    text-align: center;
    background: #ccc;
}
</style>

