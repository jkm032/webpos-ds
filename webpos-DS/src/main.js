// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store'


import Cart from './components/carts/cart'

// 因为不是首页需要展示的页面，所以使用懒加载
const Nav1 = resolve => require(['./components/navs/nav1'], resolve)
const Nav2 = resolve => require(['./components/navs/nav2'], resolve)

// order页面
const Order = resolve => require(['./components/order/order'], resolve)

// 交班结算页面
const Shift = resolve => require(['./components/shift/shift-settlement'], resolve)

//退货退款操作界面
const salesReturn = resolve => require(['./components/sales-return/sales-return'], resolve)


import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
    { path: '/', name: 'cart', component: Cart },
    { path: '/order', name: 'order', component: Order },
    { path: '/shift-settlement', name: 'shift', component: Shift },
    { path: '/order/order-sales-return', name: 'order-sales-return', component: Order },
    { path: '/sales-return', name: 'sales-return', component: salesReturn }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    store
}).$mount('#app')