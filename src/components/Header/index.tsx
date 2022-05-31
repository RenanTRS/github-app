import { Wrapper } from './style'
import { Input } from '../Input'
import { Button } from '../Button'

export const Header = () => {
  return (
    <Wrapper>
      <Input />
      <Button>Buscar</Button>
      <p>Switch</p>
    </Wrapper>
  )
}
