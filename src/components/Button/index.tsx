import { useEffect, useState } from 'react'
import style from './Button.module.scss'
import { ButtonProps } from './types'

export const Button = ({ theme, styled, value }: ButtonProps) => {
  const [valueInput, setValueInput] = useState('')

  useEffect(() => {
    setValueInput(value.trim())
  }, [value])

  return (
    <button
      type="submit"
      className={`${style.button} ${styled}`}
      data-theme={theme}
      disabled={valueInput.length === 0}
    >
      Buscar
    </button>
  )
}
