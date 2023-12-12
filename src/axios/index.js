import axios from 'axios'
import router from '@/router'

const authStore = localStorage.getItem("token");
let token = null;

if (authStore) {
  token = authStore;
}

const axiosIns = axios.create({
  // ================================
  // use BASE_URL_API
  baseURL: import.meta.env.VITE_BASE_URL_API,

  //   timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + token
  },
})
console.log('axiosIns', axiosIns)
console.log('import.meta.env.VITE_BASE_URL_API', import.meta.env.VITE_BASE_URL_API)
// Add a response, si no hay token, redirige a login o si se recibe un 401
axiosIns.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('error', error)
    if (error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
      console.log('error 401')
      localStorage.removeItem('authStore')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)


export default axiosIns
