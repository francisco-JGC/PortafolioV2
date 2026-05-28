import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.scss'

import { CustomCursor }   from './components/CustomCursor'
import { DescNavigation } from './components/DescNavigation'
import { Header }         from './components/Header'
import { Info }           from './components/Info'
import { Layout }         from './components/Layout'
import { LoadingScreen }  from './components/LoadingScreen'
import { ScrollProgress } from './components/ScrollProgress'
import { AboutPage }      from './pages/about'
import { ContactPage }    from './pages/contact'
import { HomePage }       from './pages/home'
import { ProjectPages }   from './pages/projects'
import { ServicePages }   from './pages/services'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, offset: 60, easing: 'ease-out-cubic' })
  }, [])

  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Header />
          <Layout>
            <HomePage />
            <ProjectPages />
            <ServicePages />
            <AboutPage />
            <ContactPage />
          </Layout>
          <DescNavigation />
          <Info />
        </>
      )}

      <ToastContainer style={{ fontSize: '.9em' }} />
    </div>
  )
}

export default App
