import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`
  },
  cache: new InMemoryCache()
})
