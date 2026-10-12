import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -60% 0px' })
    sections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeMenu = () => setIsOpen(false)
    desktop.addEventListener('change', closeMenu)
    return () => desktop.removeEventListener('change', closeMenu)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setIsOpen(false); toggleRef.current?.focus() }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isOpen])

  return (
    <header className="site-header" ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
    }}>
      <div className="container nav-layout">
        <a className="wordmark" href="#home" aria-label="Fernando Barbosa, início" onClick={() => setIsOpen(false)}>fb<span>.</span></a>
        <button className="menu-toggle icon-button" ref={toggleRef} type="button" aria-expanded={isOpen} aria-controls="main-navigation" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="main-navigation" className={`main-navigation ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} className={`nav-link ${id === 'contato' ? 'nav-contact' : ''}`} onClick={() => {
              setActive(id)
              setIsOpen(false)
              const target = document.getElementById(id)
              if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }) }
            }}>{label}{id === 'contato' && <FiArrowUpRight aria-hidden="true" />}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
