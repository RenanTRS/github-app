import { FormEvent, useState } from 'react'

//style
import style from './Header.module.scss'

//assets
import logoImg from '../../assets/img/Logo.svg'
import { SwitchToggle } from './SwitchToggle'

//motions
import { motion } from 'framer-motion'
import { HeaderVariants } from './variants'

//types
import { HeaderProps, IPositionY } from './types'

export const Header = ({ theme }: HeaderProps) => {
  const [value, setValue] = useState<string>('')
  const [positionY, setPositionY] = useState<IPositionY>({
    y: '0',
    titleOpacity: 1,
    delayHeader: 1
  })

  const { revealVariant, titleVariant } = HeaderVariants({ positionY })

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(value)
  }

  const handlerClick = () => {
    setPositionY(
      (prev) => (prev = { y: '-46vh', titleOpacity: 0, delayHeader: 0 })
    )
  }

  return (
    <motion.header
      className={style.header}
      variants={revealVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={style.title_header}
        variants={titleVariant}
        animate="visible"
      >
        <img src={logoImg} alt="Logo" className={style.title_header__img} />

        <h1 className={style.title_header__title} data-theme={theme}>
          GitHub-App
        </h1>
      </motion.div>

      <form onSubmit={handlerSubmit} className={style.header__form}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={style.header__form_input}
          data-theme={theme}
        />

        <div className={style.header__form_actions}>
          <button
            type="submit"
            className={style.header__form_button}
            onClick={handlerClick}
            data-theme={theme}
          >
            Buscar
          </button>

          <SwitchToggle />
        </div>
      </form>
    </motion.header>
  )
}
