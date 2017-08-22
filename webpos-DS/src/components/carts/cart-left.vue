<template>
<div>
    <ul class="stall flex-h">
        <li><router-link :to="{path:''}" class="pub-bd-btn">上一单</router-link></li>
        <li class="flex1 ui-whitespace">
            <div class="navs flex-h">
                <div name="1" class="cur" @click="addCur"><em>1号车</em> <i class="d" id="productCount1">0</i></div>
                <div name="2" @click="addCur"><em>2号车</em> <i class="d" id="productCount2">0</i></div>
                <div name="3" @click="addCur"><em>3号车</em> <i class="d" id="productCount3">0</i></div> 
            </div>
        </li>
        <li>
            <span class="pub-bd-btn">清空商品</span>
        </li>
    </ul>
    <div class="cart-hidden">
        <ul class="cart-container-box">
            <li class="cart-container">
                <ul class="group">
                    <li class="gp-title flex-h flex-vc">
                        <i class="tag">满量减</i><span>再购<em>1件</em>立享【<em>满100减20</em>】，提醒客户凑单</span>
                    </li>
                    <!-- 当该商品为新添加的时候，加上class：new -->
                    <li class="goods flex-h new">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">当该商品为新添加的时候，加上class：new </div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num" type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                </ul>
                <ul class="group">
                    <li class="gp-title flex-h flex-vc">
                        <i class="tag">N元任选</i><span>再购<em>1件</em>立享【<em>10元任选3件</em>】，提醒客户凑单</span>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                </ul>
                <ul class="group">
                    <li class="gp-title flex-h flex-vc">
                        <i class="tag">N元任选</i><span>再购<em>1件</em>立享【<em>10元任选3件</em>】，提醒客户凑单</span>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="cart-container">
                <ul class="group">
                    <li class="gp-title flex-h flex-vc">
                        <i class="tag">满量减</i><span>再购<em>1件</em>立享【<em>满100减20</em>】，提醒客户凑单</span>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="cart-container">
                <ul class="group">
                    <li class="gp-title flex-h flex-vc">
                        <i class="tag">满量减</i><span>再购<em>1件</em>立享【<em>满100减20</em>】，提醒客户凑单</span>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                    <li class="goods flex-h">
                        <div class="img flex-h flex-vc">
                            <img src="../../../static/img/lib/1.jpg">
                        </div>
                        <div class="inf">
                            <div class="nm">德国蔓越莓胶囊 妇科泌尿女性美容精华提取片60粒/瓶</div>
                            <p class="bm">88748454654654</p>
                        </div>
                        <div class="ps">￥<span>250.00</span></div>
                        <div class="hd">
                            <div class="zt-number">
                                <!-- 当不能再减或者再加时，给对应span加上class:zt-disabled -->
                                <span class="zt-sub subQuantity"></span>
                                <input name="g-num"  type="number"  class="zt-num"/>
                                <span class="zt-add addQuantity"></span>
                                </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="setl">
        <ul class="total flex-h">
            <li class="txt-lf">商品总数：<i>6</i></li>
            <li class="text-ct">优惠金额：￥<i>6.00</i></li>
            <li class="txt-rt">合计金额：￥<i>3000.00</i></li>
        </ul>
        <div class="g-box">
            <button class="gathering" disabled>收款</button>
            <span>￥<i>25.00</i></span>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
	computed:{
		
    },
    mounted (){
    },
    methods:{
        addCur: (e)=>{
            let obj = e.currentTarget;
            let objName = $(obj).attr('name');
            let $target = $('.cart-container-box');
            let tw = $target.find('.cart-container').width() + 20;//padding没有计算在内
            $(obj).addClass('cur').siblings().removeClass('cur');
            $target.attr('style','transform:translateX(-' + (tw * (objName -1)) + 'px)')
        }
    }
}


</script>
<style>
</style>
