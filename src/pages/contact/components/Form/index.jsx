import { useState } from 'react'
import { toast } from 'react-toastify'
import { CustomButton } from '../../../../components/CustomButton'
import { Spinner } from '../../../../components/Spinner'
import { sendEmail } from '../../../../services/sendEmail'
import { StepOne, StepThree, StepTwo } from '../StepsForm'
import './index.scss'

export const FormContact = ({ closeModal }) => {
  const [stepCount, setStepCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  })

  const notify = () =>
    toast.success(
      'Gracias por contactarme! 🤗, te responderé lo más pronto posible. 👋',
      {
        theme: 'dark',
        position: 'bottom-center',
        autoClose: 3000
      }
    )

  const shakeOnInvalid = (input) => {
    if (input.classList.contains('onEmptyInput')) return
    if (input.value !== '') return

    input.classList.add('onEmptyInput')

    const interval = setInterval(() => {
      input.classList.remove('onEmptyInput')
      clearInterval(interval)
    }, 1000)
  }

  const nextStep = () => {
    if (stepCount === 1 || formData.name === '') {
      const ref = document.querySelector('.step-one input[name="name"]')
      const refEmail = document.querySelector('.step-one input[name="email"]')

      shakeOnInvalid(ref)
      shakeOnInvalid(refEmail)

      if (formData.name === '' || formData.email === '') return
    }

    if (stepCount === 2 && formData.interest === '') {
      const ref = document.querySelector('.step-two input')
      shakeOnInvalid(ref)
      return
    }

    setStepCount(stepCount + 1)
  }

  const handleSubmit = async () => {
    if (stepCount === 3 && formData.message === '') {
      const ref = document.querySelector('.step-three input')

      shakeOnInvalid(ref)
      return
    }
    setLoading(true)

    const response = await sendEmail(formData)
    if (response.status === 200) {
      closeModal()
      notify()
    }
  }

  const renderStep = () => {
    switch (stepCount) {
      case 1:
        return <StepOne formData={formData} setFormData={setFormData} />
      case 2:
        return <StepTwo formData={formData} setFormData={setFormData} />
      case 3:
        return <StepThree formData={formData} setFormData={setFormData} />
      default:
        return <StepOne formData={formData} setFormData={setFormData} />
    }
  }

  return (
    <div className="form-contact">
      <div className="form-contact__container">
        <div className="form-contact__container__body">
          <div className="step">{renderStep()}</div>

          <div className="form-contact__container__body__buttons">
            <div className="count-steps">
              <span className="count-steps__current">paso {stepCount}</span>
              <span className="count-steps__total">/3</span>
            </div>

            {stepCount < 3 ? (
              <CustomButton
                className="form-contact__container__body__buttons__next"
                onClick={nextStep}
              >
                Siguiente <i className="fas fa-arrow-right" />
              </CustomButton>
            ) : (
              <CustomButton
                className="form-contact__container__body__buttons__next"
                onClick={handleSubmit}
              >
                Enviar <i className="fas fa-paper-plane" />
              </CustomButton>
            )}
          </div>

          <div className="content-spinner">{loading && <Spinner />}</div>
        </div>
      </div>
    </div>
  )
}
