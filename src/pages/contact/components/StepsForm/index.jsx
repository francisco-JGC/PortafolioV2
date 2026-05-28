import './index.scss'

export const StepOne = ({ formData, setFormData, errors }) => (
  <div className="step-fields">
    <div className="step-fields__group">
      <label htmlFor="name">
        <span className="label-text">Tu nombre</span>
        {errors?.name && <span className="label-error">requerido</span>}
      </label>
      <input
        id="name"
        type="text"
        name="name"
        autoComplete="off"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Francisco García"
        className={errors?.name ? 'input-error' : ''}
      />
    </div>

    <div className="step-fields__group">
      <label htmlFor="email">
        <span className="label-text">Tu correo electrónico</span>
        {errors?.email && <span className="label-error">requerido</span>}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="off"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="correo@ejemplo.com"
        className={errors?.email ? 'input-error' : ''}
      />
    </div>
  </div>
)

export const StepTwo = ({ formData, setFormData, errors }) => (
  <div className="step-fields">
    <div className="step-fields__group step-fields__group--full">
      <label htmlFor="interest">
        <span className="label-text">¿En qué puedo ayudarte?</span>
        {errors?.interest && <span className="label-error">requerido</span>}
      </label>
      <input
        id="interest"
        type="text"
        name="interest"
        autoComplete="off"
        value={formData.interest}
        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
        placeholder="Desarrollo web, diseño UI, consultoría..."
        className={errors?.interest ? 'input-error' : ''}
      />
    </div>
  </div>
)

export const StepThree = ({ formData, setFormData, errors }) => (
  <div className="step-fields">
    <div className="step-fields__group step-fields__group--full">
      <label htmlFor="message">
        <span className="label-text">Tu mensaje</span>
        {errors?.message && <span className="label-error">requerido</span>}
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Cuéntame sobre tu proyecto, idea o pregunta..."
        className={errors?.message ? 'input-error' : ''}
      />
    </div>
  </div>
)
