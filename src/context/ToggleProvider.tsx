import { createContext, ReactNode, useState } from 'react'
import light from '../style/themes/light'
import dark from '../style/themes/dark'
import { usePersistedData } from '../hooks/usePersistedData'
import { DefaultTheme } from 'styled-components'

interface Toggle {
  theme: DefaultTheme
  toggleTheme(): void
}
interface Provider {
  children: ReactNode
}

export const ToggleContext = createContext({} as Toggle)

export const ToggleProvider = ({ children }: Provider) => {
  const [theme, setTheme] = usePersistedData<DefaultTheme>('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  )
}
