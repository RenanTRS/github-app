import style from './ToggleRepos.module.scss'

import { useGetTheme } from 'hooks/useGetTheme'
import { motion } from 'framer-motion'
import { ToggleVariants } from '../variants'

interface ToggleReposProps {
  isRepo: boolean
  change: (value: boolean) => void
}

export const ToggleRepos = ({ isRepo, change }: ToggleReposProps) => {
  const theme = useGetTheme()

  return (
    <motion.section
      className={style.toggle}
      variants={ToggleVariants}
      initial="hidden"
      animate="visible"
    >
      <span
        className={`${isRepo ? style.active : ''}`}
        onClick={() => change(true)}
        data-theme={theme}
      >
        Repositories
      </span>
      <span
        className={`${!isRepo ? style.active : ''}`}
        onClick={() => change(false)}
        data-theme={theme}
      >
        Starreds
      </span>
    </motion.section>
  )
}
