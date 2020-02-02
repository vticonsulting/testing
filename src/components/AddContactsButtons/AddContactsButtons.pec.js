import Vue from 'vue'
import AddContactsButtons from '.'

describe('AddContactsButtons.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AddContactsButtons)
    const vm = new Constructor().$mount()
    console.log(vm.$el)
    expect(vm.$el.querySelector('[data-testid]').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
