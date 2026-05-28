import './index.scss'

export const ProjectItem = ({
  image,
  numberList,
  link,
  name,
  style,
  orientation,
  onClick
}) => {
  return (
    <div
      className={`project-pages__container__item ${orientation || ''}`}
      style={style}
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-out-cubic"
      onClick={onClick}
    >
      <div className="project-pages__container__item__image">
        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="project-pages__container__item__overlay">
        <span className="name">{name}</span>
        <div className="project-pages__container__item__shadow" />
        <div>
          <span>{numberList}</span>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
    </div>
  )
}
