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
    description:
      'Pagina web de una empresa de servicios de tecnologia, donde se puede ver los servicios que ofrecen, los proyectos realizados, y un formulario de contacto. Perfectamente estructurada y totalmente responsive. Esta plantilla puede ser modificada a gusto, y escalable para adaptarse a cualquier tipo de negocio. Y es totalmente responsive.',
    link: 'https://github.com/francisco-JGC/newnic.tech',
    technologies: [
      'Design',
      'SASS',
      'NextJS 14',
      'HTML5',
      'Responsive',
      'JavaScript'
    ],
    numberList: '00',
    orientation: 'horizontal'
  },
  {
    id: 1,
    name: 'MONIBEN STORE',
    image: moniben_light,
    background_image: moniben_store,
    description:
      'Ecommerce de venta de productos donde se puede comprar y vender productos. Cuenta con un panel de administración para gestionar los productos, pedidos, usuarios, etc. Esta platilla puede ser modificada a gusto, y escalable para adaptarse a cualquier tipo de negocio. Y es totalmente responsive.',
    link: 'https://github.com/francisco-JGC/Moniben-Ecommerce-p',
    technologies: [
      'Design',
      'React',
      'CSS3',
      'JavaScript',
      'HTML5',
      'Responsive'
    ],
    numberList: '01',
    orientation: 'horizontal'
    // style: {
    //   filter: 'brightness(70%)'
    // }
  },
  {
    id: 2,
    name: 'ExplorAventura',
    image: exploraventura_light,
    background_image: exploraventura,
    description:
      'ExplorAventura es una agencia de viajes que ofrece paquetes turisticos a diferentes destinos del mundo. Esta aplicacion fue creada con React, CSS3, JavaScript, HTML5, Responsive.',
    link: null,
    technologies: [
      'React',
      'CSS3',
      'JavaScript',
      'HTML5',
      'Responsive',
      'Framer Motion'
    ],
    numberList: '02',
    orientation: 'horizontal'
    // style: {
    //   filter: 'brightness(70%)',
    //   marginTop: '10em'
    // }
  },
  {
    id: 3,
    name: 'NAPET',
    image: napet,
    background_image: napet_app,
    description:
      'Napet es una aplicacion movil anterior mente llamada APPGRO, tiene como funcionamiento principal Identificar plagas y enfermedades en las plantas, asi como tambien servir una app para registrar tus mascotas donde podras ver su cuido, alimentacion, actividades, etc.',
    link: null,
    technologies: ['UI/UX', 'Design', 'Adobe XD', 'Adobe Illustrator'],
    numberList: '04',
    orientation: 'vertical'
    // style: {
    //   filter: 'brightness(70%)',
    //   width: '150px',
    //   marginTop: '-5em'
    // }
  }
]
