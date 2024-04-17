import Page from '../../../components/Page'
import './index.scss'

export const ServicePages = () => {
  return (
    <Page className="service-pages" id="services">
      <span>
        <small>Servicios {' />'}</small>
        Seleccione un servicio, Diseño UI, APIs, System web...
      </span>

      <div className="service-pages__container"></div>
    </Page>
  )
}
