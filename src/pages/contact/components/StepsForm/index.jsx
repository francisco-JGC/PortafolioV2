import './index.scss'

export const StepLayout = ({ children }) => {
  return (
    <div className="step-layout">
      <div className="step-layout__container__header">
        <h2>Contáctame</h2>
      </div>
      <div className="step-layout__container">{children}</div>
    </div>
  )
}

export const StepOne = ({ formData, setFormData }) => {
  return (
    <StepLayout>
      <div className="step-one">
        <span>
          Hola, mi nombre es{' '}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tu nombre"
          />
          y mi correo es{' '}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Tu correo"
          />
        </span>
      </div>
    </StepLayout>
  )
}

export const StepTwo = ({ formData, setFormData }) => {
  return (
    <StepLayout>
      <div className="step-two">
        <span>
          Estoy interesado en{' '}
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={(e) =>
              setFormData({ ...formData, interest: e.target.value })
            }
            placeholder="Tu interés"
          />
        </span>
      </div>
    </StepLayout>
  )
}

export const StepThree = ({ formData, setFormData }) => {
  return (
    <StepLayout>
      <div className="step-three">
        <span>
          Y me gustaría decirte que{' '}
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tu mensaje"
          />
        </span>
      </div>
    </StepLayout>
  )
}
