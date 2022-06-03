import { useContext } from 'react'
import { ToggleContext } from './context/ToggleProvider'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'
import { Container } from './components/Container'
import { GitProvider } from 'context/GitProvider'

function App() {
  const { theme } = useContext(ToggleContext)

  return (
    <ThemeProvider theme={theme}>
      <GitProvider>
        <GlobalStyle />
        <Container />
      </GitProvider>
    </ThemeProvider>
  )
}

export default App
