//import { HeaderVariantsProps } from '../types'

export const HeaderVariants = () => {
  const headerVariants = {
    hidden: {
      y: -100
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  }
  return { headerVariants }
}
