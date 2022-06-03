import { GitContext } from 'context/GitProvider'
import { useContext } from 'react'

export const Starred = () => {
  const { starreds } = useContext(GitContext)
  return (
    <ul>
      {starreds?.map((starred, key) => {
        return (
          <li key={key}>
            <a
              href={starred.html_url}
              target="_blanck"
              title={`Projeto ${starred.name}`}
            >
              <h3>{starred.name}</h3>
              <p>{starred.description}</p>
              <p>{starred.forks}</p>
              <p>{starred.open_issues}</p>
              <p>{starred.stargazers_count}</p>
              <ul>
                {starred.topics.map((topic, key) => {
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
