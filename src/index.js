import Vue from 'vue'
import app from './app.vue'


const root=document.createElement('div')
document.body.appendChild(root)
new Vue({
    render:(h)=>h(app)
}).$mount(root)