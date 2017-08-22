<template>
    <div class="detail">
        <div class="sao flex-h">
            <div class="ipt-box">
                <input type="text" placeholder="输入商品条码或用扫描枪扫描条码">
            </div>
            <button class="add" disabled>添加</button>
        </div>
        <div class="inf-box flex-h">
             <div class="img flex-h flex-vc">
                <img src="../../../static/img/lib/1.jpg">
            </div>
            <div class="inf">
                 <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                 <p class="bm">条码：<i>88748454654654</i><span class="special-offer">特价</span></p>
                 <div class="price"><span class="te">￥<i>250.00</i></span><span class="yuan"><s>￥<i>260.00</i></s></span></div>
                 <span class="del" title="删除该商品"></span>
            </div>
        </div>
        <div class="hd">
            <div class="zt-number">
                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
				<span class="zt-sub subQuantity"></span>
				<input name="g-num" type="number" class="zt-num" />
				<span class="zt-add addQuantity"></span>
			</div>
        </div>
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
