import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full py-4 px-8 bg-transparent text-center border-t border-zinc-800 mt-20 pt-10">
            <div className="flex flex-col  gap-6 md:flex-row md:justify-between container">
                <div className="text-lg font-bold">
                    <h2>Fernando Barbosa</h2>
                    <p className="text-sm text-gray-400">Desenvolvedor Front-End</p>
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-bold text-green-200 mb-5">Links</h2>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#hero" >Início</a></li>
                        <li><a href="#sobre" >Sobre</a></li>
                        <li><a href="#projetos" >Projetos</a></li>
                        <li><a href="#contato" >Contato</a></li>
                    </ul>
                </div>
                <div className="text-left">
                    <h2 className="text-lg font-bold mb-5 text-green-200">Redes Sociais</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-1"> 
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/febarbosa98/" target="_blank" rel="noreferrer" >LinkedIn</a></li>
                        <li className="flex items-center gap-1">
                            <FaGithub />
                            <a href="https://github.com/febarbosa98/" target="_blank" rel="noreferrer" >GitHub</a></li>
                        <li className="flex items-center gap-1">
                            <FaInstagram />
                            <a href="https://www.instagram.com/febarbosa98" target="_blank" rel="noreferrer" >Instagram</a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="mt-6">

            <p className="text-sm text-gray-400 ">
                &copy; {new Date().getFullYear()} Fernando Barbosa. Todos os direitos reservados.
            </p>
            </div>
        </footer>
    );
}