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
          Saludos, mi nombre es Francisco Garcia, desarrollador web full stack
          con amplia experiencia en el diseño y desarrollo de sitios web
          personalizados desde cero. Mi pasión por la tecnología me ha llevado a
          mantenerme actualizado y en constante aprendizaje para mejorar mis
          habilidades y ofrecer soluciones de alta calidad.
        </p>
      </motion.div>
    </div>
  )
}
