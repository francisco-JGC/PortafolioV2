import { Header } from '../header'

import './index.scss'

export const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
    </main>
  )
}
