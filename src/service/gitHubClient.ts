import axios from 'axios'
export const gitHubClient = axios.create({
  baseURL: 'http://api.github.com/users'
})
