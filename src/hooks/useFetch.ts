import { gitClient } from 'services/gitClient'

//Hook for fetchApi
export const useFetch = async (query: string) => {
  const response = await gitClient.get(query)

  return response.data
}
