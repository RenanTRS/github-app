import { Wrapper } from './style'
import { Input } from '../../old/Input'
import { Button } from '../../old/Button/old'
//import { SwitchToggle } from '../../old/SwitchToggle'
import { FormEvent, useState } from 'react'

interface HeaderProps {
  onsubmit(value: string): void
}
export const Header = ({ onsubmit }: HeaderProps) => {
  const [value, setValue] = useState<string>('')

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onsubmit(value)
  }
  return (
    <Wrapper>
      <form onSubmit={(event) => handlerSubmit(event)}>
        <Input
          value={value!}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Digite o username"
        />
        <Button type="submit">Buscar</Button>
        {/* <SwitchToggle /> */}
      </form>
    </Wrapper>
  )
}
