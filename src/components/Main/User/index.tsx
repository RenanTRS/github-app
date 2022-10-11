import { UserProps } from './types'
import style from './User.module.scss'
import { useGetTheme } from '../../../hooks/useGetTheme'
import {
  UsersThree,
  User as UserP,
  BookBookmark,
  MapPinLine
} from 'phosphor-react'

export const User = ({ dataUser }: UserProps) => {
  //console.log(dataUser)
  const theme = useGetTheme()
  return (
    <section className={style.user} data-theme={theme}>
      <div className={style.user__data}>
        <img
          src={dataUser?.avatar}
          alt="user"
          title={dataUser?.login}
          className={style.user__data_img}
        />
        <span className={style.user__data_name}>{dataUser?.name}</span>
        <a
          href={dataUser?.url}
          target="_blank"
          className={style.user__data_user}
          data-theme={theme}
        >
          {dataUser?.login}
        </a>
      </div>
      <div className="user__media">
        <span>
          <UsersThree /> {dataUser?.followers}
        </span>

        <span>
          <UserP /> {dataUser?.following}
        </span>

        <span>
          <BookBookmark /> {dataUser?.repositories}
        </span>
        <span>
          <MapPinLine /> {dataUser?.location}
        </span>
      </div>
    </section>
  )
}
