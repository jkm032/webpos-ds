<template>
  <div class="header header-1">
    <span class="nav-btn" id="cartNav" title="菜单栏" @click="showSidebar" v-if="this.$route.path == '/'"></span>
    <!-- 下面的goback用于返回上一次打开的页面，会在非cart页面显示 -->
    <span class="goback" title="返回" @click="goBack" v-else></span>
    <!-- 下面的goback用于隐藏打开的侧边栏，只会在cart页面显示 -->
    <span class="goback hide" id="hideBack" title="返回" @click="hideSidebar"  v-if="this.$route.path == '/'"></span>
    <h2><span>华南城</span>&nbsp;收银台</h2>
    <div class="time-close">
      <div class="lf">
        <div class="user">您好 <i>MD001</i></div>
        <div class="time">2017/08/11 14:12:11 星期一</div>
      </div>
      <span class="close" title="退出"></span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  methods:{
    //显示侧边栏
    showSidebar: function(e) {
      if(! $('.sidebar').hasClass('sidebar-show')){
        $('#cart').append('<div class="pub-mask"></div>')
        $('.sidebar').addClass('sidebar-show');
        $(e.currentTarget).hide();
        $('#hideBack').show();

        let that = this;
        $('.pub-mask').click(function(){
          that.hideSidebar();
        })
      }
    },

    //隐藏侧边栏
    hideSidebar: function(e){
      $('.pub-mask').remove();
      $('.sidebar').removeClass('sidebar-show');
      $('#hideBack').hide();
      $('#cartNav').show();
    },

    goBack (){
      this.$router.back();
    },


  }
}
</script>

