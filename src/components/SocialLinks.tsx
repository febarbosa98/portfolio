import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/febarbosa98/', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: 'https://github.com/febarbosa98/', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.instagram.com/febarbosa98', label: 'Instagram', icon: FaInstagram },
]

export default function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <ul className={`social-links ${showLabels ? 'social-links-labeled' : ''}`}>
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={label}><a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (abre em nova aba)`}>
          <Icon aria-hidden="true" />{showLabels && <span>{label}</span>}
        </a></li>
      ))}
    </ul>
  )
}

