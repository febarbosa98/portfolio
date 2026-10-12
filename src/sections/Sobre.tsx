import fernando from '@/assets/img/fernando2.webp'
import { FiArrowUpRight } from 'react-icons/fi'
import { skills } from '../data/skills'
import Reveal from '../components/Reveal'

export default function Sobre() {
  return (
    <section id="sobre" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="about-layout">
          <div className="about-visual">
            <h2 id="about-title">Por trás<br />do código.</h2>
            <div className="about-photo"><img src={fernando} alt="Fernando Barbosa" width="480" height="540" loading="lazy" decoding="async" /></div>
            <p>Fernando Barbosa <span>Desenvolvedor Front-End</span></p>
          </div>
          <div className="about-copy">
            <p className="about-intro">Curiosidade para aprender.<br /><span>Cuidado para construir.</span></p>
            <p>Olá! Sou o Fernando Barbosa, tenho 27 anos e estou em transição de carreira para a área de Desenvolvimento Web. Atualmente curso Análise e Desenvolvimento de Sistemas na UNINOVE e me especializo em JavaScript, HTML, CSS, TypeScript, React e Next.js, com foco na criação de interfaces modernas, responsivas e com excelente experiência para o usuário.</p>
            <p>Tenho uma rotina intensa de estudos práticos, desenvolvimento de projetos pessoais e cursos complementares, como a formação Full Stack JavaScript pela OneBit Code. Ao longo dessa jornada, venho aplicando conceitos essenciais como versionamento com Git, consumo de APIs REST, componentização com React, manipulação de DOM e estilização com CSS moderno.</p>
            <p>Meu foco está em desenvolver aplicações bem estruturadas, com código limpo e escalável, sempre priorizando a experiência do usuário e a qualidade da interface. Gosto de transformar ideias em soluções reais, construindo projetos que vão além do visual e entregam valor de verdade.</p>
            <p>Antes de migrar para a tecnologia, tive experiências profissionais que fortaleceram habilidades como responsabilidade, organização, trabalho em equipe e resolução de problemas, competências que hoje aplico diretamente no meu dia a dia como desenvolvedor.</p>
            <p>Hoje, minha maior motivação está em transformar ideias em interfaces funcionais, acessíveis e bem construídas, contribuindo com projetos que impactem positivamente a vida das pessoas. Estou em busca da minha primeira oportunidade como Desenvolvedor Front-End, pronto para colaborar com times engajados, aprender continuamente e crescer na área de tecnologia.</p>
            <a href="#contato" className="text-link">Vamos conversar <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </Reveal>
        <Reveal className="skills-section">
          <div className="skills-heading"><h3>Ferramentas & tecnologias</h3><p>Minha base para transformar ideias em interfaces.</p></div>
          <ul className="skills-grid">
            {skills.map(({ name, icon: Icon }) => <li key={name}><Icon aria-hidden="true" /><span>{name}</span></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
