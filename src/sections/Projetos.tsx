import { useEffect, useMemo, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { projetos } from '../data/projetos'
import Reveal from '../components/Reveal'

const featuredProject = projetos.find((project) => project.featured)
const regularProjects = projetos.filter((project) => !project.featured)
type Project = (typeof projetos)[number]

function getItemsPerPage() {
  if (typeof window === 'undefined') return 6
  return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 6
}

function ProjectLinks({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <div className="project-links">
    <a href={project.urlSite} target="_blank" rel="noreferrer" className={featured ? 'btn btn-primary' : 'project-link'} aria-label={`Ver projeto ${project.title} (nova aba)`}>Ver projeto <FiArrowUpRight aria-hidden="true" /></a>
    <a href={project.urlGit} target="_blank" rel="noreferrer" className={featured ? 'btn btn-outline' : 'project-link project-github'} aria-label={`GitHub de ${project.title} (nova aba)`}><FaGithub aria-hidden="true" /> GitHub</a>
  </div>
}

function TechTags({ techs }: { techs: string[] }) {
  return <ul className="tech-tags" aria-label="Tecnologias">{techs.map((tech) => <li key={tech}>{tech}</li>)}</ul>
}

export default function Projetos() {
  const [pagination, setPagination] = useState(() => ({ page: 0, size: getItemsPerPage() }))
  const { page: currentPage, size: itemsPerPage } = pagination

  useEffect(() => {
    const handleResize = () => {
      const next = getItemsPerPage()
      setPagination((previous) => previous.size === next ? previous : { page: Math.floor(previous.page * previous.size / next), size: next })
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pages = useMemo(() => {
    const result: Project[][] = []
    for (let index = 0; index < regularProjects.length; index += itemsPerPage) result.push(regularProjects.slice(index, index + itemsPerPage))
    return result
  }, [itemsPerPage])
  const goToPage = (page: number) => setPagination((previous) => ({ ...previous, page }))

  return (
    <section id="projetos" className="section dark-section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-heading">
          <h2 id="projects-title">Ideias que viraram<br /><span>projetos reais.</span></h2>
          <p>Uma seleção do que venho construindo.<br />Do primeiro conceito à interface em funcionamento.</p>
        </Reveal>
        {featuredProject && <Reveal>
          <article className="featured-project">
            <div className="featured-image">
              <img src={featuredProject.image} alt={`Página inicial de ${featuredProject.title}`} loading="lazy" decoding="async" width="1440" height="900" />
            </div>
            <div className="featured-copy">
              <span className="featured-label">Projeto em destaque</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <TechTags techs={featuredProject.techs} />
              <ProjectLinks project={featuredProject} featured />
            </div>
          </article>
        </Reveal>}
        <div className="project-collection" role="region" aria-roledescription="carrossel" aria-label="Mais projetos">
          <div className="collection-heading"><h3>Explore mais projetos</h3><span>{regularProjects.length} projetos</span></div>
          <div id="project-page" className="project-grid" key={`${itemsPerPage}-${currentPage}`}>
            {pages[currentPage]?.map((project) => <article key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`Interface de ${project.title}`} width="800" height="500" loading="lazy" decoding="async" />
              </div>
              <div className="project-body"><h4>{project.title}</h4><p>{project.description}</p><TechTags techs={project.techs} /><ProjectLinks project={project} /></div>
            </article>)}
          </div>
          <div className="carousel-controls">
            <p className="carousel-status" role="status" aria-live="polite" aria-atomic="true">Projetos {currentPage * itemsPerPage + 1}–{Math.min((currentPage + 1) * itemsPerPage, regularProjects.length)} de {regularProjects.length}</p>
            <div className="carousel-pagination">
              <button className="icon-button" aria-label="Página anterior" aria-controls="project-page" disabled={currentPage === 0} onClick={() => goToPage(currentPage - 1)}><FiArrowLeft aria-hidden="true" /></button>
              <button className="icon-button" aria-label="Próxima página" aria-controls="project-page" disabled={currentPage === pages.length - 1} onClick={() => goToPage(currentPage + 1)}><FiArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
