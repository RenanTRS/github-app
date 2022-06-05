import { memo, useState } from 'react'
import { Repositories } from './Repositories'
import { Starred } from './Starred'
import { RepoShow, StarShow, ShowRepo, UserStyle } from './style'
import { UserHeader } from './UserHeader'
import { UserType } from 'types/UserType'
import { ReposType } from 'types/ReposType'

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
          Repositories
        </RepoShow>

        <StarShow shad={show} onClick={() => setShow(false)}>
          Starreds
        </StarShow>
      </ShowRepo>

      {show ? <Repositories repos={repos} /> : <Starred starreds={starreds} />}
    </UserStyle>
  )
})
