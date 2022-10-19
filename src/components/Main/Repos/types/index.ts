interface StarNode {
  topic: {
    name: string
  }
}
interface ReposNode {
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

export interface ReposProps {
  dataRepos?: ReposNode[]
}
