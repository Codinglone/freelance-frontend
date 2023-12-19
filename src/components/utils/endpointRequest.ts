import { apiUrl } from './env'
import { freelanceToken } from './enum'
import axios from 'axios'
//
const token = localStorage.getItem(freelanceToken.userToken)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json;',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`
}
const api = axios.create({
  baseURL: apiUrl,
  headers
})

export default api
