import { UserProps } from './types'
import style from './User.module.scss'
import { useGetTheme } from '../../../hooks/useGetTheme'
import {
  UsersThree,
  User as UserP,
  BookBookmark,
  MapPinLine
} from 'phosphor-react'
import { motion } from 'framer-motion'
import { containerUserVariants, itemUserVariants } from '../variants'

export const User = ({ dataUser }: UserProps) => {
  const theme = useGetTheme()

  return (
    <motion.section
      className={style.user}
      data-theme={theme}
      variants={containerUserVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={style.user__data} variants={itemUserVariants}>
        <img
          src={dataUser?.avatar}
          alt="user"
          title={dataUser?.login}
          className={style.user__data_img}
          data-testid="avatar-user"
        />

        <span className={style.user__data_name}>{dataUser?.name}</span>

        <a
          href={dataUser?.url}
          target="_blank"
          className={style.user__data_user}
          data-theme={theme}
        >
          {dataUser?.login}
        </a>
      </motion.div>

      <motion.div className={style.user__media} variants={itemUserVariants}>
        <span title="Followers">
          <UsersThree weight="bold" fontSize={20} /> {dataUser?.followers}
        </span>

        <span title="Following">
          <UserP weight="bold" fontSize={20} /> {dataUser?.following}
        </span>

        <span title="Repositories">
          <BookBookmark weight="bold" fontSize={20} /> {dataUser?.repositories}
        </span>
        <span title="Location">
          <MapPinLine weight="bold" fontSize={20} /> {dataUser?.location}
        </span>
      </motion.div>
    </motion.section>
  )
}
