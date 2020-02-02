import { shallowMount } from '@vue/test-utils'
import Bilingual from '.'

describe('Bilingual', () => {
  it('renders successfully', () => {
    // const wrapper = shallowMount(Bilingual, {
    //   mocks: {
    //     $t: (msg) => msg,
    //   },
    // })
    const wrapper = shallowMount(Bilingual)

    // console.log(wrapper.html())

    expect(wrapper.find('.hello').text()).not.toBe('')
  })
})
