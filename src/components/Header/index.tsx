import style from './Header.module.scss'

import { FormEvent, useEffect, useState } from 'react'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { SwitchToggle } from 'components/SwitchToggle'

import { motion } from 'framer-motion'
import { headerVariants } from './variants'
import { HeaderProps } from './types'
import { useGetTheme } from 'hooks/useGetTheme'

export const Header = ({ user, submit }: HeaderProps) => {
  const theme = useGetTheme()
  const [value, setValue] = useState<string>('')

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit(value)
  }

  useEffect(() => {
    setValue(user)
  }, [user])

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
        <Button theme={theme} styled={style.minwidth} value={value} />
        <SwitchToggle styled={style.switch} />
      </form>
    </motion.header>
  )
}
