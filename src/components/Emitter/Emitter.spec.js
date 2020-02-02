import Emitter from '.'
import { shallowMount } from '@vue/test-utils'

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()
    wrapper.vm.emitEvent()

    // console.log(wrapper.emitted().myEvent)

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })

  it('emits an event without mounting the component', () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})
