import { MainProps, ValueProps } from './types'
import { User } from './User'

import { useEffect, useState } from 'react'
import { useGetData } from './hooks/useGetData'
import { Header } from 'components/Header'
import { useNavigate } from 'react-router-dom'

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

  console.log(value?.reposData)

  if (error) return <p>Erro: </p>
  if (loading) return <p>Loading:</p>

  return (
    <main>
      <Header user={user} />
      <User dataUser={value?.userData!} />
    </main>
  )
}
