import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { Modal } from '../../../../components/Modal'
import './index.scss'

export const ContactForm = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div className="contact">
      <Button onClick={() => (modalOpen ? close() : open())}>
        <span>Contactar</span>
      </Button>

      <AnimatePresence
        initial={false}
        onExitComplete={() => setModalOpen(false)}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <span>hola</span>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
