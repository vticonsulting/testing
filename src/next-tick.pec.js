import Vue from 'vue'

describe('NextTick errors', () => {
  // this will not be caught
  it('will time out', done => {
    Vue.nextTick(() => {
      expect(true).toBe(false)
      done()
    })
  })

  // // the three following tests will work as expected
  // it('will catch the error using done', done => {
  //   Vue.config.errorHandler = done
  //   Vue.nextTick(() => {
  //     expect(true).toBe(false)
  //     done()
  //   })
  // })

  // it('will catch the error using a promise', () => {
  //   return Vue.nextTick().then(function () {
  //     expect(true).toBe(false)
  //   })
  // })

  // it('will catch the error using async/await', async () => {
  //   await Vue.nextTick()
  //   expect(true).toBe(false)
  // })
})
