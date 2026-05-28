import {
  chatapp,
  moniben_light,
  moniben_store,
  napet,
  napet_app,
  exploraventura,
  exploraventura_light,
  newnic,
  newnic_light
} from './images'

export const ALL_PROJECTS = [
  {
    id: 0,
    name: 'Newnic.tech',
    image: newnic_light,
    background_image: newnic,
    category: 'WEB',
    description:
      'Pagina web de una empresa de servicios de tecnologia, donde se puede ver los servicios que ofrecen, los proyectos realizados, y un formulario de contacto. Perfectamente estructurada y totalmente responsive. Esta plantilla puede ser modificada a gusto, y escalable para adaptarse a cualquier tipo de negocio.',
    link: 'https://github.com/francisco-JGC/newnic.tech',
    technologies: ['Design', 'SASS', 'NextJS 14', 'HTML5', 'Responsive', 'JavaScript'],
    numberList: '00',
    orientation: 'horizontal'
  },
  {
    id: 1,
    name: 'MONIBEN STORE',
    image: moniben_light,
    background_image: moniben_store,
    category: 'WEB',
    description:
      'Ecommerce de venta de productos donde se puede comprar y vender productos. Cuenta con un panel de administración para gestionar los productos, pedidos, usuarios, etc. Escalable para adaptarse a cualquier tipo de negocio. Totalmente responsive.',
    link: 'https://github.com/francisco-JGC/Moniben-Ecommerce-p',
    technologies: ['Design', 'React', 'CSS3', 'JavaScript', 'HTML5', 'Responsive'],
    numberList: '01',
    orientation: 'horizontal'
  },
  {
    id: 2,
    name: 'ExplorAventura',
    image: exploraventura_light,
    background_image: exploraventura,
    category: 'WEB',
    description:
      'ExplorAventura es una agencia de viajes que ofrece paquetes turisticos a diferentes destinos del mundo. Creada con React, CSS3, JavaScript, HTML5, y Framer Motion para animaciones fluidas.',
    link: null,
    technologies: ['React', 'CSS3', 'JavaScript', 'HTML5', 'Responsive', 'Framer Motion'],
    numberList: '02',
    orientation: 'horizontal'
  },
  {
    id: 3,
    name: 'NAPET',
    image: napet,
    background_image: napet_app,
    category: 'DISEÑO',
    description:
      'Aplicación móvil para identificar plagas y enfermedades en plantas y gestión de mascotas. Diseño de interfaz completo con Adobe XD e Illustrator.',
    link: null,
    technologies: ['UI/UX', 'Design', 'Adobe XD', 'Adobe Illustrator'],
    numberList: '03',
    orientation: 'vertical'
  }
]
