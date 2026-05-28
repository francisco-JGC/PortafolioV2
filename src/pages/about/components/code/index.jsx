import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import './index.scss'

// ┌─────────────────────────────────────────────────────────────────────────┐
// │  EDITA AQUÍ — agrega, elimina o modifica líneas                         │
// │                                                                          │
// │  Tipos disponibles:                                                      │
// │   CLASS_OPEN      { name }                                               │
// │   CLASS_CLOSE                                                            │
// │   EXPORT          { name }                                               │
// │   BLANK                                                                  │
// │   METHOD_OPEN     { name }                                               │
// │   METHOD_CLOSE                                                           │
// │   THIS_PROP       { key, value }                                         │
// │   RETURN_ARR_OPEN                                                        │
// │   RETURN_ARR_CLOSE                                                       │
// │   OBJ_ENTRY       { key, value, details? }  ← details activa el tooltip │
// │   STR_LIST        { values: string[] }                                   │
// └─────────────────────────────────────────────────────────────────────────┘
const LINES = [
  { type: 'CLASS_OPEN', name: 'FranciscoGarcia' },

  { type: 'BLANK' },

  { type: 'METHOD_OPEN', name: 'constructor' },
  { type: 'THIS_PROP', key: 'nombre', value: 'Francisco Garcia' },
  { type: 'THIS_PROP', key: 'correo', value: 'jjjchico1@gmail.com' },
  { type: 'THIS_PROP', key: 'localidad', value: 'León - Nicaragua' },
  { type: 'METHOD_CLOSE' },

  { type: 'BLANK' },

  { type: 'METHOD_OPEN', name: 'Experiencia profesional' },
  { type: 'RETURN_ARR_OPEN' },
  {
    type: 'OBJ_ENTRY',
    key: '07.2025 - actual',
    value: 'Backend Developer en Vurelo',
    details: {
      company: 'Vurelo',
      role: 'Backend Developer',
      items: [
        'Arquitectura backend de plataforma fintech con NestJS y Prisma',
        'Integración con Fireblocks para custodia de activos digitales',
        'Desarrollo de módulos de wallets y cashout bancario (ACH)',
        'Flujos de transacciones seguras con webhooks y WebSockets',
        'Interoperabilidad entre activos digitales y sistema financiero',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: '10.2024 - 06.2025',
    value: 'Backend Developer en Contollo',
    details: {
      company: 'Contollo',
      role: 'Backend Developer',
      items: [
        'Bot de IA con ChatGPT API para consultas en lenguaje natural',
        'Avatar 3D con Azure Speech Service + Speech Recognition API',
        'Sistema de autenticación con API Keys en NestJS',
        'Procesamiento de voz en tiempo real con experiencia inmersiva',
        'Integración segura de servicios externos desde otras plataformas',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: '04.2023 - 08.2024',
    value: 'Full-Stack Engineer en REGXI S.A.',
    details: {
      company: 'REGXI S.A.',
      role: 'Full-Stack Software Engineer',
      items: [
        'Sistema ERP desde cero: servidor, BD y procesos logísticos (+40%)',
        'Colaboración con UX/UI y marketing para cumplir objetivos',
        'CI/CD: reducción del 50% en tiempo de lanzamiento',
        'Stack: React, NestJS, PostgreSQL, TypeScript',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: '01.2023 - 04.2023',
    value: 'Front-End Developer — Freelance',
    details: {
      company: 'Freelance',
      role: 'Front-End Developer',
      items: [
        'Plataforma e-commerce completa con Next.js y Node.js',
        'Optimización de rendimiento y técnicas de SEO',
        'Mejoras de usabilidad en sitios web existentes',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: '03.2021 - 12.2022',
    value: 'Back-End Developer en TI House',
    details: {
      company: 'TI House',
      role: 'Back-End Developer',
      items: [
        'Seguimiento de pedidos con Socket.io + NoSQL (+23% rendimiento)',
        'Optimización de tiempos de carga web en un 15%',
        'Pipes de NestJS para manejo HTTP y seguridad del ERP',
        'Reducción de errores mensuales en el sistema ERP',
      ],
    },
  },
  { type: 'RETURN_ARR_CLOSE' },
  { type: 'METHOD_CLOSE' },

  { type: 'BLANK' },

  { type: 'METHOD_OPEN', name: 'Habilidades' },
  { type: 'RETURN_ARR_OPEN' },
  { type: 'STR_LIST', values: ['JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'Go (aprendiendo)'] },
  { type: 'STR_LIST', values: ['React', 'Next.js', 'HTML5', 'CSS3', 'Sass', 'UI/UX'] },
  { type: 'STR_LIST', values: ['PostgreSQL', 'MySQL', 'NoSQL', 'Prisma ORM', 'SQL Server'] },
  { type: 'STR_LIST', values: ['GCP', 'Nginx', 'CI/CD', 'Docker', 'Git', 'Firebase', 'WebSockets'] },
  { type: 'RETURN_ARR_CLOSE' },
  { type: 'METHOD_CLOSE' },

  { type: 'BLANK' },

  { type: 'METHOD_OPEN', name: 'IA & LLM Development' },
  { type: 'RETURN_ARR_OPEN' },
  {
    type: 'OBJ_ENTRY',
    key: 'bots_y_voz',
    value: 'ChatGPT API · Azure Speech · Speech Recognition',
    details: {
      company: 'IA Conversacional',
      role: 'Bots & Voice AI',
      items: [
        'Bot conversacional con ChatGPT API en NestJS (Contollo)',
        'Avatar 3D con Azure Speech Service y procesamiento de voz',
        'Speech Recognition API en tiempo real',
        'Consultas en lenguaje natural sobre datos estructurados',
        'Arquitectura RAG + PGVector + Embeddings',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: 'automatizaciones',
    value: 'N8N · Workflows · Integraciones',
    details: {
      company: 'Automatizaciones',
      role: 'N8N & Workflows',
      items: [
        'Flujos de trabajo automatizados con N8N',
        'Integración con APIs externas (Slack, Notion, Gmail...)',
        'Pipelines de procesamiento de datos con IA',
        'Bots de atención al cliente con LLMs',
        'Notificaciones y triggers automáticos',
      ],
    },
  },
  {
    type: 'OBJ_ENTRY',
    key: 'herramientas_dev',
    value: 'Claude Code · Cursor · Gemini',
    details: {
      company: 'AI Dev Tools',
      role: 'Desarrollo asistido por IA',
      items: [
        'Claude Code — CLI de Anthropic para desarrollo',
        'Cursor — editor de código con IA integrada',
        'Gemini — integración y desarrollo con Google AI',
        'Prompt engineering y diseño de sistemas de IA',
        'OpenCode — alternativa open source de Cursor',
      ],
    },
  },
  { type: 'RETURN_ARR_CLOSE' },
  { type: 'METHOD_CLOSE' },

  { type: 'BLANK' },

  { type: 'METHOD_OPEN', name: 'Educación' },
  { type: 'RETURN_ARR_OPEN' },
  {
    type: 'OBJ_ENTRY',
    key: 'Universidad Nacional Autónoma de Nicaragua',
    value: 'Ingeniería en Sistemas de Información'
  },
  { type: 'RETURN_ARR_CLOSE' },
  { type: 'METHOD_CLOSE' },

  { type: 'BLANK' },

  { type: 'CLASS_CLOSE' },
  { type: 'EXPORT', name: 'FranciscoGarcia' }
]

/* ─── Indentación por tipo ─── */
const INDENT_LEVEL = {
  CLASS_OPEN: 0,
  CLASS_CLOSE: 0,
  EXPORT: 0,
  BLANK: 1,
  METHOD_OPEN: 1,
  METHOD_CLOSE: 1,
  THIS_PROP: 2,
  RETURN_ARR_OPEN: 2,
  RETURN_ARR_CLOSE: 2,
  OBJ_ENTRY: 3,
  STR_LIST: 3
}

const Dots = ({ type }) => {
  const level = INDENT_LEVEL[type] ?? 0
  if (level === 0) return null
  return (
    <span className="cl-dots">
      {Array(level * 2)
        .fill('.')
        .join(' ')}
    </span>
  )
}

const LineContent = ({ line }) => {
  switch (line.type) {
    case 'CLASS_OPEN':
      return (
        <>
          <span className="cl-kw">class </span>
          <span className="cl-classname">{line.name}</span>
          <span className="cl-bracket"> {'{'}</span>
        </>
      )
    case 'CLASS_CLOSE':
      return <span className="cl-bracket">{'}'}</span>
    case 'EXPORT':
      return (
        <>
          <span className="cl-kw">export default </span>
          <span className="cl-classname">{line.name}</span>
        </>
      )
    case 'BLANK':
      return null
    case 'METHOD_OPEN':
      return (
        <>
          <span className="cl-fn">{line.name}</span>
          <span className="cl-bracket">{' () {'}</span>
        </>
      )
    case 'METHOD_CLOSE':
      return <span className="cl-bracket">{'}'}</span>
    case 'THIS_PROP':
      return (
        <>
          <span className="cl-kw-this">this.</span>
          <span className="cl-prop">{line.key}</span>
          <span className="cl-default"> = </span>
          <span className="cl-str">'{line.value}'</span>
        </>
      )
    case 'RETURN_ARR_OPEN':
      return (
        <>
          <span className="cl-kw">return </span>
          <span className="cl-bracket">[</span>
        </>
      )
    case 'RETURN_ARR_CLOSE':
      return <span className="cl-bracket">]</span>
    case 'OBJ_ENTRY':
      return (
        <>
          <span className="cl-bracket">{'{ '}</span>
          <span className="cl-str">'{line.key}'</span>
          <span className="cl-default">: </span>
          <span className={`cl-str${line.details ? ' has-details' : ''}`}>
            '{line.value}'
          </span>
          <span className="cl-bracket">{' },'}</span>
          {line.details && <span className="cl-hint"></span>}
        </>
      )
    case 'STR_LIST':
      return (
        <span className="cl-flex">
          {line.values.map((v, i) => (
            <span key={i}>
              <span className="cl-str">'{v}'</span>
              {i < line.values.length - 1 && (
                <span className="cl-default">, </span>
              )}
            </span>
          ))}
        </span>
      )
    default:
      return null
  }
}

/* ─── Tooltip flotante ─── */
const FloatingTooltip = ({ data, x, y }) => {
  const ref = useRef(null)
  const [pos, setPos] = useState({ left: x + 18, top: y - 12 })

  useEffect(() => {
    if (!ref.current) return
    const { width, height } = ref.current.getBoundingClientRect()
    let left = x + 18
    let top = y - 12
    if (left + width > window.innerWidth - 16) left = x - width - 18
    if (top + height > window.innerHeight - 16) top = y - height + 12
    setPos({ left, top })
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      className="code-tooltip"
      style={{ left: pos.left, top: pos.top }}
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 4 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div className="code-tooltip__header">
        <span className="code-tooltip__role">{data.role}</span>
        <span className="code-tooltip__company">{data.company}</span>
      </div>
      <ul className="code-tooltip__list">
        {data.items.map((item, i) => (
          <li key={i}>
            <i className="fas fa-caret-right" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─── Componente principal ─── */
export const Code = () => {
  const [seenSet, setSeenSet] = useState(() => new Set())
  const [tooltipData, setTooltipData] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const lineRefs = useRef([])

  /* IntersectionObserver — activa líneas al hacer scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setSeenSet((prev) => {
              if (prev.has(idx)) return prev
              const next = new Set(prev)
              next.add(idx)
              return next
            })
          }
        })
      },
      { threshold: 0.4 }
    )
    lineRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = useCallback((e) => {
    setCursor({ x: e.clientX, y: e.clientY })
  }, [])

  const handleLineEnter = useCallback((line) => {
    if (line.details) setTooltipData(line.details)
  }, [])

  const handleLineLeave = useCallback((line) => {
    if (line.details) setTooltipData(null)
  }, [])

  return (
    <>
      <div className="code-container" onMouseMove={handleMouseMove}>
        <span className="code-container__filename">Portafolio/index.ts</span>
        <span className="code-container__circle" />

        {LINES.map((line, idx) => (
          <div
            key={idx}
            ref={(el) => (lineRefs.current[idx] = el)}
            data-idx={idx}
            className={[
              'code-line',
              seenSet.has(idx) ? 'is-seen' : '',
              line.details ? 'has-tooltip' : ''
            ]
              .filter(Boolean)
              .join(' ')}
            onMouseEnter={() => handleLineEnter(line)}
            onMouseLeave={() => handleLineLeave(line)}
          >
            <span className="code-line__nr">{idx + 1}</span>
            <span className="code-line__body">
              <Dots type={line.type} />
              <LineContent line={line} />
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {tooltipData && (
          <FloatingTooltip data={tooltipData} x={cursor.x} y={cursor.y} />
        )}
      </AnimatePresence>
    </>
  )
}
