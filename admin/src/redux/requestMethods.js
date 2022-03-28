import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'

let localItem = localStorage.getItem('persist:root')
const TOKEN = localItem?  JSON.parse(JSON.parse(localItem).user).currentUser.accessToken : '' 

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`}
})