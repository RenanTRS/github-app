import { gitClient } from 'services/gitClient'

export const useCheckStatusApi = async (value: string) => {
  //check status
  let isExist = true
  const api = `https://api.github.com/users/${value}`

  const response = await gitClient.get(api).catch(() => {
    isExist = false
  })

  return { isExist }
}
