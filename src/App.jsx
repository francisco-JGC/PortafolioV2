import './App.scss'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/about'
import { HomePage } from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Header />

      <Layout>
        <HomePage />
        <AboutPage />
      </Layout>

      {/* <DescNavigation /> */}
    </div>
  )
}

export default App
