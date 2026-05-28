import { useEffect, useRef } from 'react'
import './index.scss'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, label, select, .project-pages__container__item, .code-line.has-tooltip'

export const CustomCursor = () => {
  const dotRef   = useRef(null)
  const wrapRef  = useRef(null)
  const ringRef  = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos  = useRef({ x: 0, y: 0 })
  const rafId    = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const wrap = wrapRef.current
    const ring = ringRef.current
    if (!dot || !wrap || !ring) return

    const onMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onDown = () => {
      ring.classList.add('is-clicking')
      dot.classList.add('is-clicking')
    }
    const onUp = () => {
      ring.classList.remove('is-clicking')
      dot.classList.remove('is-clicking')
    }

    /* Hover sobre elementos interactivos */
    const onOver = (e) => {
      const hit = e.target.closest(INTERACTIVE)
      if (hit) {
        ring.classList.add('is-hovering')
        dot.classList.add('is-hovering')
      } else {
        ring.classList.remove('is-hovering')
        dot.classList.remove('is-hovering')
      }
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.11
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.11
      wrap.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove,  { passive: true })
    window.addEventListener('mouseover', onOver,  { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={wrapRef} className="cursor-ring-wrap">
        <div ref={ringRef} className="cursor-ring" />
      </div>
    </>
  )
}
