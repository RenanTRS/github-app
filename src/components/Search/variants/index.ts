export const revealVariant = {
  hidden: {
    y: 60,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
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
