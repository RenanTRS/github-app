import { GitContext } from 'context/GitProvider'
import { useContext } from 'react'

export const UserHeader = () => {
  const { user } = useContext(GitContext)
  return (
    <>
      <img src={user?.avatar_url} alt={user?.login} />
      <p>{user?.name}</p>
      <p>{user?.login}</p>
      <p>{user?.location}</p>
      <p>Followers: {user?.followers}</p>
      <p>Following: {user?.following}</p>
      <p>Repositórios: {user?.public_repos}</p>
    </>
  )
}
