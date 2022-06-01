import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Switch from 'react-switch'

export const SwitchToggle = () => {
  const { switchToggle } = useContext(ThemeContext)
  return (
    <Switch
      onChange={() => {}}
      checked={false}
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
}
