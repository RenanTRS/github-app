//Main
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
//User
export const itemUserVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut'
    }
  }
}
export const containerUserVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
}

//Toggle
export const ToggleVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.3,
      ease: 'easeOut'
    }
  }
}

//Repos
export const containerReposVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      ease: 'easeOut'
    }
  }
}
