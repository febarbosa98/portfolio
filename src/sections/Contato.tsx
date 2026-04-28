import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  fadeLeft,
  fadeRight,
  hoverLift,
  staggerContainer,
  tapScale,
  viewport,
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

const fieldClassName =
  "bg-zinc-800 pl-2 py-1 rounded-lg text-white border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600";
const easeOut = "easeOut" as const;

export default function Contato() {
  const [state, handleSubmit] = useForm("xojykaay");

  return (
    <section id="contato" className="section container">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <h2 className="title glow-border">Contato</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeLeft}>
            <p className="mb-2">
              Quer entrar em contato? Preencha o formulario ou envie um e-mail
              para mim. Estou sempre aberto a novas oportunidades e colaborações!
            </p>
            <a
              href="mailto:contato@febarbosa.xyz"
              className="text-green-400 hover:underline"
            >
              contato@febarbosa.xyz
            </a>
          </motion.div>

          <motion.div
            className="mt-10 border-t border-zinc-700 pt-10"
            variants={fadeLeft}
          >
            <p className="text-gray-300">
              Para mais informações, acesse meu perfil no LinkedIn ou GitHub para
              ver meus projetos e experiencias anteriores. Estou ansioso para
              conectar com voce!
            </p>

            <ul className="mt-6 flex gap-2">
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

        <div className="flex justify-end">
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                className={fieldClassName}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@exemplo.com"
                className={fieldClassName}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="form-label">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(11) 91234-5678"
                className={fieldClassName}
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="form-label">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto da mensagem"
                className={fieldClassName}
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="form-label">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className={fieldClassName}
                rows={4}
                placeholder="Digite sua mensagem..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary cursor-pointer"
              whileHover={hoverLift}
              whileTap={tapScale}
            >
              {state.submitting ? "Enviando..." : "Enviar mensagem"}
            </motion.button>
            <AnimatePresence>
        {state.succeeded && (
          <motion.p
            className="mt-4 text-green-400"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            Obrigado por entrar em contato! Responderei o mais breve possivel.
          </motion.p>
        )}
      </AnimatePresence>
          </motion.form>
        </div>
      </div>

      
    </section>
  );
}
