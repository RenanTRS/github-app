import { useGetTheme } from 'hooks/useGetTheme'

import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo'

import { Container } from 'components/Container'
import { AnimateRoutes } from 'components/AnimateRoutes'

function App() {
  const theme = useGetTheme()

  return (
    <ApolloProvider client={client}>
      <Container theme={theme}>
        <AnimateRoutes />
      </Container>
    </ApolloProvider>
  )
}

export default App
