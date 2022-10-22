import style from './Header.module.scss'

import { FormEvent, useEffect, useState } from 'react'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

import { motion } from 'framer-motion'
import { headerVariants } from './variants'
import { HeaderProps } from './types'
import { useGetTheme } from 'hooks/useGetTheme'
import { Toggle } from 'components/Toggle'

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
        <div className={style.header__form_actions}>
          <Button.Header theme={theme} styled={style.minwidth} value={value} />
          <Toggle />
        </div>
      </form>
    </motion.header>
  )
}
