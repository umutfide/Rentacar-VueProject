import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Content from "@/components/Content";
import Products from "@/views/Products";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Content
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Products,
    props:true
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
