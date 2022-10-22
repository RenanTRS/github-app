import style from './Button.module.scss'
import { ButtonProps } from './types'

const Search = ({ theme, styled, value }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${style.button} ${style.button__search}`}
      data-theme={theme}
      disabled={value === ''}
    >
      Buscar
    </button>
  )
}
const Header = ({ theme, value }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${style.button} ${style.button__header}`}
      data-theme={theme}
      disabled={value === ''}
    >
      Buscar
    </button>
  )
}

export const Button = { Search, Header }
