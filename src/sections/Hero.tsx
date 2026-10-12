import fernando from "@/assets/img/avatar2.jpg";
import { FaGithub, FaInstagram, FaLinkedin   } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { BsFillLightningChargeFill } from "react-icons/bs";

import { IoCodeSlashSharp } from "react-icons/io5";
import { FiSmartphone  } from "react-icons/fi";
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
          <h1 className="text-4xl md:text-8xl font-bold mb-4">
           <span className="text-green-400 text-2xl tracking-wider ">Olá, sou</span> <br /> Fernando <br />
           <span className="text-green-500">Barbosa</span>
          </h1>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <p className="text-xl md:text-2xl  font-semibold">
            Desenvolvedor Front-End
          </p>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <p className="text-lg md:text-xl mt-2 max-w-lg">
            Crio interfaces modernas, responsivas e funcionais, transformando ideias em experiências digitais que fazem a diferença.

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

      <div className="container absolute bottom-0 flex justify-between w-full px-4 py-2" >
        <div>
         <IoCodeSlashSharp size={50} className="bg-green-100 rounded-full text-green-500 p-2" />
          <p className="text-lg font-bold">Interfaces modernas</p>
          <p>Codigo limpo e organizado</p>
        </div>
        <div>
          <FiSmartphone size={50} className="bg-green-100 rounded-full text-green-500 p-2" />
          <p className="text-lg font-bold">Totalmente responsivo</p>
          <p>Experiencias em todos os dispositivos</p>
        </div>
        <div>
          <BsFillLightningChargeFill  size={50} className="bg-green-100 rounded-full text-green-500 p-2"  />

          <p className="text-lg font-bold">Foco em performance</p>
          <p>Sites rápidos e eficientes</p>
        </div>
        <div>
          <GoPeople size={50} className="bg-green-100 rounded-full text-green-500 p-2" />
          <p className="text-lg font-bold">Tecnologia atual</p>
          <p>Sempre aprendendo e evoluindo</p>
        </div>
      </div>
    </section>
  );
}
