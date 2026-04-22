import fernando from '@/assets/img/avatar2.jpg'
import AnimatedHero from '../components/animatedHero';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="container min-h-screen flex items-center justify-between flex-wrap gap-8  px-4 overflow-hidden " id="home">
        <div className="text-left mx-auto lg:mx-0 mt-10 md:mt-15 lg:mt-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                Olá, sou <br /> Fernando Barbosa
            </h1>
            <p className="text-xl md:text-2xl">
                Desenvolvedor Front-End
            </p>
            <p className="text-lg md:text-xl ">
                especializado em React e interfaces modernas.
            </p>

            <div className="flex gap-4 flex-wrap justify-start mt-8">

            <a href="#projetos" className="btn-primary btn">
                Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline">
                Falar comigo
            </a>
            </div>

            <div className="mt-8">
                <ul className="flex gap-2 ">
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform"> 
                                            
                                            <a href="https://www.linkedin.com/in/febarbosa98/" target="_blank" rel="noreferrer" ><FaLinkedin size={40} /></a></li>
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform">
                                            
                                            <a href="https://github.com/febarbosa98/" target="_blank" rel="noreferrer" ><FaGithub size={40} /></a></li>
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform">
                                            
                                            <a href="https://www.instagram.com/febarbosa98" target="_blank" rel="noreferrer" ><FaInstagram size={40} /></a>
                                        </li>
                                    </ul>
            </div>
        </div>
        <div className="relative mt-30 mx-auto lg:mx-0 md:mt-0 order-1 md:order-2 ">
            <img src={fernando} alt="Fernando Barbosa" className="rounded-full w-96 h-96 object-cover relative z-10" />
            <div className="absolute -inset-90 -left-130 w-[280%]" >
            <AnimatedHero  />
            </div>
            
        </div>
    </section>
  );
}