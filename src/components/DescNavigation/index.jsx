import { useRef } from 'react'
import { ITEMS } from '../Navigation'
import './index.scss'

export const DescNavigation = () => {
  const navigationRef = useRef(null)

  const widthScreen = window.innerWidth

  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const header = navigationRef.current
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      header.classList.add('desc-navigation--hide')
    } else {
      header.classList.remove('desc-navigation--hide')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  if (widthScreen >= 768) return null

  return (
    <div className="desc-navigation" ref={navigationRef}>
      <ul>
        {ITEMS.map((item, index) => (
          <li key={index}>
            <a href={`#${item.to}`}>
              {' '}
              {item.label}
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
