import style from './Button.module.scss'
import { ButtonProps } from './types'

export const Button = ({ theme, click, styled }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${style.button} ${styled}`}
      onClick={click}
      data-theme={theme}
    >
      Buscar
    </button>
  )
}
