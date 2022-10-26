import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: string
  value: string
  size?: 'sm' | 'lg'
}
