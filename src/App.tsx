import { MotionConfig } from 'motion/react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Contato from './sections/Contato'
import Hero from './sections/Hero'
import Projetos from './sections/Projetos'
import Sobre from './sections/Sobre'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projetos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
