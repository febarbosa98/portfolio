import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import { motion, useInView } from "motion/react"
import { useRef } from 'react'

export default function Contato() {

     const [state, handleSubmit] = useForm("xojykaay");


     const titleRef = useRef(null)
      const isInViewTitle = useInView(titleRef)
      const descRef = useRef(null)
      const isInViewDesc = useInView(descRef)
      const contatoRec = useRef(null)
      const isInViewContato = useInView(contatoRec)
 
  return (
    <section
      id="contato"
      className="section container "
      >
        <motion.div
        ref={titleRef}
      
       initial={{ opacity: 0, x: -50 }} animate={isInViewTitle ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.2 }}
        >

      <h2 className="title glow-border ">Contato</h2>
        </motion.div>
      <div className="grid md:grid-cols-2 gap-16 items-start">

      
      <div className="">
        <motion.div
        ref={descRef}
      
       initial={{ opacity: 0, x: -50 }} animate={isInViewDesc ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.4 }}
        >

        <p className="mb-2">
          Quer entrar em contato? Preencha o formulário ou envie um e-mail para
          mim. Estou sempre aberto a novas oportunidades e colaborações!
        </p>
        <a
          href="mailto:contato@febarbosa.xyz"
          className="text-green-400 hover:underline "
          >
          contato@febarbosa.xyz
        </a>
          </motion.div>

        <motion.div className="mt-10 border-t border-zinc-700 pt-10"
        ref={descRef}
      
       initial={{ opacity: 0, x: -50 }} animate={isInViewDesc ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-300">
            Para mais informações, acesse meu perfil no LinkedIn ou GitHub para ver meus projetos e experiências anteriores. Estou ansioso para conectar com você!
          </p>

          <div className="mt-6">
          <ul className="flex gap-2 ">
            <li className="flex items-center gap-1 hover:scale-105 transition-transform">
              <a
                href="https://www.linkedin.com/in/febarbosa98/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
            </li>
            <li className="flex items-center gap-1 hover:scale-105 transition-transform">
              <a
                href="https://github.com/febarbosa98/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={40} />
              </a>
            </li>
            <li className="flex items-center gap-1 hover:scale-105 transition-transform">
              <a
                href="https://www.instagram.com/febarbosa98"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={40} />
              </a>
            </li>
          </ul>
        </div>
        </motion.div>
        

        
      </div>

      <div className="flex justify-end">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md flex flex-col gap-4 "

          ref={contatoRec}
      
       initial={{ opacity: 0, x: 50 }} animate={isInViewContato ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 1, delay: 0.2 }}
       
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
              className="bg-zinc-800 pl-2 py-1 rounded-lg text-white  border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="bg-zinc-800 pl-2 py-1 rounded-lg  text-white  border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
             <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}

      />
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
              className="bg-zinc-800 pl-2 py-1 text-white rounded-lg border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
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
              className="bg-zinc-800 pl-2 py-1 text-white rounded-lg  border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
                className="bg-zinc-800 pl-2 py-1 text-white  rounded-lg border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              rows={4}
              placeholder="Digite sua mensagem..."
            ></textarea>
             <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button type="submit" disabled={state.submitting} className="btn btn-primary">
            Enviar mensagem
          </button>
        </motion.form>

        {state.succeeded && (
          <p className="mt-4 text-green-400">
            Obrigado por entrar em contato! Responderei o mais breve possível.
          </p>
        )}
      </div>
      </div>
    </section>
  );
}
