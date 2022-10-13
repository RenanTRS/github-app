import style from './Header.module.scss'

import { FormEvent, useEffect, useState } from 'react'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { SwitchToggle } from 'components/SwitchToggle'

import { motion } from 'framer-motion'
import { useGetPositionY } from 'hooks/useGetPositionY'
import { HeaderVariants } from './variants'
import { HeaderProps } from './types'
import { addUser } from 'store/reducer/userReducer'
import { useDispatch } from 'react-redux'
import { useGetTheme } from 'hooks/useGetTheme'

export const Header = ({ user }: HeaderProps) => {
  const theme = useGetTheme()
  const [value, setValue] = useState<string>('')
  const show = useGetPositionY()
  const dispatch = useDispatch()

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addUser({ user: value }))
  }

  useEffect(() => {
    setValue(user)
  }, [user])

  const { headerVariants } = HeaderVariants({ show })

  return (
    <motion.header
      className={style.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      data-theme={theme}
    >
      <form onSubmit={handlerSubmit} className={style.header__form}>
        <Input value={value} change={setValue} theme={theme} />
        <Button theme={theme} styled={style.minwidth} />
        <SwitchToggle styled={style.switch} />
      </form>
    </motion.header>
  )
}
