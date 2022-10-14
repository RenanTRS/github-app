import { FormEvent, useState } from 'react'

//style
import style from './Search.module.scss'

//assets
import logoImg from '../../assets/img/Logo.svg'
import { SwitchToggle } from '../SwitchToggle'

//motions
import { motion } from 'framer-motion'

//types
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { useDispatch } from 'react-redux'

import { addUser } from 'store/reducer/userReducer'
import { useGetTheme } from 'hooks/useGetTheme'
import { useNavigate } from 'react-router-dom'
import { revealVariant } from './variants'

export const Search = () => {
  const theme = useGetTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [value, setValue] = useState<string>('')

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addUser({ user: value }))
    navigate('/profile')
  }

  return (
    <motion.div
      className={style.search}
      variants={revealVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={style.title_search}>
        <img src={logoImg} alt="Logo" className={style.title_search__img} />

        <strong className={style.title_search__title} data-theme={theme}>
          GitHub-App
        </strong>
      </div>

      <form onSubmit={handlerSubmit} className={style.search__form}>
        <Input value={value} theme={theme} change={setValue} />

        <div className={style.search__form_actions}>
          <Button styled={style.minwidth} theme={theme} />

          <SwitchToggle />
        </div>
      </form>
    </motion.div>
  )
}
