import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

export default function Contato() {

     const [state, handleSubmit] = useForm("xojykaay");
 
  return (
    <section
      id="contato"
      className="section container grid grid-cols-1 gap-12 md:grid-cols-3 "
    >
      <div className=" md:col-span-2">
        <h2 className="title glow-border ">Contato</h2>
        <p className="subtitle  mb-2">
          Quer entrar em contato? Preencha o formulário ou envie um e-mail para
          mim. Estou sempre aberto a novas oportunidades e colaborações!
        </p>
        <a
          href="mailto:contato@febarbosa.xyz"
          className="text-green-400 hover:underline "
        >
          contato@febarbosa.xyz
        </a>

        <div className="mt-10 border-t border-zinc-700 pt-10">
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
        </div>
        

        
      </div>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-md bg-zinc-900  p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-zinc-800 pl-2 py-1 text-white placeholder:text-green-400 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="bg-zinc-800 pl-2 py-1 text-white placeholder:text-green-400 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="bg-zinc-800 pl-2 py-1 text-white placeholder:text-green-400 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="bg-zinc-800 pl-2 py-1 text-white placeholder:text-green-400 border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="bg-zinc-800 pl-2 py-1 text-white placeholder:text-green-500  border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
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
        </form>

        {state.succeeded && (
          <p className="mt-4 text-green-400">
            Obrigado por entrar em contato! Responderei o mais breve possível.
          </p>
        )}
      </div>
    </section>
  );
}
