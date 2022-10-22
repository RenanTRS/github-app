export interface UserGQL {
  user: {
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
    }
  }
}
