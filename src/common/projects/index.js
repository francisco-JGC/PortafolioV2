import {
  chatapp,
  moniben_light,
  moniben_store,
  napet,
  napet_app
} from './images'

export const ALL_PROJECTS = [
  {
    id: 1,
    name: 'MONIBEN STORE',
    image: moniben_light,
    background_image: moniben_store,
    description:
      'Ecommerce de venta de productos donde se puede comprar y vender productos. Cuenta con un panel de administración para gestionar los productos, pedidos, usuarios, etc. Esta platilla puede ser modificada a gusto, y escalable para adaptarse a cualquier tipo de negocio. Y es totalmente responsive.',
    link: 'https://github.com/francisco-JGC/MONIBEN-STORE',
    technologies: [
      'Design',
      'React',
      'CSS3',
      'JavaScript',
      'HTML5',
      'Responsive'
    ],
    numberList: '00',
    orientation: 'horizontal',
    style: {
      filter: 'brightness(70%)'
    }
  },
  {
    id: 2,
    name: 'CHAT APP',
    image: chatapp,
    background_image: chatapp,
    description:
      'Chat en tiempo real, donde se puede enviar mensajes de texto, podemos ver un claro ejemplo de como funcionan los sockets para conexion en tiempo real con el servidor y los clientes. Esta aplicación fue creada con React, NodeJS, Express y Socket.io.',
    numberList: '01',
    orientation: 'vertical',
    link: 'https://github.com/francisco-JGC/Chat_App-Node-React-Socket.io',
    technologies: [
      'React',
      'NodeJS',
      'Express',
      'Socket.io',
      'Neumorphism',
      'SASS'
    ],
    style: {
      filter: 'brightness(70%)',
      marginTop: '10em'
    }
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
    numberList: '02',
    orientation: 'vertical',
    style: {
      filter: 'brightness(70%)',
      width: '150px',
      marginTop: '-5em'
    }
  }
]
