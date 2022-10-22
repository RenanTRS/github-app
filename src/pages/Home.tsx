import { Search } from 'components/Search'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from 'store/reducer/userReducer'

export const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = (user: string) => {
    dispatch(addUser({ user: user }))
    navigate('/profile')
  }

  return <Search submit={submit} />
}
