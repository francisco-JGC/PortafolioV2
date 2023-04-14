import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DescNavigation } from './components/DescNavigation'
import { AboutPage } from './pages/about'
import { HomePage } from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <DescNavigation />
    </div>
  )
}

export default App
