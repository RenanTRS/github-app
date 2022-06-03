import { useFetch } from 'hooks/useFetch'
import { createContext, ReactNode, useState } from 'react'

interface ProviderProp {
  children: ReactNode
}
interface GitType {
  user?: UserType | null
  getApi(user: string): void
  repos?: ReposType[]
  starreds?: ReposType[]
}
type UserType = {
  avatar_url: string
  name: string
  login: string
  location: string
  followers: number
  following: number
  public_repos: number
}
type ReposType = {
  name: string
  html_url: string
  description: string
  forks: number
  open_issues: number
  homepage: string
  topics: string[]
  stargazers_count: number
}

export const GitContext = createContext({} as GitType)

export const GitProvider = ({ children }: ProviderProp) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [repos, setRepos] = useState<ReposType[]>([])
  const [starreds, setStarreds] = useState<ReposType[]>([])

  const getApi = async (user: string) => {
    const data = await useFetch(user)
    setUser(data)

    const repos = await useFetch(`${user}/repos`)
    setRepos(repos)

    const stars = await useFetch(`${user}/starred`)
    setStarreds(stars)
  }

  return (
    <GitContext.Provider value={{ user, getApi, repos, starreds }}>
      {children}
    </GitContext.Provider>
  )
}
