/* eslint no-use-before-define: 0 */ // --> OFF

// src/App.spec.js
import { mount } from '@vue/test-utils'
import { Response } from 'miragejs'
import { makeServer } from './server'
import App from './App.vue'

let server

beforeEach(() => {
  server = makeServer({ environment: 'test' })
})

afterEach(() => {
  server.shutdown()
})

it('shows the users from our server', async () => {
  server.create('user', { id: 1, name: 'Luke' })
  server.create('user', { id: 2, name: 'Leia' })

  const wrapper = mount(App)

  // let's wait for our vue component to finish loading data
  // we know it's done when the data-testid enters the dom.
  await waitFor(wrapper, '[data-testid="user-1"]')
  await waitFor(wrapper, '[data-testid="user-2"]')

  expect(wrapper.find('[data-testid="user-1"]').text()).toBe('Luke')
  expect(wrapper.find('[data-testid="user-2"]').text()).toBe('Leia')
})

it('shows a message if there are no users', async () => {
  // Don't create any users

  const wrapper = mount(App)
  await waitFor(wrapper, '[data-testid="no-users"]')

  expect(wrapper.find('[data-testid="no-users"]').text()).toBe('No users!')
})

it('handles error responses from the server', async () => {
  // Override Mirage's route handler for /users, just for this test
  server.get('/users', () => {
    return new Response(
      500,
      {},
      {
        error: 'The database is on vacation.',
      }
    )
  })

  const wrapper = mount(App)

  await waitFor(wrapper, '[data-testid="server-error"]')

  expect(wrapper.find('[data-testid="server-error"]').text()).toBe(
    'The database is on vacation.'
  )
})

// This helper method returns a promise that resolves
// once the selector enters the wrapper's dom.
const waitFor = function (wrapper, selector) {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      const userEl = wrapper.findAll(selector)
      if (userEl.length > 0) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  })
}
