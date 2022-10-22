export const loadingVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    y: [-30, 0],
    opacity: 1,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }
}
