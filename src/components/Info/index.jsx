import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.scss'

export const Info = () => {
  const [showInfo, setShowInfo] = useState(true)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div
      className={`info ${!showInfo && 'show'}`}
      onClick={toggleInfo}
      style={{
        backgroundColor: !showInfo && '#1a1527'
      }}
    >
      <span>Información</span>
      <br />
      <motion.div
        className={` ${showInfo && 'info-container'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          <strong>+3</strong> años de experiencia como Full stack Front-end
          Developer. Cuento con conocimientos solidos en el desarrollo Front-End
          de <strong>React.js, Next.js, ES6+, HTML, CSS3</strong> Sólida
          comprensión en los principios de diseño, <strong>UI/ UX</strong>, CSS
          Avanzado <strong>(CSS Modules - Sass)</strong> y diseño responsivo.
          Desarrollo Back-End utilizando{' '}
          <strong>Nest.js, Node.js y Express</strong>, manejo de base de datos
          relacionales y no relacionales como lo son
          <strong>MySQL, PostgresSQL, y SQL SERVER.</strong>
        </p>
      </motion.div>
    </div>
  )
}
