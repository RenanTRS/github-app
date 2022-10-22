import { useGetTheme } from 'hooks/useGetTheme'
import { GitFork, Star, WarningCircle } from 'phosphor-react'
import { motion } from 'framer-motion'
import style from './Repos.module.scss'
import { containerReposVariants } from '../variants'
import { ReposProps } from './types'

export const Repos = ({ dataRepos }: ReposProps) => {
  const theme = useGetTheme()

  return (
    <motion.section
      className={style.repos}
      data-theme={theme}
      variants={containerReposVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className={style.repos__list}>
        {dataRepos?.map((repo, key) => {
          return (
            <motion.li
              key={key}
              className={style.repos__container}
              data-theme={theme}
              whileHover={{ scale: 1.1 }}
            >
              <div className={style.repos__cred}>
                <a
                  href={repo.url}
                  target="_blank"
                  className={style.repos__cred_name}
                  data-theme={theme}
                  data-testid="name"
                >
                  {repo.name}
                </a>

                <p
                  className={style.repos__cred_description}
                  data-testid="description"
                >
                  {repo.description}
                </p>
              </div>

              <div className={style.repos__states}>
                <span title={`Forks: ${repo.forkCount}`} data-testid="states">
                  <GitFork weight="thin" size={18} />
                  {repo.forkCount}
                </span>

                <span
                  title={`Open Issues: ${repo.issues.totalCount}`}
                  data-testid="states"
                >
                  <WarningCircle weight="thin" size={18} />
                  {repo.issues.totalCount}
                </span>

                <span
                  title={`Stars: ${repo.stargazerCount}`}
                  data-testid="states"
                >
                  <Star weight="thin" size={18} />
                  {repo.stargazerCount}
                </span>
              </div>

              {repo.repositoryTopics.nodes.length > 0 && (
                <div className={style.repos__topics}>
                  <ul className={style.repos__topics_container}>
                    {repo.repositoryTopics.nodes.map((topic, key) => {
                      return (
                        <li key={key} className={style.repos__topics_topic}>
                          <span data-testid="topics">{topic.topic.name}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </motion.li>
          )
        })}
      </ul>
    </motion.section>
  )
}
