import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ALL_PROJECTS } from '../../../../common/projects'
import { Modal } from '../../../../components/Modal'
import { ProjectItem } from '../ProjectItem'
import { ShowProject } from '../showProject'
import './index.scss'

const FILTERS = ['TODOS', 'WEB', 'IA', 'DISEÑO']

export const ProjectList = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [item, setItem]           = useState(null)
  const [active, setActive]       = useState('TODOS')

  const filtered = active === 'TODOS'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active)

  return (
    <div>
      {/* ── Filtros ── */}
      <div className="project-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`project-filters__btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Lista ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="project-list"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.map((project, index) => (
            <ProjectItem
              {...project}
              key={project.id}
              onClick={() => { setItem(project); setModalOpen(true) }}
              style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence initial={false} onExitComplete={() => setModalOpen(false)}>
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(false)}>
            <ShowProject project={item} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}
