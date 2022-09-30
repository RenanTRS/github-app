import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { useGetTheme } from 'hooks/useGetTheme'
import { useGetUser } from 'hooks/useGetUser'

function App() {
  const theme = useGetTheme()
  const user = useGetUser()

  return (
    <>
      <Header theme={theme} user={user} />

      <Container theme={theme}>
        <Search theme={theme} />
      </Container>
    </>
  )
}

export default App
