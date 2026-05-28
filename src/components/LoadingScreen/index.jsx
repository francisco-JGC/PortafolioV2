import { motion } from 'framer-motion'
import './index.scss'

export const LoadingScreen = ({ onDone }) => (
  <motion.div
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
  >
    <div className="loading-screen__content">
      <motion.div
        className="loading-screen__logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="logo-first">CHICO</span>
        <span className="logo-second">DEV</span>
      </motion.div>

      <motion.div
        className="loading-screen__bar-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="loading-screen__bar-fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          onAnimationComplete={onDone}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Cargando portafolio...
      </motion.p>
    </div>
  </motion.div>
)
