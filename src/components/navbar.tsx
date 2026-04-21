'use client'
import { useEffect, useState } from "react";
// import logo from '@/assets/logofbsemfundo3.png'

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projetos", "sobre", "contato"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`w-full ${isOpen ? "bg-zinc-900  " : "bg-transparent"} transition-all duration-300 md:bg-zinc-900 fixed py-4 px-6 md:px-8 top-0  left-0 z-50 md:border-b border-zinc-700 `}>
      <div className="container flex items-center  justify-between">

        {/* LOGO */}
        <a href="#home">
          {/* <img src={logo} alt="Logo" className="w-14 md:w-16" /> */}
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8">
          {["home", "projetos", "sobre", "contato"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`navhover ${active === item ? "active" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          onClick={handleClick}
          className="md:hidden flex  flex-col gap-1"
        >
          <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 mt-4" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 bg-zinc-900 px-4 pb-4">
          {["home", "projetos", "sobre", "contato"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleLinkClick}
              className={`navhover ${active === item ? "active" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}