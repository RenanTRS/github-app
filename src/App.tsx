import { useGetTheme } from 'hooks/useGetTheme'
import { useGetUser } from 'hooks/useGetUser'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo'

import { Header } from 'components/Header'
import { Container } from 'components/Container'
import { Search } from 'components/Search'
import { Main } from 'components/Main'

function App() {
  const theme = useGetTheme()
  const user = useGetUser()

  return (
    <ApolloProvider client={client}>
      <Header theme={theme} user={user} />

      <Container theme={theme}>
        <Search theme={theme} />
        {user !== null && <Main user={user} />}
      </Container>
    </ApolloProvider>
  )
}

export default App
