import { gitClient } from 'services/gitClient'

export const useCheckStatusApi = async (value: string) => {
  let isExist = true
  const api = `https://api.github.com/users/${value}`

  const response = await gitClient.get(api).catch(() => {
    isExist = false
  })

  return { isExist }
}
