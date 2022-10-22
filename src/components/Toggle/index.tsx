import { useGetTheme } from 'hooks/useGetTheme'
import { Moon, Sun } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { changeTheme } from 'store/reducer/themeReducer'
import style from './Toggle.module.scss'

export const Toggle = () => {
  const dispatch = useDispatch()
  const theme = useGetTheme()

  const toggleTheme = () => {
    //change theme
    if (theme === 'dark') {
      dispatch(changeTheme({ theme: 'light' }))
    } else {
      dispatch(changeTheme({ theme: 'dark' }))
    }
  }

  return (
    <button
      type="button"
      className={style.toggle}
      onClick={toggleTheme}
      data-theme={theme}
      title={`Mudar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}
