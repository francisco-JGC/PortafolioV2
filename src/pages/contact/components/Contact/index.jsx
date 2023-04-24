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
    <div className="contact">
      <CustomButton onClick={() => (modalOpen ? close() : open())}>
        <span>Contactar</span>
      </CustomButton>

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
