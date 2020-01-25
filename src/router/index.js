import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import NProgress from 'nprogress'
window.NProgress = NProgress

Vue.use(Router)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { layout: 'FullScreen' },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/easy-emailer',
    name: 'easy-emailer',
    component: () =>
      import(/* webpackChunkName: "easy-emailer" */ '../views/EasyEmailer.vue'),
  },
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => NProgress.done())

export default router
