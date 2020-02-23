import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

api.interceptors.response.use(function(response) {
  return response
}, function(error) {
  if (error.response && error.response.data && error.response.data.error)
    return Promise.reject(new Error(error.response.data.error))
  return Promise.reject(error)
})

export const userLocation = {
  async getData(params) {
    const response = await api.get('/user-location', { params })
    return response.data.result
  }
}

export const weatherForecast = {
  async getData(params) {
    const response = await api.get('/weather-forecast', { params })
    return response.data.result
  }
}
