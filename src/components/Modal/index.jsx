import { motion } from 'framer-motion'
import { Backdrop } from '../Backdrop'
import './index.scss'

const variants = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 25
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

export const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <button onClick={handleClose}>close</button>
      </motion.div>
    </Backdrop>
  )
}
