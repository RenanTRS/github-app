import { useEffect, useState } from 'react'
import style from './Button.module.scss'
import { ButtonProps } from './types'

export const Button = ({ theme, styled, value }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${style.button} ${styled}`}
      data-theme={theme}
      disabled={value === ''}
    >
      Buscar
    </button>
  )
}
