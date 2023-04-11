import { SocialMedia } from '../SocialMedia'
import './index.scss'

export const MyInfo = () => {
  return (
    <div className="my-info">
      <div className="my-info__header">
        <SocialMedia />
        <span>SOBRE MI</span>
      </div>
      <p>
        Saludos, mi nombre es Francisco Garcia, desarrollador web full stack con
        amplia experiencia en el diseño y desarrollo de sitios web
        personalizados desde cero. Mi pasión por la tecnología me ha llevado a
        mantenerme actualizado y en constante aprendizaje para mejorar mis
        habilidades y ofrecer soluciones de alta calidad.
      </p>
    </div>
  )
}
