import { gitClient } from 'services/gitClient'

export const useFetch = async (query: string) => {
  const response = await gitClient.get(query)

  return response.data
}
