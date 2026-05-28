import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '../../../../components/Spinner'
import { sendEmail } from '../../../../services/sendEmail'
import { StepOne, StepThree, StepTwo } from '../StepsForm'
import './index.scss'

const STEPS = [
  { nr: 1, label: 'Sobre ti',    icon: 'fas fa-user' },
  { nr: 2, label: 'Proyecto',   icon: 'fas fa-lightbulb' },
  { nr: 3, label: 'Mensaje',    icon: 'fas fa-comment-dots' },
]

const stepVariants = {
  enter:  (dir) => ({ x: dir > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   (dir) => ({ x: dir > 0 ? -32 : 32, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }),
}

export const FormContact = ({ closeModal }) => {
  const [step, setStep]       = useState(1)
  const [dir, setDir]         = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors]   = useState({})
  const [formData, setFormData] = useState({ name: '', email: '', interest: '', message: '' })
  const prevStep = useRef(1)

  const go = (next) => {
    setDir(next > prevStep.current ? 1 : -1)
    prevStep.current = next
    setStep(next)
  }

  const validate = () => {
    const e = {}
    if (step === 1) {
      if (!formData.name.trim())  e.name  = true
      if (!formData.email.trim()) e.email = true
    }
    if (step === 2 && !formData.interest.trim()) e.interest = true
    if (step === 3 && !formData.message.trim())  e.message  = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const nextStep = () => { if (validate()) go(step + 1) }
  const prevStepFn = () => go(step - 1)

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    const response = await sendEmail(formData)
    if (response.status === 200) {
      closeModal()
      toast.success('¡Mensaje enviado! Te responderé pronto 👋', {
        theme: 'dark', position: 'bottom-center', autoClose: 3500
      })
    }
    setLoading(false)
  }

  const renderStep = () => {
    const props = { formData, setFormData, errors }
    if (step === 1) return <StepOne {...props} />
    if (step === 2) return <StepTwo {...props} />
    return <StepThree {...props} />
  }

  const stepTitles = [
    'Hola, cuéntame sobre ti',
    '¿En qué puedo ayudarte?',
    'Cuéntame más',
  ]

  return (
    <div className="form-modal">
      {/* ── Panel izquierdo ── */}
      <div className="form-modal__side">
        <div className="form-modal__side__brand">
          <span className="brand-tag">Contáctame</span>
          <h2>¿Hablamos sobre tu proyecto?</h2>
          <p>Respondo en menos de 24h. Cuéntame tu idea y la hacemos realidad.</p>
        </div>

        <div className="form-modal__side__steps">
          {STEPS.map((s, i) => (
            <div key={s.nr} className="side-step">
              <div className={`side-step__dot ${step > s.nr ? 'done' : ''} ${step === s.nr ? 'active' : ''}`}>
                {step > s.nr
                  ? <i className="fas fa-check" />
                  : <i className={s.icon} />
                }
              </div>
              <div className="side-step__info">
                <span className="side-step__nr">Paso {s.nr}</span>
                <span className="side-step__label">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`side-step__line ${step > s.nr ? 'filled' : ''}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Panel derecho (form) ── */}
      <div className="form-modal__content">
        <div className="form-modal__content__header">
          <h3>{stepTitles[step - 1]}</h3>
          <span className="step-counter">{step} / 3</span>
        </div>

        <div className="form-modal__content__body">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="step-wrapper"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="form-modal__content__footer">
          {step > 1 && (
            <button className="btn-back" onClick={prevStepFn} disabled={loading}>
              <i className="fas fa-arrow-left" /> Atrás
            </button>
          )}

          <div className="footer-right">
            {loading
              ? <Spinner />
              : step < 3
                ? (
                  <button className="btn-next" onClick={nextStep}>
                    Siguiente <i className="fas fa-arrow-right" />
                  </button>
                )
                : (
                  <button className="btn-send" onClick={handleSubmit}>
                    <i className="fas fa-paper-plane" /> Enviar mensaje
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
