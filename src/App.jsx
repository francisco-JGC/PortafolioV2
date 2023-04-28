import './App.scss'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import { DescNavigation } from './components/DescNavigation'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/about'
import { ContactPage } from './pages/contact'
import { HomePage } from './pages/home'
import { ProjectPages } from './pages/projects'

const App = () => {
  AOS.init()

  return (
    <div className="App">
      <Header />

      <Layout>
        <HomePage />
        <ProjectPages />
        <AboutPage />
        <ContactPage />
      </Layout>

      <DescNavigation />
    </div>
  )
}

export default App
