import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { useGetTheme } from 'hooks/useGetTheme'

function App() {
  const theme = useGetTheme()

  return (
    <Container theme={theme}>
      <Header theme={theme} />
    </Container>
  )
}

export default App
