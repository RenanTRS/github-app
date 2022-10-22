import { BrowserRouter } from 'react-router-dom'
import style from './Container.module.scss'
import { ContainerProps } from './types'

export const Container = ({ theme, children }: ContainerProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </div>
  )
}
