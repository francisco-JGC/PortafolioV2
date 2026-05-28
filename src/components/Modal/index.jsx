import { motion } from 'framer-motion'
import { Backdrop } from '../Backdrop'
import './index.scss'

const variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    y: 30
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    scale: 0.92,
    opacity: 0,
    y: 20,
    transition: { duration: 0.25, ease: 'easeIn' }
  }
}

export const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}

        <i className="fas fa-times close-modal" onClick={handleClose} />
      </motion.div>
    </Backdrop>
  )
}
