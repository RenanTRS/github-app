import { ApolloError } from '@apollo/client'

export interface UserProps {
  dataUser: {
    avatar?: string
    name?: string
    login?: string
    location?: string
    url?: string
    followers?: number
    following?: number
    repositories?: number
  }
  loading: boolean
  error?: ApolloError
}
