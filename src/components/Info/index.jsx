import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './index.scss'

export const Info = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`info${isOpen ? ' info--open' : ''}`}
      onClick={() => setIsOpen((v) => !v)}
    >
      <div className="info__badge">
        <span>Información</span>
        <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="info__content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p>
              <strong>+4</strong> años como Full-Stack Developer con foco en{' '}
              <strong>Backend (NestJS, Node.js, Express)</strong> y frontend{' '}
              <strong>(React, Next.js)</strong>. Experiencia en arquitectura de{' '}
              plataformas fintech, <strong>bots de IA con ChatGPT API</strong>,{' '}
              <strong>Azure Speech / Speech Recognition</strong>, sistemas ERP,{' '}
              <strong>WebSockets</strong>, despliegue en <strong>GCP / Nginx</strong>{' '}
              y CI/CD. Herramientas: <strong>Claude Code, Cursor, Gemini</strong>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
