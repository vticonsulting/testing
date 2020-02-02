import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './new-routes.js'
import { bustCache } from '@/bust-cache.js'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

export function beforeEach (to, from, next) {
  if (to.matched.some(record => record.meta.shouldBustCache)) {
    bustCache()
  }
  next()
}

router.beforeEach((to, from, next) => beforeEach(to, from, next))

export default router
