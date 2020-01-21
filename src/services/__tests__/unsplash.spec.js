import mockAxios from 'axios'
import unsplash from '../unsplash'

require('dotenv').config()

it('calls axios and returns images', async () => {
  // setup (arrange)
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ['cute.jpg'],
      },
    })
  )

  // work (act)
  const images = await unsplash('kittens')

  // assertions / expectations (assert)
  expect(images).toEqual(['cute.jpg'])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://api.unsplash.com/search/photos',
    {
      params: {
        client_id: process.env.APP_UNSPLASH_TOKEN,
        query: 'kittens',
      },
    }
  )
})
