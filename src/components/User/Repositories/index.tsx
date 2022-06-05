import { ReposType } from 'types/ReposType'
import { GitFork, WarningCircle, Star } from 'phosphor-react'
import {
  Description,
  Repo,
  Repos,
  Title,
  Topic,
  Topics,
  ValuesItens,
  WrapperRepos
} from './style'

interface RepositoriesProps {
  repos: ReposType[]
}
export const Repositories = ({ repos }: RepositoriesProps) => {
  return (
    <Repos>
      <WrapperRepos>
        {repos?.map((repo, key) => {
          return (
            <Repo key={key}>
              <a
                href={repo.html_url}
                target="_blanck"
                title={`Projeto ${repo.name}`}
              >
                <Title>{repo.name}</Title>

                <Description role="span">{repo.description}</Description>

                <ValuesItens>
                  <span role="span" title="Forks">
                    <GitFork weight="bold" />
                    {repo.forks}
                  </span>

                  <span role="span" title="Open Issues">
                    <WarningCircle weight="bold" />
                    {repo.open_issues}
                  </span>

                  <span role="span" title="Stars">
                    <Star weight="bold" />
                    {repo.stargazers_count}
                  </span>
                </ValuesItens>

                <Topics>
                  {repo.topics.map((topic, key) => {
                    return (
                      <Topic key={key} role="topics">
                        {topic}
                      </Topic>
                    )
                  })}
                </Topics>
              </a>
            </Repo>
          )
        })}
      </WrapperRepos>
    </Repos>
  )
}
