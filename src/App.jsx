import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DescNavigation } from './components/DescNavigation'
import { HomePage } from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>

      <DescNavigation />
    </div>
  )
}

export default App
