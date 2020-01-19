import mockAxios from 'axios'
import unsplash from './unsplash'
require('dotenv').config()

console.log(process.env.APP_UNSPLASH_TOKEN)

// it('calls axios and returns images', () => {
//   const images = unsplash('kittens')
//   console.log(images)
// })

it('calls axios and returns images', async () => {
  // setup (anything you need to do pre-test) [arrange]
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ['cute.jpg'],
      },
    })
  )

  // work [act]
  const images = await unsplash('kittens')
  // console.log(images)

  // assertions / expects [assert]
  expect(images).toEqual(['cute.jpg'])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  // expect(mockAxios.get).toHaveBeenCalledWith('')
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
