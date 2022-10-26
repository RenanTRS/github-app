import clsx from 'clsx'
import style from './Button.module.scss'
import { ButtonProps } from './types'

export const Button = ({ theme, value, size = 'sm' }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={clsx(`${style.button}`, {
        [`${style.button__search}`]: size === 'lg',
        [`${style.button__header}`]: size === 'sm'
      })}
      data-theme={theme}
      disabled={value === ''}
    >
      Buscar
    </button>
  )
}
