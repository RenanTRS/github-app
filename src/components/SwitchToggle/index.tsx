import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ToggleContext } from 'context/ToggleProvider'

import { Switch, Thumb } from './style'

export const SwitchToggle = memo(() => {
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ToggleContext)

  return (
    <>
      <Switch onCheckedChange={() => toggleTheme()} checked={title === 'dark'}>
        <Thumb />
      </Switch>
    </>
  )
})
