import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CV from '../../../../assets/cv/CV - Francisco Javier Garcia Calix.pdf'
import { CustomButton } from '../../../../components/CustomButton'
import './index.scss'

const ROLES = [
  'Backend Developer',
  'Full-Stack Engineer',
  'AI Developer',
  'Frontend Developer',
  'Fintech Builder',
]

const useTypewriter = (words, { typeSpeed = 80, deleteSpeed = 45, pause = 1600 } = {}) => {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = words[wordIdx]
    const tick = () => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length) {
          timeout.current = setTimeout(() => setDeleting(true), pause)
          return
        }
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length - 1 === 0) {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
          return
        }
      }
      timeout.current = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    }
    timeout.current = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timeout.current)
  }, [display, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause])

  return display
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const Profile = () => {
  const role = useTypewriter(ROLES)

  return (
    <motion.div className="profile" variants={container} initial="hidden" animate="show">
      <motion.small variants={fadeIn}>Inicio {'/>'}</motion.small>

      <div className="profile__data">
        <motion.div className="profile__data__name" variants={fadeLeft}>
          <p>
            <span>
              Hola!, Mi nombre es <span>Francisco Garcia</span>
            </span>
            <span>
              Soy <span className="role-type">{role}<span className="role-cursor">|</span></span>
            </span>
          </p>
        </motion.div>

        <motion.div className="profile__data__ocupation" variants={fadeLeft}>
          <span>Deja que te muestre...</span>
        </motion.div>
      </div>

      <motion.div className="profile__contact" variants={fadeUp}>
        <a href="#contact">
          <CustomButton><span>Contáctame</span></CustomButton>
        </a>
        <a href={CV} target="_blank" rel="noreferrer" style={{ outline: 'none' }}>
          <CustomButton><span>CV</span></CustomButton>
        </a>
      </motion.div>
    </motion.div>
  )
}
