import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './index.scss'

const variantsDiv = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.7 }
}

// motion de abajo hacia arriba
const variantButton = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 1.3 }
}

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__data">
        <motion.div
          className="profile__data__name"
          variants={variantsDiv}
          initial="initial"
          animate="animate"
          transition={variantsDiv.transition}
        >
          <span>Francisco Garcia</span>
        </motion.div>
        <motion.div
          className="profile__data__ocupation"
          variants={variantsDiv}
          initial="initial"
          animate="animate"
          transition={{
            ...variantsDiv.transition,
            delay: variantsDiv.transition.delay + 0.4
          }}
        >
          <span>Desarrollador web full-stack</span>
        </motion.div>
      </div>

      <div className="profile__contact">
        <motion.span
          variants={variantButton}
          initial="initial"
          animate="animate"
          transition={variantButton.transition}
        >
          <Link to="/contact" className="contact">
            <span>Contacta me</span>
          </Link>
        </motion.span>

        <motion.a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className="CV"
          variants={variantButton}
          initial="initial"
          animate="animate"
          transition={{
            ...variantButton.transition,
            delay: variantButton.transition.delay + 0.4
          }}
        >
          <span>CV</span>
        </motion.a>
      </div>
    </div>
  )
}
