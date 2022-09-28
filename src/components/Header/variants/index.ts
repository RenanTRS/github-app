import { IPositionY } from './../types/index'

interface VariantProps {
  positionY: IPositionY
}
export const HeaderVariants = ({ positionY }: VariantProps) => {
  const revealVariant = {
    hidden: {
      y: 60,
      opacity: 0
    },
    visible: {
      y: positionY.y,
      opacity: 1,
      transition: {
        duration: 1,
        delay: positionY.delayHeader
      }
    }
  }

  const titleVariant = {
    visible: {
      opacity: positionY.titleOpacity,
      transition: {
        duration: 1
      }
    }
  }

  return { revealVariant, titleVariant }
}
