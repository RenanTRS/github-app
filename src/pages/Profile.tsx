import { Main } from 'components/Main'
import { useGetUser } from 'hooks/useGetUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
  const navigate = useNavigate()
  const user = useGetUser()

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
  }, [user])

  return <Main user={user} />
}
