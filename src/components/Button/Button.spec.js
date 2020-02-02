import { shallowMount } from '@vue/test-utils'
import BaseButton from '.'

describe('@/components/Button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    const { element } = shallowMount(BaseButton, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
