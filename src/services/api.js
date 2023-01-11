import axios from 'axios'

const api = axios.create({
  baseURL: `https://test-dev.tikal.tech`
})

api.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('devtest:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
  
})

export default api
