import Footer from './components/footer'
import Navbar from './components/navbar'
import Contato from './sections/Contato'
import Hero from './sections/Hero'
import  Projetos from './sections/Projetos'
import Sobre from './sections/Sobre'

function App() {

  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Projetos/>
      <Sobre/>
      <Contato/>

      <Footer/>
    </main>
  )
}

export default App
