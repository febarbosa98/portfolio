import fernando from '@/assets/img/avatar2.webp'
import { FiArrowDownRight, FiArrowUpRight, FiCode, FiSmartphone, FiZap, FiUsers } from 'react-icons/fi'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'

const principles = [
  { icon: FiCode, title: 'Interfaces modernas', description: 'Código limpo e organizado' },
  { icon: FiSmartphone, title: 'Design responsivo', description: 'Uma boa experiência em cada tela' },
  { icon: FiZap, title: 'Foco em performance', description: 'Sites rápidos e eficientes' },
  { icon: FiUsers, title: 'Pessoas em primeiro lugar', description: 'Interfaces pensadas para quem usa' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="greeting">OLÁ, SOU</p>
            <h1 id="hero-title">Fernando<br /><span>Barbosa<span className="name-period">.</span></span></h1>
            <p className="hero-role">Desenvolvedor Front-End</p>
            <p className="hero-description">Crio interfaces modernas, responsivas e funcionais, transformando ideias em experiências digitais.</p>
            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">Ver Projetos <FiArrowDownRight aria-hidden="true" /></a>
              <a href="#contato" className="btn btn-outline">Falar comigo <FiArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="hero-social"><SocialLinks /><span>Vamos nos conectar</span></div>
          </div>
          <div className="portrait-composition">
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-orbit" aria-hidden="true" />
            <img className="hero-portrait" src={fernando} alt="Fernando Barbosa sorrindo" width="979" height="1305" fetchPriority="high" />
            <span className="portrait-code" aria-hidden="true"><FiCode /></span>
          </div>
        </div>
        <Reveal className="principles">
          {principles.map(({ icon: Icon, title, description }) => (
            <div className="principle" key={title}>
              <Icon aria-hidden="true" />
              <div><h2>{title}</h2><p>{description}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
