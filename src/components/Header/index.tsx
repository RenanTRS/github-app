import { Wrapper } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { SwitchToggle } from '../SwitchToggle'
import { useState } from 'react'

interface HeaderProps {
  onclick(value: string): void
}
export const Header = ({ onclick }: HeaderProps) => {
  const [value, setValue] = useState<string>('')

  return (
    <Wrapper>
      <Input
        value={value!}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Digite o username"
      />
      <Button onClick={() => onclick(value)}>Buscar</Button>
      <SwitchToggle />
    </Wrapper>
  )
}
