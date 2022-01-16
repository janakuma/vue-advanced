import Vue from 'vue'
import VueRouter from 'vue-router'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NewsView from '../views/NewsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: NewsView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
