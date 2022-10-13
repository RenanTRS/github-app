import { useGetTheme } from 'hooks/useGetTheme'
import { useGetUser } from 'hooks/useGetUser'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo'

import { Container } from 'components/Container'
import { Route, Routes } from 'react-router-dom'
import { Search } from 'components/Search'
import { Main } from 'components/Main'

function App() {
  const theme = useGetTheme()
  const user = useGetUser()

  return (
    <ApolloProvider client={client}>
      <Container theme={theme}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/profile" element={<Main user={user} />} />
          <Route path="*" element={<Search />} />
        </Routes>
      </Container>
    </ApolloProvider>
  )
}

export default App
