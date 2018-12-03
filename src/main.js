import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu  from "./components/Menu"
import Admin  from "./components/Admin"
import About  from "./components/about/About"
import Login  from "./components/Login"
import Register  from "./components/Register"


// 二级路由
import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrederingGuide from "./components/about/OrederingGuide"
Vue.use(VueRouter)


// 三级路由
import Phone from "./components/about/contact/Phone"
import persoName from "./components/about/contact/persoName"
const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin},
  {path:'/about',name:"aboutLink",redirect:'/about/contact',component:About,children:[
    {path:'/about/contact',name:"contactLink",redirect:'/personname',component:Contact,children:[
      {path:'/phone',name:"phoneNumber",component:Phone},
      {path:'/personname',name:"persoName",component:persoName},
    ]},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/history',name:"historyLink",component:History},
    {path:'/orederingGuide',name:"orderingGuideLink",component:OrederingGuide},
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  {path:'*',redirect:'/'},
]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
