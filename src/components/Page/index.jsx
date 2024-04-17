import './index.scss'

export default function Page({ children, className, id }) {
  return (
    <div className={`page ${className}`} id={id}>
      {children}
    </div>
  )
}
