import { ALL_PROJECTS } from '../../../../common/projects'
import { ProjectItem } from '../ProjectItem'

import './index.scss'

export const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-pages__container">
        {ALL_PROJECTS.map((project) => (
          <ProjectItem {...project} key={project.id} />
        ))}
      </div>
    </div>
  )
}
