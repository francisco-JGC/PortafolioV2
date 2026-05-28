import { useEffect, useRef, useState } from 'react'
import './index.scss'

const STATS = [
  { value: 4,  suffix: '+', label: 'Años de experiencia',    icon: 'fas fa-calendar-alt' },
  { value: 5,  suffix: '',  label: 'Empresas / proyectos',   icon: 'fas fa-building' },
  { value: 3,  suffix: '',  label: 'Integraciones con IA',   icon: 'fas fa-robot' },
  { value: 20, suffix: '+', label: 'Tecnologías dominadas',  icon: 'fas fa-code' },
]

const Counter = ({ value, suffix, started }) => {
  const [count, setCount] = useState(0)
  const rafId = useRef(null)

  useEffect(() => {
    if (!started) return
    const duration = 1400
    const start = performance.now()
    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId.current)
  }, [started, value])

  return <>{count}{suffix}</>
}

export const Stats = () => {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stats" ref={ref}>
      {STATS.map((s, i) => (
        <div key={i} className="stats__item" data-aos="fade-up" data-aos-delay={i * 80}>
          <div className="stats__item__icon"><i className={s.icon} /></div>
          <div className="stats__item__value">
            <Counter value={s.value} suffix={s.suffix} started={started} />
          </div>
          <div className="stats__item__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
