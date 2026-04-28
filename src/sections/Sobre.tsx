'use client'

import {skills} from '../data/skills'
import fernando from '@/assets/img/fernando2.png'
import { motion, useInView } from "motion/react"
import { useRef } from 'react'

export default function Sobre(){

     const ref = useRef(null)
      const sobreRef = useRef(null)
      const isInView = useInView(ref)
      const isInViewSobre = useInView(sobreRef)
      const fotoRef = useRef(null)
      const isInViewFoto = useInView(fotoRef)
      const tecRef = useRef(null)
      const isInViewTec = useInView(tecRef)
    return(
        <section id="sobre" className="section container">
            <motion.div
           ref={ref}
      
       initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }}
            >

            <h2 className="title glow-border ">Sobre mim</h2>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-center gap-12 ">
            <motion.div
            ref={sobreRef}
      
       initial={{ opacity: 0, x: -50 }} animate={isInViewSobre ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl ">

            <p className="mb-4 leading-relaxed text-gray-300">Olá! Sou o Fernando Barbosa, tenho 27 anos e estou em transição de carreira para a área de Desenvolvimento Web. Atualmente curso Análise e Desenvolvimento de Sistemas na UNINOVE e me especializo em JavaScript, HTML, CSS, TypeScript, React e Next.js, com foco na criação de interfaces modernas, responsivas e com excelente experiência para o usuário.</p>
            <p className="mb-4 leading-relaxed text-gray-300">Tenho uma rotina intensa de estudos práticos, desenvolvimento de projetos pessoais e cursos complementares, como a formação Full Stack JavaScript pela OneBit Code. Ao longo dessa jornada, venho aplicando conceitos essenciais como versionamento com Git, consumo de APIs REST, componentização com React, manipulação de DOM e estilização com CSS moderno (Flexbox, Grid e responsividade). Também busco constantemente evoluir em boas práticas de código, organização, performance e usabilidade.</p>
            <p className="mb-4 leading-relaxed text-gray-300">Meu foco está em desenvolver aplicações bem estruturadas, com código limpo e escalável, sempre priorizando a experiência do usuário e a qualidade da interface. Gosto de transformar ideias em soluções reais, construindo projetos que vão além do visual e entregam valor de verdade.</p>
            
            <p className="mb-4 leading-relaxed text-gray-300">Antes de migrar para a tecnologia, tive uma experiência profissional que contribuiu para o desenvolvimento de habilidades como responsabilidade, organização, trabalho em equipe e resolução de problemas competências que hoje aplico diretamente no meu dia a dia como desenvolvedor.</p>

            <p className="mb-4 leading-relaxed text-gray-300">Hoje, minha maior motivação está em transformar ideias em interfaces funcionais, acessíveis e bem construídas, contribuindo com projetos que impactem positivamente a vida das pessoas. Estou em busca da minha primeira oportunidade como Desenvolvedor Front-End, pronto para colaborar com times engajados, aprender continuamente e crescer na área de tecnologia.</p>
            </motion.div>

            <motion.img
            ref={fotoRef}
             initial={{ opacity: 0, x: 50 }} animate={isInViewFoto ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.6, delay: 0.4 }}
            src={fernando} alt="Fernando Barbosa" className="w-120 h-85 md:h-110 object-cover rounded-full" />
            </div>


            <motion.div className="mt-12"
             ref={tecRef}
             initial={{ opacity: 0, y: 50 }} animate={isInViewTec ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: 0.4 }}
            >

                <h1 className="title glow-border">Ferramentas & Tecnologias</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">




{skills.map((skill) => (
                    <div key={skill.name} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col items-center gap-2 hover:border-green-500 transition ">
                        <skill.icon  className="size-10 md:size-15" title={skill.name} />
                        <span className="mt-3">{skill.name}</span>
                    </div>
                ))}


            </div></motion.div>
        </section>
    )
}


