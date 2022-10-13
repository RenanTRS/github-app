//import { IPositionY } from '../types/index'

/* interface VariantProps {
  positionY?: IPositionY
} */
export const SearchVariants = () => {
  const revealVariant = {
    hidden: {
      y: 60,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
        //delay: positionY.delayHeader
      }
    },
    exit: {
      y: '-100vh',
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return { revealVariant }
}
