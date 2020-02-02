import { mount, createLocalVue } from '@vue/test-utils'
import NewApp from '@/NewApp.vue'
import VueRouter from 'vue-router'
import NestedRoute from '@/router/views/NestedRoute.vue'
import routes from '@/router/new-routes.js'

const localVue = createLocalVue()
localVue.use(VueRouter)

jest.mock('@/router/views/NestedRoute.vue', () => ({
  name: 'NestedRoute',
  render: h => h('div'),
}))

describe('NewApp', () => {
  it('renders a child component via routing', async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(NewApp, {
      localVue,
      router,
    })

    router.push('/nested-route')
    await wrapper.vm.$nextTick()

    expect(wrapper.find(NestedRoute).exists()).toBe(true)
  })
})
