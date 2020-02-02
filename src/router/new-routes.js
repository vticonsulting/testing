import NestedRoute from '@/router/views/NestedRoute.vue'

export default [
  {
    path: '/nested-route',
    component: NestedRoute,
    meta: {
      shouldBustCache: true,
    },
  },
]
