import { memo, useState } from 'react'
import { Repositories } from './Respositories'
import { Starred } from './Starred'
import { UserHeader } from './UserHeader'

export const User = memo(() => {
  const [show, setShow] = useState<boolean>(true)
  return (
    <>
      <UserHeader />
      <div>
        <span onClick={() => setShow(!show)}>Repositories</span>
        <span onClick={() => setShow(!show)}>Starreds</span>
      </div>
      {show ? <Repositories /> : <Starred />}
    </>
  )
})
