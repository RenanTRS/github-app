export interface MainProps {
  user: string
}
//hook main
export interface ValueProps {
  userData: {
    avatar?: string
    name?: string
    login?: string
    location?: string
    url?: string
    followers?: number
    following?: number
    repositories?: number
  }
  reposData: {
    repositories?: ReposNode[]
  }
  starsData: {
    starredRepositories?: ReposNode[]
  }
}

interface StarNode {
  topic: {
    name: string
  }
}
export interface ReposNode {
  name: string
  description: string
  url: string
  issues: {
    totalCount: number
  }
  forkCount: number
  stargazerCount: number
  repositoryTopics: {
    nodes: StarNode[]
  }
}

export interface UseGetDataProps {
  user: string
}
export interface UseQueryGraph {
  avatarUrl: string
  name: string
  login: string
  location: string
  url: string
  followers: {
    totalCount: number
  }
  following: {
    totalCount: number
  }
  repositories: {
    totalCount: number
    nodes: ReposNode[]
  }
  starredRepositories: {
    totalCount: number
    nodes: ReposNode[]
  }
}
