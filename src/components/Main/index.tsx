import style from './Main.module.scss'

import { MainProps, ValueProps } from './types'

import { useEffect, useState } from 'react'
import { useGetData } from './hooks/useGetData'

import { useDispatch } from 'react-redux'
import { addUser } from 'store/reducer/userReducer'

import { Header } from 'components/Header'
import { Loading } from 'components/Loading'
import { ErrorG } from 'components/ErrorG'
import { User } from './User'
import { ToggleRepos } from './ToggleRepos'
import { Repos } from './Repos'

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
              <>
                <ErrorG error={error} />
              </>
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
