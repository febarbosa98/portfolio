'use client'

import fernando from "@/assets/img/fernando2.png";
import { motion } from "motion/react";
import { skills } from "../data/skills";
import {
  cardStagger,
  fadeLeft,
  fadeRight,
  fadeUp,
  hoverLift,
  staggerContainer,
  viewport,
} from "../lib/motion";

export default function Sobre() {
  return (
    <section id="sobre" className="section container">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <h2 className="title glow-border">Sobre mim</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="mb-4 leading-relaxed text-gray-300" variants={fadeLeft}>
            Ola! Sou o Fernando Barbosa, tenho 27 anos e estou em transicao de
            carreira para a area de Desenvolvimento Web. Atualmente curso Analise
            e Desenvolvimento de Sistemas na UNINOVE e me especializo em
            JavaScript, HTML, CSS, TypeScript, React e Next.js, com foco na
            criacao de interfaces modernas, responsivas e com excelente
            experiencia para o usuario.
          </motion.p>
          <motion.p className="mb-4 leading-relaxed text-gray-300" variants={fadeLeft}>
            Tenho uma rotina intensa de estudos praticos, desenvolvimento de
            projetos pessoais e cursos complementares, como a formacao Full Stack
            JavaScript pela OneBit Code. Ao longo dessa jornada, venho aplicando
            conceitos essenciais como versionamento com Git, consumo de APIs REST,
            componentizacao com React, manipulacao de DOM e estilizacao com CSS
            moderno.
          </motion.p>
          <motion.p className="mb-4 leading-relaxed text-gray-300" variants={fadeLeft}>
            Meu foco esta em desenvolver aplicacoes bem estruturadas, com codigo
            limpo e escalavel, sempre priorizando a experiencia do usuario e a
            qualidade da interface. Gosto de transformar ideias em solucoes reais,
            construindo projetos que vao alem do visual e entregam valor de
            verdade.
          </motion.p>
          <motion.p className="mb-4 leading-relaxed text-gray-300" variants={fadeLeft}>
            Antes de migrar para a tecnologia, tive experiencias profissionais que
            fortaleceram habilidades como responsabilidade, organizacao, trabalho
            em equipe e resolucao de problemas, competencias que hoje aplico
            diretamente no meu dia a dia como desenvolvedor.
          </motion.p>
          <motion.p className="mb-4 leading-relaxed text-gray-300" variants={fadeLeft}>
            Hoje, minha maior motivacao esta em transformar ideias em interfaces
            funcionais, acessiveis e bem construidas, contribuindo com projetos que
            impactem positivamente a vida das pessoas. Estou em busca da minha
            primeira oportunidade como Desenvolvedor Front-End, pronto para
            colaborar com times engajados, aprender continuamente e crescer na
            area de tecnologia.
          </motion.p>
        </motion.div>

        <motion.img
          src={fernando}
          alt="Fernando Barbosa"
          className="w-120 h-85 md:h-110 object-cover rounded-full"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        />
      </div>

      <motion.div
        className="mt-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h3 className="title glow-border" variants={fadeUp}>
          Ferramentas & Tecnologias
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={cardStagger}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col items-center gap-2 "
              variants={fadeUp}
              whileHover={hoverLift}
            >
              <skill.icon className="size-10 md:size-15" title={skill.name} />
              <span className="mt-3">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
