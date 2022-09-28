import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 63,
  height: 30,
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
})

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 28,
  height: 28,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px black`,
  transition: 'transform 200ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(33px)' }
})
