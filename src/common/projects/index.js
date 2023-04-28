import { chatapp, moniben_light, napet } from './images'

export const ALL_PROJECTS = [
  {
    id: 1,
    name: 'MONIBEN STORE',
    image: moniben_light,
    description:
      'Ecommerce de venta de productos donde se puede comprar y vender productos. Cuenta con un panel de administración para gestionar los productos, pedidos, usuarios, etc.',
    Link: 'https://github.com/francisco-JGC/MONIBEN-STORE',
    technologies: ['React.js', 'react-router-dom', 'CSS3', 'JavaScript'],
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
    numberList: '01',
    orientation: 'vertical',
    style: {
      filter: 'brightness(70%)',
      marginTop: '10em'
    }
  },
  {
    id: 3,
    name: 'NAPET',
    image: napet,
    numberList: '02',
    orientation: 'vertical',
    style: {
      filter: 'brightness(70%)',
      width: '150px',
      marginTop: '-5em'
    }
  }
]
