import { useRef } from 'react'
import './index.scss'

export const ProjectItem = ({ image, numberList, link, name, style }) => {
  const card = useRef(null)

  const onMouseMove = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }

  const onMouseLeave = () => {
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.current.style.transition = 'all 0.5s ease'
  }

  return (
    <div
      className="project-pages__container__item"
      style={style}
      ref={card}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
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
