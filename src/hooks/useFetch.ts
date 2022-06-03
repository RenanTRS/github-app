import axios from 'axios'

const gitclient = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export const useFetch = async (query: string) => {
  const response = await gitclient.get(query)

  return response.data
}
