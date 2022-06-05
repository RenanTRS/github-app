import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

const { switchToggle } = useContext(ThemeContext)

export const Switch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 40,
  height: 24,
  backgroundColor: `${switchToggle.unChecked.color}`,
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': {
    backgroundColor: `${switchToggle.checked.color}`
  }
})

export const Thumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: `${switchToggle.unChecked.handlerColor}`,
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(19px)'
  }
})
