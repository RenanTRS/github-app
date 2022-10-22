import style from './Loading.module.scss'
import loadingImg from '../../assets/img/gitHub-bg.svg'

import { motion } from 'framer-motion'
import { loadingVariants } from './variants'

export const Loading = () => {
  return (
    <div className={style.loading}>
      <motion.img
        className={style.loading__img}
        src={loadingImg}
        alt="Loading"
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  )
}
