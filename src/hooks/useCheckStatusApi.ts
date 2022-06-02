import { gitHubClient } from 'service/gitHubClient'

export const useCheckStatusApi = async (value: string) => {
  let status = 0

  try {
    const response = await gitHubClient.get(value)

    status = response.status

    return { status }
  } catch {
    status = 404

    if (value === '') {
      status = 0
    }

    return { status }
  }
}
