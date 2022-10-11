import { memo, useState } from 'react'

import { RepoShow, StarShow, ShowRepo, UserStyle } from './old/style'

import { UserType } from 'types/UserType'
import { ReposType } from 'types/ReposType'
import { UserHeader } from './old/UserHeader'
import { Repositories } from './old/Repositories'
import { Starred } from './old/Starred'

interface UserProps {
  user: UserType
  repos: ReposType[]
  starreds: ReposType[]
}

export const User = memo(({ user, repos, starreds }: UserProps) => {
  const [show, setShow] = useState<boolean>(true)
  return (
    <UserStyle>
      <UserHeader user={user} />

      <ShowRepo>
        <RepoShow shad={show} onClick={() => setShow(true)}>
          Repositórios
        </RepoShow>

        <StarShow shad={show} onClick={() => setShow(false)}>
          Starreds
        </StarShow>
      </ShowRepo>

      {show ? <Repositories repos={repos} /> : <Starred starreds={starreds} />}
    </UserStyle>
  )
})
