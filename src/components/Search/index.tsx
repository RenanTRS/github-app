import { FormEvent, useState } from 'react'

//style
import style from './Search.module.scss'

//assets
import logoImg from '../../assets/img/Logo.svg'
import { SwitchToggle } from '../SwitchToggle'

//motions
import { motion } from 'framer-motion'
import { SearchVariants } from './variants'

//types
import { IPositionY } from './types'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { useDispatch } from 'react-redux'
import { show } from '../../store/reducer/revealReducer'
import { addUser } from 'store/reducer/userReducer'
import { useGetTheme } from 'hooks/useGetTheme'

export const Search = () => {
  const dispatch = useDispatch()
  const theme = useGetTheme()

  const [value, setValue] = useState<string>('')
  const [positionY, setPositionY] = useState<IPositionY>({
    y: '0',
    delayHeader: 1
  })

  const { revealVariant } = SearchVariants({ positionY })

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addUser({ user: value }))
  }

  const handlerClick = () => {
    setPositionY((prev) => (prev = { y: '-100vh', delayHeader: 0 }))

    dispatch(show({ reveal: 0 }))
  }

  return (
    <motion.div
      className={style.search}
      variants={revealVariant}
      initial="hidden"
      animate="visible"
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
          <Button click={handlerClick} styled={style.minwidth} theme={theme} />

          <SwitchToggle />
        </div>
      </form>
    </motion.div>
  )
}
