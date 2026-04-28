import fernando from '@/assets/img/avatar2.jpg'
import AnimatedHero from '../components/animatedHero';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="container min-h-screen flex items-center justify-between flex-wrap gap-8  px-4 overflow-hidden " id="home">
        <div className="text-left mx-auto lg:mx-0 mt-10 md:mt-15 lg:mt-0 order-2 md:order-1">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                Olá, sou <br /> Fernando Barbosa
            </h1>
            </motion.div>
            
            <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{opacity:0, x: -50}}
            transition={{ duration: 0.6, delay: 0.4 }}>

            <p className="text-xl md:text-2xl text-green-400 font-semibold">
                Desenvolvedor Front-End
            </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>

            <p className="text-lg md:text-xl mt-2 max-w-lg ">
                Transformo ideias em sites bonitos e funcionais. Apaixonada por criar experiências digitais que encantam
usuários e geram resultados reais.
            </p>
            </motion.div>

            <motion.div  className="flex gap-4 flex-wrap justify-start mt-8"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
            >

            <a href="#projetos" className="btn-primary btn">
                Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline">
                Falar comigo
            </a>
            </motion.div>

            <motion.div className="mt-8" 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 1 }}
            >
                <ul className="flex gap-2 ">
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform"> 
                                            
                                            <a href="https://www.linkedin.com/in/febarbosa98/" target="_blank" rel="noreferrer" ><FaLinkedin size={40} /></a></li>
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform">
                                            
                                            <a href="https://github.com/febarbosa98/" target="_blank" rel="noreferrer" ><FaGithub size={40} /></a></li>
                                        <li className="flex items-center gap-1 hover:scale-105 transition-transform">
                                            
                                            <a href="https://www.instagram.com/febarbosa98" target="_blank" rel="noreferrer" ><FaInstagram size={40} /></a>
                                        </li>
                                    </ul>
            </motion.div>
        </div>
        <motion.div
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }}
        className="relative mt-20 mx-auto lg:mx-0 md:mt-0 order-1 md:order-2 ">
            <img src={fernando} alt="Fernando Barbosa" className="rounded-full w-85 md:w-110 h-85 md:h-110 object-cover relative z-10" />
            <div className="absolute -inset-90 -left-130 w-[280%]" >
            <AnimatedHero  />
            </div>
            
        </motion.div>
    </section>
  );
}