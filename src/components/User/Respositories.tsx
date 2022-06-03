import { GitContext } from 'context/GitProvider'
import { useContext } from 'react'

export const Repositories = () => {
  const { repos } = useContext(GitContext)
  return (
    <ul>
      {repos?.map((repo, key) => {
        return (
          <li key={key}>
            <a
              href={repo.html_url}
              target="_blanck"
              title={`Projeto ${repo.name}`}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>{repo.forks}</p>
              <p>{repo.open_issues}</p>
              <p>{repo.stargazers_count}</p>
              <ul>
                {repo.topics.map((topic, key) => {
                  return <li key={key}>{topic}</li>
                })}
              </ul>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
