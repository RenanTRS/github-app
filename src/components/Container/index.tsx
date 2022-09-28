import { ReactNode } from 'react'
import style from './Container.module.scss'

interface ContainerProps {
  theme: string
  children: ReactNode
}

export const Container = ({ theme, children }: ContainerProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container__second}>{children}</div>
    </div>
  )
}
