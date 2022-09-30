import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
})

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 200ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(33px)' }
})
