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

interface StarredProps {
  starreds: ReposType[]
}

export const Starred = ({ starreds }: StarredProps) => {
  return (
    <Repos>
      <WrapperRepos>
        {starreds?.map((starred, key) => {
          return (
            <Repo key={key}>
              <a
                href={starred.html_url}
                target="_blanck"
                title={`Projeto ${starred.name}`}
              >
                <Title>{starred.name}</Title>

                <Description role="span">{starred.description}</Description>

                <ValuesItens>
                  <span role="span">
                    <GitFork weight="bold" />
                    {starred.forks}
                  </span>

                  <span role="span">
                    <WarningCircle weight="bold" />
                    {starred.open_issues}
                  </span>

                  <span role="span">
                    <Star weight="bold" />
                    {starred.stargazers_count}
                  </span>
                </ValuesItens>

                <Topics>
                  {starred.topics.map((topic, key) => {
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
