import { Wrapper } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { SwitchToggle } from '../SwitchToggle'
import { useState } from 'react'

export const Header = () => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Wrapper>
      <Input
        value={value!}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button>Buscar</Button>
      <SwitchToggle />
    </Wrapper>
  )
}
