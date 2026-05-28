import { motion } from 'framer-motion'
import Page from '../../../components/Page'
import './index.scss'

const SERVICES = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas con React, Next.js y Node.js. Desde landing pages hasta sistemas completos con panel de administración.',
    tags: ['React', 'Next.js', 'Node.js', 'NestJS'],
    accent: '#5918df',
  },
  {
    icon: 'fas fa-pen-nib',
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas con enfoque en la experiencia del usuario. Prototipos en Figma, sistemas de diseño y componentes reutilizables.',
    tags: ['Figma', 'Adobe XD', 'Illustrator', 'Responsive'],
    accent: '#0400ff',
  },
  {
    icon: 'fas fa-database',
    title: 'Backend & APIs',
    description: 'APIs REST robustas y escalables. Gestión de bases de datos relacionales, autenticación, microservicios y despliegue en producción.',
    tags: ['REST API', 'MySQL', 'PostgreSQL', 'Docker'],
    accent: '#4ce3f7',
  },
  {
    icon: 'fas fa-robot',
    title: 'Desarrollo con IA',
    description: 'Integración de LLMs (Claude, GPT-4), arquitectura RAG con PGVector, bots conversacionales, Speech Recognition y desarrollo asistido por IA con Claude Code y Cursor.',
    tags: ['LLM', 'RAG', 'PGVector', 'Claude API', 'Speech API'],
    accent: '#7b4ef0',
  },
  {
    icon: 'fas fa-sitemap',
    title: 'Automatización con N8N',
    description: 'Diseño e implementación de flujos de trabajo automatizados con N8N: integración entre plataformas (CRM, ERP, e-commerce), pipelines con IA, bots de atención al cliente y notificaciones en tiempo real.',
    tags: ['N8N', 'Workflows', 'Webhooks', 'Bots IA', 'Integraciones'],
    accent: '#fa8537',
  },
]

const card = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const ServicePages = () => (
  <Page className="service-pages" id="services">
    <div className="service-pages__header">
      <small>Servicios {'/>'}</small>
      <h2>¿En qué puedo ayudarte?</h2>
      <p>Desarrollo web, diseño UI/UX, backend, integraciones con IA y automatización de flujos con N8N.</p>
    </div>

    <motion.div
      className="service-pages__grid"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {SERVICES.map((s, i) => (
        <motion.div key={i} className="service-card" variants={card}>
          <div className="service-card__icon" style={{ '--accent': s.accent }}>
            <i className={s.icon} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <div className="service-card__tags">
            {s.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Page>
)
