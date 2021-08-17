import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Tasks from './components/Tasks.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'


Vue.use(VueRouter);


Vue.config.productionTip = false

const router=new VueRouter({
  routes:[
    {path: '/' , component:Home},
    {path:'/tasks' , component:Tasks},
    {path:'/services' , component:Services},
    {path:'/contact' , component:Contact},

  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
