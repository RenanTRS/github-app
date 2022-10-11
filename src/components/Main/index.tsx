import { MainProps, ValueProps } from './types'
import { User } from './User'

import { useEffect, useState } from 'react'
import { useGetData } from './hooks/useGetData'

export const Main = ({ user }: MainProps) => {
  const [value, setValue] = useState<ValueProps>()
  const { data, error, loading, resUser } = useGetData({ user })

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
      <User dataUser={value?.userData!} />
    </main>
  )
}
