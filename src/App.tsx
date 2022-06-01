import { useContext } from 'react'
import { ToggleContext } from './context/ToggleProvider'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'
import { Container } from './components/Container'

function App() {
  const { theme } = useContext(ToggleContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container />
    </ThemeProvider>
  )
}

export default App
