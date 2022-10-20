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
import { Repos } from './Repos'
import { ToggleRepos } from './ToggleRepos'

export const Main = ({ user }: MainProps) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<ValueProps>()
  const [isRepo, setIsRepo] = useState<boolean>(true)
  const { data, error, loading, resUser } = useGetData({ user })

  useEffect(() => {
    if (data) {
      setValue(resUser)
    }
  }, [data])

  const headerSubmit = (user: string) => {
    dispatch(addUser({ user: user }))
  }

  const handlerChangeRepos = (value: boolean) => {
    setIsRepo(value)
  }

  return (
    <main className={style.main}>
      <Header user={user} submit={headerSubmit} />

      <div className={style.main__container}>
        {loading ? (
          <Loading />
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
              <>
                <div>
                  <User dataUser={value?.userData!} />

                  <ToggleRepos isRepo={isRepo} change={handlerChangeRepos} />
                </div>

                <Repos
                  dataRepos={
                    isRepo
                      ? value?.reposData.repositories!
                      : value?.starsData.starredRepositories
                  }
                />
              </>
            )}
          </>
        )}
      </div>
    </main>
  )
}
