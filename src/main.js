import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './css/index.css'
import '../lib/mui/dist/css/mui.css'
import app from './app.vue'


let vm = new Vue({
    el: '#app',
    render: c => c(app)
})