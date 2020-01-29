import Vue from 'vue'
import AddContactsButtons from '.'

describe('AddContactsButtons.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AddContactsButtons)
    const vm = new Constructor().$mount()
    expect(vm.el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
