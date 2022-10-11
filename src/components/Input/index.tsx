import style from './Input.module.scss'
import { InputProps } from './types'

export const Input = ({ theme, value, change }: InputProps) => {
  return (
    <input
      type="text"
      className={style.input}
      placeholder="Pesquisar usuário..."
      value={value || ''}
      onChange={(e) => change(e.target.value)}
      data-theme={theme}
    />
  )
}
