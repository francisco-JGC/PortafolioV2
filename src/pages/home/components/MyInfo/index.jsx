import { motion } from 'framer-motion'
import { SocialMedia } from '../SocialMedia'
import './index.scss'

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
}

export const MyInfo = () => {
  return (
    <motion.div
      className="my-info"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="my-info__header">
        <SocialMedia />
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          SOBRE MI
        </motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        Saludos, mi nombre es Francisco Garcia, desarrollador web full stack con
        amplia experiencia en el diseño y desarrollo de sitios web
        personalizados desde cero. Mi pasión por la tecnología me ha llevado a
        mantenerme actualizado y en constante aprendizaje para mejorar mis
        habilidades y ofrecer soluciones de alta calidad.
      </motion.p>
    </motion.div>
  )
}
