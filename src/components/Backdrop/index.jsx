import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import './index.scss'

export const Backdrop = ({ children, onClick }) => {
  return createPortal(
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>,
    document.body
  )
}
