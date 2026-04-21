'use client'
import { useEffect, useState } from "react";

export default function Navbar() {
        const [active, setActive] = useState("home");

        useEffect(() => {
            const handleScroll = () => {
                const sections = ["home", "projetos", "sobre", "contato"];
                const scrollPosition = window.scrollY + 200; // Ajuste para considerar a altura do navbar

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const offsetTop = element.offsetTop;
                        const offsetHeight = element.offsetHeight;

                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActive(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    return (
        <nav className="w-full bg-zinc-900 fixed py-4 px-8 top-0 left-0 z-50  border-b border-zinc-700">
            <div className="container flex items-center justify-between">

            <div className="text-2xl font-bold">
                <a href="#home" className="text-white">
                    Fernando Barbosa
                </a>
            </div> 
            <div className="hidden md:flex gap-8">
                <a href="#home" className={`navhover ${active === "home" ? "active" : ""}`}>
                    Home
                </a>
                <a href="#projetos" className={`navhover ${active === "projetos" ? "active" : ""}`}>
                    Projetos
                </a>
                <a href="#sobre" className={`navhover ${active === "sobre" ? "active" : ""}`}>
                    Sobre
                </a>
                <a href="#contato" className={`navhover ${active === "contato" ? "active" : ""}`}>
                    Contato
                </a>
            </div>
            </div>
        </nav>
    );
}