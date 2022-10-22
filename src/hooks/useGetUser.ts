import { useSelector } from 'react-redux'

export const useGetUser = () => {
  const user = useSelector((state: any) => state.user.value.user)

  return user
}
