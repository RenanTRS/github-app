import { motion } from 'framer-motion'
import style from './Main.module.scss'

import { MainProps, ValueProps } from './types'
import { User } from './User'

import { useEffect, useState } from 'react'
import { useGetData } from './hooks/useGetData'
import { Header } from 'components/Header'
import { useNavigate } from 'react-router-dom'

import logoImg from '../../assets/img/gitHub-bg.svg'
import { loadingVariants } from './variants'

export const Main = ({ user }: MainProps) => {
  const navigate = useNavigate()

  const [value, setValue] = useState<ValueProps>()
  const { data, error, loading, resUser } = useGetData({ user })

  useEffect(() => {
    //if user is empty
    if (!user) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    if (data) {
      setValue(resUser)
    }
  }, [data])

  if (error) {
    //console.log(error?.networkError) //erro de internet
    if (error.networkError) {
      return <p>Error de internet</p>
    }
    return <p>Erro: User não encontrado</p>
  }
  //let loading = true
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

  return (
    <main className={style.main}>
      <Header user={user} />

      <div className={style.main__container}>
        <User dataUser={value?.userData!} />
      </div>
    </main>
  )
}
