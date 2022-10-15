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
import {
  containerUserVariants,
  itemUserVariants,
  loadingVariants
} from '../variants'

import logoImg from '../../../assets/img/gitHub-bg.svg'

export const User = ({ dataUser, loading, error }: UserProps) => {
  //console.log(dataUser)
  const theme = useGetTheme()

  const test = true
  if (loading) {
    return (
      <main className={style.loading}>
        <motion.img
          className={style.loading__img}
          src={logoImg}
          alt="Loading"
          variants={loadingVariants}
          initial="hidden"
          animate="visible"
        />
      </main>
    )
  }

  if (error) {
    //console.log(error?.networkError) //erro de internet
    if (error.networkError) {
      return <p>Error de internet</p>
    }
    return <p>Erro: User não encontrado</p>
  }

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
        <span>
          <UsersThree weight="bold" fontSize={20} /> {dataUser?.followers}
        </span>

        <span>
          <UserP weight="bold" fontSize={20} /> {dataUser?.following}
        </span>

        <span>
          <BookBookmark weight="bold" fontSize={20} /> {dataUser?.repositories}
        </span>
        <span>
          <MapPinLine weight="bold" fontSize={20} /> {dataUser?.location}
        </span>
      </motion.div>
    </motion.section>
  )
}
