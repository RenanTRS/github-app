import { Provider } from 'react-redux'
import { store } from 'store'
import { User } from '..'

export const dataUserMock = {
  avatar: 'http://mockavatarsomeone.com',
  name: 'Someone',
  login: 'someone123',
  location: 'somelocation',
  url: 'someurl',
  followers: 2,
  following: 3,
  repositories: 4
}
export const MockProvider = () => {
  return (
    <Provider store={store}>
      <User dataUser={dataUserMock} />
    </Provider>
  )
}
