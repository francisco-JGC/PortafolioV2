import { motion } from 'framer-motion'
import './index.scss'

const ITEMS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/francisco-garcia-94a2a2232/',
    delay: 1.1
  },
  {
    label: 'GitHub',
    url: 'https://github.com/francisco-JGC',
    delay: 1.4
  }
]

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        SOCIAL
      </motion.span>

      <ul className="social-media__list">
        {ITEMS.map((item, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: item.delay }}
          >
            {item.label}
            {index !== ITEMS.length - 1 && <span>|</span>}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
