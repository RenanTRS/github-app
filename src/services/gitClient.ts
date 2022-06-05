import axios from 'axios'

export const gitClient = axios.create({
  baseURL: 'https://api.github.com/users/'
})
