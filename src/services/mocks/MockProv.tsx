import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import light from 'style/themes/light'
import { GitProvider } from 'context/GitProvider'

interface MockProvProp {
  children: ReactNode
}

export const MockProv = ({ children }: MockProvProp) => {
  return (
    <ThemeProvider theme={light}>
      <GitProvider>{children}</GitProvider>
    </ThemeProvider>
  )
}
