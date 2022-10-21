import style from './SwitchToggle.module.scss'

import { changeTheme } from '../../store/reducer/themeReducer'
import { useDispatch } from 'react-redux'
import { useGetTheme } from 'hooks/useGetTheme'
import { StyledSwitch, StyledThumb } from './Switch.style'

const Switch = StyledSwitch
const SwitchThumb = StyledThumb

export const SwitchToggle = () => {
  const dispatch = useDispatch()

  const theme = useGetTheme() //get the current theme

  const toggleTheme = () => {
    if (theme === 'dark') {
      dispatch(changeTheme({ theme: 'light' })) //change the theme
    } else {
      dispatch(changeTheme({ theme: 'dark' })) //change the theme
    }
  }

  return (
    <>
      <Switch
        defaultChecked
        id="s1"
        className={`${style.switch}`}
        onCheckedChange={toggleTheme}
        checked={theme === 'dark'}
        data-theme={theme}
      >
        <SwitchThumb className={`${style.switch__thumb}`} />
      </Switch>
    </>
  )
}
