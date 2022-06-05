import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ToggleContext } from 'context/ToggleProvider'
//import Switch from 'react-switch'

import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

export const SwitchToggle = memo(() => {
  const { switchToggle, title } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ToggleContext)

  const Switch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    width: 40,
    height: 24,
    backgroundColor: `${switchToggle.unChecked.color}`,
    borderRadius: '9999px',
    position: 'relative',
    //boxShadow: `0 2px 10px ${blackA.blackA7}`,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': { boxShadow: `0 0 0 2px black` },
    '&[data-state="checked"]': {
      backgroundColor: `${switchToggle.checked.color}`
    }
  })

  const Thumb = styled(SwitchPrimitive.Thumb, {
    display: 'block',
    width: 20,
    height: 20,
    backgroundColor: `${switchToggle.unChecked.handlerColor}`,
    borderRadius: '9999px',
    //boxShadow: `0 2px 2px ${blackA.blackA7}`,
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': {
      transform: 'translateX(19px)'
    }
  })

  return (
    <>
      <Switch onCheckedChange={() => toggleTheme()} checked={title === 'dark'}>
        <Thumb />
      </Switch>
      {/* <Switch
      onChange={() => toggleTheme()}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={23}
      width={40}
      handleDiameter={20}
      onHandleColor={switchToggle.checked.handlerColor}
      offHandleColor={switchToggle.unChecked.handlerColor}
      offColor={switchToggle.unChecked.color}
      onColor={switchToggle.checked.color}
    /> */}
    </>
  )
})
