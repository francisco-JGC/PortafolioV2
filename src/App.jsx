import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { HomePage } from './pages/home'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
