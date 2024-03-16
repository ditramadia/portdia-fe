import { Variants } from "framer-motion";

const fadeUp: Variants = {
  enter: {
    opacity: 0,
    y: 20
  },
  animate: i => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: i * 0.2
    }
  })
}

const fadeDown: Variants = {
  enter: {
    opacity: 0,
    y: -20
  },
  animate: i => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: i * 0.2
    }
  })
}

const fadeIn: Variants = {
  enter: {
    opacity: 0,
  },
  animate: i => ({
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: i * 0.2
    }
  })
}

export { fadeUp, fadeDown, fadeIn };