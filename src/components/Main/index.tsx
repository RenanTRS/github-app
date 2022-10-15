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

  //if user is empty
  if (!user) {
    navigate('/')
  }

  useEffect(() => {
    if (data) {
      setValue(resUser)
    }
  }, [data])

  return (
    <main className={style.main}>
      <Header user={user} />

      <div className={style.main__container}>
        <User dataUser={value?.userData!} loading={loading} error={error} />
      </div>
    </main>
  )
}
