import { Main, Section } from './style'
import { Header } from '../Header'
import { useCheckStatusApi } from 'hooks/useCheckStatusApi'
import { useState, useContext } from 'react'
import { User } from 'components/User'
import { GitContext } from 'context/GitProvider'

import imgBg from 'assets/img/gitHub-bg.svg'

export const Container = () => {
  const [initial, setInitial] = useState<boolean>(true)
  const [status, setStatus] = useState<boolean>(false)
  const { user, repos, starreds, getApi } = useContext(GitContext)

  const getData = async (value: string) => {
    if (value === '') {
      setInitial(true)
      return
    }

    const { isExist } = await useCheckStatusApi(value)

    setStatus(isExist)
    setInitial(false)
    getApi(value)
  }

  return (
    <Main>
      <Header onclick={getData} />

      <Section image={imgBg}>
        {initial ? (
          <></>
        ) : (
          <>
            {status ? (
              <User user={user!} repos={repos!} starreds={starreds!} />
            ) : (
              <p>Não existe</p>
            )}
          </>
        )}
      </Section>
    </Main>
  )
}
