import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`
  },
  cache: new InMemoryCache()
})
