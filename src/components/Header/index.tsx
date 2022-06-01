import { Wrapper } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { SwitchToggle } from '../SwitchToggle'

export const Header = () => {
  return (
    <Wrapper>
      <Input />
      <Button>Buscar</Button>
      <SwitchToggle />
    </Wrapper>
  )
}
