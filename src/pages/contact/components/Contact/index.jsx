import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CustomButton } from '../../../../components/CustomButton'
import { Modal } from '../../../../components/Modal'
import { FormContact } from '../Form'
import './index.scss'

export const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div className="contact-cta">
      <div className="contact-cta__card">
        <div className="contact-cta__card__tag">Disponible</div>

        <h3>¿Tienes un proyecto en mente?</h3>

        <p>
          Cuéntame tu idea y la hacemos realidad. Trabajo en proyectos web
          desde el diseño hasta el despliegue.
        </p>

        <ul className="contact-cta__card__bullets">
          <li>
            <i className="fas fa-check" /> Diseño UI/UX
          </li>
          <li>
            <i className="fas fa-check" /> Desarrollo Frontend &amp; Backend
          </li>
          <li>
            <i className="fas fa-check" /> Aplicaciones web completas
          </li>
        </ul>

        <CustomButton onClick={() => (modalOpen ? close() : open())}>
          <i className="fas fa-paper-plane" />
          <span>Enviar mensaje</span>
        </CustomButton>
      </div>

      <AnimatePresence
        initial={false}
        onExitComplete={() => setModalOpen(false)}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <FormContact closeModal={close} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
