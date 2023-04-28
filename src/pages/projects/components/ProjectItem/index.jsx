import './index.scss'

export const ProjectItem = ({
  image,
  numberList,
  link,
  name,
  style,
  orientation
}) => {
  return (
    <div
      className={`project-pages__container__item ${orientation}`}
      style={style}
      data-aos="fade-up"
    >
      <div className="project-pages__container__item__image">
        <img src={image} alt={name} />
        <div className="project-pages__container__item__image__shadow"></div>
      </div>

      <div className="project-pages__container__item__overlay">
        <span className="name">{name}</span>
        <div>
          <span>{numberList}</span>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  )
}
