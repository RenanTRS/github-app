import { gql } from '@apollo/client'

export const GET_USER = gql`
  query ($user: String!) {
    user(login: $user) {
      avatarUrl
      name
      bio
      login
      location
      url
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 30, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          description
          url
          issues(states: OPEN) {
            totalCount
          }
          forkCount
          stargazerCount
          repositoryTopics(last: 5) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`

/* export const GET_USER = gql`
  query ($user: String!) {
    user(login: $user) {
      avatarUrl
      name
      bio
      login
      location
      url
      followers {
      totalCount
    }
    following {
      totalCount
    }
      repositories(last: 5, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          description
          issues {
            totalCount
          }
          forkCount
          stargazerCount
          repositoryTopics(last: 5) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
      starredRepositories(
        last: 50
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          description
          issues {
            totalCount
          }
          forkCount
          stargazerCount
          repositoryTopics(last: 5) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`
 */
