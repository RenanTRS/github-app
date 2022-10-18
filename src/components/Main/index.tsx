import { motion } from 'framer-motion'
import style from './Main.module.scss'

import { MainProps, ValueProps } from './types'
import { User } from './User'

import { useEffect, useState } from 'react'
import { useGetData } from './hooks/useGetData'
import { Header } from 'components/Header'

import logoImg from '../../assets/img/gitHub-bg.svg'
import { loadingVariants } from './variants'
import { Warning } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { addUser } from 'store/reducer/userReducer'

export const Main = ({ user }: MainProps) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<ValueProps>()
  const { data, error, loading, resUser } = useGetData({ user })

  useEffect(() => {
    if (data) {
      setValue(resUser)
    }
  }, [data])

  const headerSubmit = (user: string) => {
    dispatch(addUser({ user: user }))
  }
  return (
    <main className={style.main}>
      <Header user={user} submit={headerSubmit} />

      <div className={style.main__container}>
        {loading ? (
          <div className={style.loading}>
            <motion.img
              className={style.loading__img}
              src={logoImg}
              alt="Loading"
              variants={loadingVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        ) : (
          <>
            {error ? (
              <div>
                {error.networkError ? (
                  <p>
                    <Warning weight="bold" /> Erro de conexão
                  </p>
                ) : (
                  <p>
                    <Warning weight="bold" /> Usuário não encontrado
                  </p>
                )}
              </div>
            ) : (
              <User dataUser={value?.userData!} />
            )}
          </>
        )}
      </div>
    </main>
  )
}
