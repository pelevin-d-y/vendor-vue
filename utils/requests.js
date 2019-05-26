import axios from 'axios'
///'http://localhost:8080'
const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api', //example
  timeout: 50000,
  headers: {},
  withCredentials: false
})

export const getUsersRequests = () => {
  return axiosInstance.get('/users')
    .then(response => response.data)
    .catch(error => console.log('getUsersRequests request error', error))
}

