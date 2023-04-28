import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ALL_PROJECTS } from '../../../../common/projects'
import { Modal } from '../../../../components/Modal'
import { ProjectItem } from '../ProjectItem'
import { ShowProject } from '../showProject'
import './index.scss'

export const ProjectList = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  const [item, setItem] = useState(null)

  return (
    <div>
      <div className="project-list">
        {ALL_PROJECTS.map((project) => (
          <ProjectItem
            {...project}
            key={project.id}
            onClick={() => {
              setItem(project)
              open()
            }}
          />
        ))}
      </div>

      <AnimatePresence
        initial={false}
        onExitComplete={() => setModalOpen(false)}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <ShowProject project={item} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
