import { createContext, ReactNode, useState } from 'react'
import light from '../style/themes/light'
import dark from '../style/themes/dark'

type Theme = typeof light

interface Toggle {
  theme: Theme
  toggleTheme(): void
}
interface Provider {
  children: ReactNode
}

export const ToggleContext = createContext({} as Toggle)

export const ToggleProvider = ({ children }: Provider) => {
  const [theme, setTheme] = useState(light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  )
}
