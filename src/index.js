import Vue from 'vue'
import app from './app.vue'

import './assets/style/globel.css'

const root=document.createElement('div')
document.body.appendChild(root)
new Vue({
    render:(h)=>h(app)
}).$mount(root)