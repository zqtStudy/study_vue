import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './app.vue'
import router from './router.js'

import './css/index.css'
import '../lib/mui/dist/css/mui.css'
import '../lib/mui/dist/css/icons-extra.css'
import '../lib/mui/dist/fonts/mui-icons-extra.ttf'



let vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})