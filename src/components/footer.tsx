import { FiArrowUpRight } from 'react-icons/fi'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="container">
        <div className="footer-top">
          <a className="footer-brand" href="#home"><span className="wordmark" aria-hidden="true">fb<span>.</span></span><span>Fernando Barbosa<small>Desenvolvedor Front-End</small></span></a>
          <nav aria-label="Navegação do rodapé"><a href="#home">Início</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
          <SocialLinks />
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Fernando Barbosa. Todos os direitos reservados.</p><a href="#home">Voltar ao topo <FiArrowUpRight aria-hidden="true" /></a></div>
      </div>
    </footer>
  )
}
