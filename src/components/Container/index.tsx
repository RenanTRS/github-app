import style from './Container.module.scss'
import { ContainerProps } from './types'

export const Container = ({ theme, children }: ContainerProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container__second}>{children}</div>
    </div>
  )
}
