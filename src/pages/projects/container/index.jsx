import { ProjectList } from '../components/ProjectList'
import './index.scss'

export const ProjectPages = () => {
  return (
    <div className="project-pages" id="projects">
      <span>
        <small>Proyectos {' />'}</small>
        Seleccione un proyecto, Diseño UI, Web...
      </span>

      <div className="project-pages__container">
        <ProjectList />
      </div>
    </div>
  )
}
