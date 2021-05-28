import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/populares',
    name: 'Populares',
    component: () => import(/* webpackChunkName: "Populares" */ '../views/Populares.vue')
  },
  {
    path: '/movie/:id', /*ya que necesitamos acceder a la vista primero*/
    name: 'Movie',
    component: () => import(/* webpackChunkName: "Movie" */ '../views/Movie.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/valoradas',
    name: 'Valoradas',
    component: () => import(/* webpackChunkName: "Valoradas" */ '../views/Valoradas.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
