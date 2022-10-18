import style from './Input.module.scss'
import { InputProps } from './types'

export const Input = ({ theme, value, change }: InputProps) => {
  const handlerChange = (value: string) => {
    change(value.trim())
  }

  return (
    <input
      type="text"
      className={style.input}
      placeholder="Pesquisar usuário..."
      value={value || ''}
      onChange={(e) => handlerChange(e.target.value)}
      data-theme={theme}
    />
  )
}
