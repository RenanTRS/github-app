import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ToggleContext } from 'context/ToggleProvider'
import Switch from 'react-switch'

export const SwitchToggle = memo(() => {
  const { switchToggle, title } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ToggleContext)

  return (
    <Switch
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
    />
  )
})
