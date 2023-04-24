import { useState } from 'react'
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

  const nextStep = () => {
    setStepCount(stepCount + 1)
  }

  const handleSubmit = async () => {
    setLoading(true)
    const response = await sendEmail(formData)
    if (response.status === 200) {
      closeModal()
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
