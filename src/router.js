import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import homeContent from './components/tabbar/home.vue'
import memberContent from './components/tabbar/member.vue'
import cartContent from './components/tabbar/cart.vue'
import searchContent from './components/tabbar/search.vue'


let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homeContent },
        { path: '/member', component: memberContent },
        { path: '/cart', component: cartContent },
        { path: '/search', component: searchContent }
    ],
    linkActiveClass: 'mui-active'
})

export default router