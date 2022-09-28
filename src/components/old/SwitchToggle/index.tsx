import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ToggleContext } from 'context/ToggleProvider'

import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { SwitchContainer } from './style'

export const SwitchToggle = memo(() => {
  const { title, switchToggle } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ToggleContext)

  const Switch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    backgroundColor: `${switchToggle.unChecked.color}`,
    borderRadius: '9999px',
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': { boxShadow: `0 0 0 2px black` },
    '&[data-state="checked"]': {
      backgroundColor: `${switchToggle.checked.color}`
    }
  })

  const Thumb = styled(SwitchPrimitive.Thumb, {
    display: 'block',
    backgroundColor: `${switchToggle.unChecked.handlerColor}`,
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': {
      transform: 'translateX(19px)'
    }
  })

  return (
    <SwitchContainer>
      <Switch onCheckedChange={() => toggleTheme()} checked={title === 'dark'}>
        <Thumb />
      </Switch>
    </SwitchContainer>
  )
})
