import './index.scss'

export const CustomButton = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}
