import axios from 'axios'

// ACCESS_KEY: 00ad9b56c5998633216cab9393e30c6b97a6e3ba4bff0061c11b243c0144993f
// SECRET_KEY: 796357e64bcdcb3793280f9adccf6698481733b0c63eced279162c51052f99ab
export default async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: process.env.APP_UNSPLASH_TOKEN,
      query: term,
    },
  })

  return response.data.results
}
