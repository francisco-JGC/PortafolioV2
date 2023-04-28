import { CustomButton } from '../../../../components/CustomButton'
import './index.scss'

export const ShowProject = ({ project }) => {
  return (
    <div className="show-project">
      <div className="show-project__container">
        <picture className="show-project__container__image">
          <img src={project.background_image} alt={project.name} />
        </picture>
      </div>

      <div className="show-project__container__content">
        <div className="show-project__container__content__technologies">
          {project.technologies?.map((technology, index) => {
            return (
              <span
                key={index}
                className="show-project__container__content__technologies__item"
              >
                {'#' + technology}
              </span>
            )
          })}
        </div>

        <h1 className="show-project__container__content__title">
          {project.name}
        </h1>

        <p className="show-project__container__content__description">
          {project.description}
        </p>

        <div className="show-project__container__content__links">
          <CustomButton
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            {project.link ? 'Ver proyecto' : 'Proyecto privado'}
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
