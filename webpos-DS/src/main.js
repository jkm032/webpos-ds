// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from './components/index'
import OdrHtml from './components/order-details'

const Nav1 = resolve => require(['./components/navs/nav1'], resolve)
const Nav2 = resolve => require(['./components/navs/nav2'], resolve)
const SideBar = resolve => require(['./components/navs/sideBar'], resolve)
const CartLeft = resolve => require(['./components/carts/cart-left'], resolve)
const CartRight = resolve => require(['./components/carts/cart-right'], resolve)

import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
    path: '/',
    component: index
}]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')