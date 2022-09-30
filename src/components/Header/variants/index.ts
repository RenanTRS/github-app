import { HeaderVariantsProps } from '../types'

export const HeaderVariants = ({ show }: HeaderVariantsProps) => {
  const headerVariants = {
    hidden: {
      y: -100
    },
    visible: {
      y: show,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  }
  return { headerVariants }
}
