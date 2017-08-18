    <template>
    <section class="ord-detail" id="orderDetail">
        <!--在下面div中加入obligation、done、closed可以分别显示三种状态-->
        <div class="stat flex flex-vc flex-hc obligation">
            <!--已关闭-->
            <div class="ctn closed-icon">
                <p>已关闭</p>
                <span>订单未支付，订单关闭</span>
            </div>
            <!--支付成功-->
            <div class="ctn done-icon">
                <p>已完成</p>
                <span>支付成功，请将此单据给收银员查看</span>
            </div>
            <!--待支付-->
            <div class="ctn obligation-icon" style="display: none">
                <p>待支付</p>
                <span>请于
                    <i id="min">19</i>分
                    <i id="sec">75</i>秒内完成支付，超时自动关闭订单 </span>
            </div>
        </div>
        <div class="store bdb ui-whitespace">
            <span class="store-gray-icon"></span>
        </div>
        <ul class="pub-gd-list">
             <li class="pro ui-whitespace bdt">
                <img src="../../static/img/lib/1.jpg"/>
    
                <div class="inf">
                    <h4>建设大街发髻卡戴珊金风科技阿萨德飞机爱到花开积分</h4>
    
                    <div class="det">
                        <span class="pri">￥<i>123.00</i></span>
                        <span class="num">×<i>22</i></span>
                    </div>
                </div>
            </li>
            <li class="pro ui-whitespace bdt">
                <img src="../../static/img/lib/1.jpg"/>
    
                <div class="inf">
                    <h4>建设大街发髻卡戴珊金风科技阿萨德飞机爱到花开积分</h4>
    
                    <div class="det">
                        <span class="pri">￥<i>123.00</i></span>
                        <span class="num">×<i>22</i></span>
                    </div>
                </div>
            </li> 
        </ul>
        <div class="pub-key-value bdt bdb">
            <span>商品合计：</span>
            <i>￥
                <em id="totalAmount">0.00</em>
            </i>
        </div>
        <p class="br"></p>
    
        <div class="pub-key-value bdt">
            <span>商品金额：</span>
            <i>￥
                <em id="goodAmount">0.00</em>
            </i>
        </div>
        <div class="pub-key-value bdb">
            <span>优惠：</span>
            <i>-￥
                <em id="discountAmount">0.00</em>
            </i>
        </div>
        <p class="br"></p>
        <ul class="odr-inf ui-whitespace bdt">
            <li>订单号：
                <span id="orderNo"></span>
            </li>
            <li>下单时间：
                <span id="orderTime"></span>
            </li>
            <li>支付时间：
                <span id="payTime"></span>
            </li>
            <li>支付方式：
                <span id="payType" data-type="wechat-h5"></span>
            </li>
        </ul>
    </section>
    </template>