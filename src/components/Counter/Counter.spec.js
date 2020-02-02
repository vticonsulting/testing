import Vue from 'vue'
// Import the `mount()` method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)
  // You can access the actual Vue instance via `wrapper.vm`
  // const vm = wrapper.vm
  // console.log(vm)

  // To inspect the wrapper deeper just log it to the console
  // and your adventure with the Vue Test Utils begins
  // console.log(wrapper)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('button click should increment the count text', async () => {
    expect(wrapper.text()).toContain('1')
    const button = wrapper.find('button')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('2')
  })
})
