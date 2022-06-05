import { Creadential, InfoUser, Profile } from './style'
import { MapPinLine, UsersThree, BookBookmark, User } from 'phosphor-react'
import { UserType } from 'types/UserType'

interface UserHeraderProps {
  user: UserType
}
export const UserHeader = ({ user }: UserHeraderProps) => {
  return (
    <Profile>
      <img src={user?.avatar_url} alt={user?.login} data-testid="img" />

      <Creadential>
        <h2>{user?.name}</h2>
        <a href={user?.html_url} target="_blanck">
          {user?.login}
        </a>
      </Creadential>

      <InfoUser>
        <span role="infoUser" title="Seguidores">
          <UsersThree size={20} />
          {user?.followers}
        </span>

        <span role="infoUser" title="Seguindo">
          <User size={20} />
          {user?.following}
        </span>

        <span role="infoUser" title="Repositórios">
          <BookBookmark size={20} />
          {user?.public_repos}
        </span>

        <span role="infoUser" title="Localidade">
          <MapPinLine size={20} />
          {user?.location}
        </span>
      </InfoUser>
    </Profile>
  )
}
