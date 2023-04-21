import './App.scss'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/about'
import { HomePage } from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <HomePage />
        <AboutPage />
      </Layout>

      {/* <DescNavigation /> */}
    </div>
  )
}

export default App
