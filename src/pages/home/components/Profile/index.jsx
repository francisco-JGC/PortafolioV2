import { motion } from 'framer-motion'
import CV from '../../../../assets/cv/CV-Francisco_Garcia-FullStack.pdf'
import { Button } from '../../../../components/button'
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
          <a to="#contact">
            <Button>Contáctame</Button>
          </a>
        </motion.span>

        <motion.a
          href={CV}
          target="_blank"
          rel="noreferrer"
          variants={variantButton}
          initial="initial"
          animate="animate"
          style={{
            paddingLeft: '1rem',
            outline: 'none'
          }}
          transition={{
            ...variantButton.transition,
            delay: variantButton.transition.delay + 0.4
          }}
        >
          <Button>CV</Button>
        </motion.a>
      </div>
    </div>
  )
}
