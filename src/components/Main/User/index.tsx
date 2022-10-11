import { UserProps } from './types'

export const User = ({ dataUser }: UserProps) => {
  //console.log(dataUser)
  return (
    <section className="user">
      <div className="user__data">
        <img src={dataUser?.avatar} alt="user" />
        <span>{dataUser?.name}</span>
        <a href={dataUser?.url} target="_blank">
          {dataUser?.login}
        </a>
      </div>
      <div className="user__media">
        <span>followers {dataUser?.followers}</span>

        <span>following {dataUser?.following}</span>

        <span>repositories {dataUser?.repositories}</span>
        <span>location {dataUser?.location}</span>
      </div>
    </section>
  )
}
