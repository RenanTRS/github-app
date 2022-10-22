import { useQuery } from '@apollo/client'
import { UseGetDataProps, UseQueryGraph } from '../types'
import { GET_USER } from 'graphql/queries'

export const useGetData = ({ user }: UseGetDataProps) => {
  const { data, loading, error } = useQuery<{ user: UseQueryGraph }>(GET_USER, {
    variables: { user }
  })

  const userData = {
    avatar: data?.user.avatarUrl,
    name: data?.user.name,
    login: data?.user.login,
    location: data?.user.location,
    url: data?.user.url,
    followers: data?.user.followers.totalCount,
    following: data?.user.following.totalCount,
    repositories: data?.user.repositories.totalCount
  }

  const reposData = {
    repositories: data?.user.repositories.nodes
  }
  const starsData = {
    starredRepositories: data?.user.starredRepositories.nodes
  }

  const resUser = {
    userData,
    reposData,
    starsData
  }
  return { data, resUser, loading, error }
}
