import { IPositionY } from '../types/index'

interface VariantProps {
  positionY: IPositionY
}
export const SearchVariants = ({ positionY }: VariantProps) => {
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

  return { revealVariant }
}
