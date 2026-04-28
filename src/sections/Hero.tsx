import fernando from "@/assets/img/avatar2.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import AnimatedHero from "../components/animatedHero";
import {
  fadeLeft,
  fadeRight,
  hoverLift,
  scaleIn,
  staggerContainer,
  tapScale,
} from "../lib/motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/febarbosa98/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/febarbosa98/",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.instagram.com/febarbosa98",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const easeOut = "easeOut" as const;

export default function Hero() {
  return (
    <section
      className="container min-h-screen flex items-center justify-between flex-wrap gap-8 px-4 overflow-hidden"
      id="home"
    >
      <motion.div
        className="text-left mx-auto lg:mx-0 mt-10 md:mt-15 lg:mt-0 order-2 md:order-1"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeLeft}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olá, sou <br /> Fernando Barbosa
          </h1>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">
            Desenvolvedor Front-End
          </p>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <p className="text-lg md:text-xl mt-2 max-w-lg">
            Transformo ideias em sites bonitos e funcionais. Apaixonado por criar
            experiencias digitais que encantam usuarios e geram resultados reais.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-wrap justify-start mt-8"
          variants={fadeLeft}
        >
          <motion.a
            href="#projetos"
            className="btn-primary btn"
            whileHover={hoverLift}
            whileTap={tapScale}
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contato"
            className="btn btn-outline"
            whileHover={hoverLift}
            whileTap={tapScale}
          >
            Falar comigo
          </motion.a>
        </motion.div>

        <motion.div className="mt-8" variants={fadeLeft}>
          <ul className="flex gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1">
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={tapScale}
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  <Icon size={40} />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-20 mx-auto lg:mx-0 md:mt-0 order-1 md:order-2"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={fernando}
          alt="Fernando Barbosa"
          className="rounded-full w-85 md:w-110 h-85 md:h-110 object-cover relative z-10"
          variants={scaleIn}
        />
        <div className="absolute -inset-90 -left-130 w-[280%]" aria-hidden="true">
          <AnimatedHero />
        </div>
      </motion.div>
    </section>
  );
}
