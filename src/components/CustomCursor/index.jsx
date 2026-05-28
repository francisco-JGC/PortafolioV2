import { useEffect, useRef } from 'react'
import './index.scss'

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, label, select, .project-pages__container__item, .code-line.has-tooltip'

export const CustomCursor = () => {
  const dotWrapRef = useRef(null) // sólo posición  (JS, sin transition)
  const dotRef     = useRef(null) // sólo scale     (CSS transition, sin tocar position)
  const wrapRef    = useRef(null) // sólo posición  (JS, inercia)
  const ringRef    = useRef(null) // sólo scale     (CSS transition)

  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos  = useRef({ x: 0, y: 0 })
  const rafId    = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dotWrap = dotWrapRef.current
    const dot     = dotRef.current
    const wrap    = wrapRef.current
    const ring    = ringRef.current
    if (!dotWrap || !dot || !wrap || !ring) return

    const onMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      // El wrapper del punto sigue el cursor exactamente y de forma instantánea
      dotWrap.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onDown = () => {
      // La clase sólo afecta el scale del elemento hijo — no interfiere con el translate del padre
      dot.classList.add('is-clicking')
      ring.classList.add('is-clicking')
    }
    const onUp = () => {
      dot.classList.remove('is-clicking')
      ring.classList.remove('is-clicking')
    }

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

    // El wrapper del ring sigue con inercia
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
      {/*
        Patrón correcto para ambos elementos:
        - WRAP: posición vía JS (transform: translate) — sin CSS transition
        - HIJO: sólo scale vía CSS transition — JS nunca lo toca
        Así scale se calcula desde el centro del hijo, que ya está en la
        posición correcta por el padre → no hay salto al hacer clic.
      */}
      <div ref={dotWrapRef} className="cursor-dot-wrap">
        <div ref={dotRef} className="cursor-dot" />
      </div>

      <div ref={wrapRef} className="cursor-ring-wrap">
        <div ref={ringRef} className="cursor-ring" />
      </div>
    </>
  )
}
