import { useForm, ValidationError } from '@formspree/react'
import { FiArrowUpRight } from 'react-icons/fi'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'

export default function Contato() {
  const [state, handleSubmit] = useForm('xojykaay')

  return (
    <section id="contato" className="section dark-section contact-section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <h2 id="contact-title">Uma ideia?<br /><span>Vamos conversar.</span></h2>
          <p>Estou aberto a novas oportunidades e colaborações. Conte um pouco sobre o que você tem em mente.</p>
          <a className="contact-email" href="mailto:contato@febarbosa.com.br">contato@febarbosa.com.br <FiArrowUpRight aria-hidden="true" /></a>
          <div className="contact-social"><p>Você também me encontra por aqui</p><SocialLinks showLabels /></div>
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit} className="contact-form" aria-label="Enviar uma mensagem" aria-busy={state.submitting}>
            <div className="form-field">
              <label htmlFor="name">Nome <span>(obrigatório)</span></label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Como posso chamar você?" required aria-describedby="name-error" />
              <div id="name-error" className="field-error"><ValidationError prefix="Nome" field="name" errors={state.errors} /></div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">E-mail <span>(obrigatório)</span></label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required aria-describedby="email-error" />
                <div id="email-error" className="field-error"><ValidationError prefix="E-mail" field="email" errors={state.errors} /></div>
              </div>
              <div className="form-field">
                <label htmlFor="phone">Telefone <span>(opcional)</span></label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(11) 91234-5678" aria-describedby="phone-error" />
                <div id="phone-error" className="field-error"><ValidationError prefix="Telefone" field="phone" errors={state.errors} /></div>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Assunto</label>
              <input id="subject" name="subject" type="text" placeholder="Sobre o que vamos conversar?" aria-describedby="subject-error" />
              <div id="subject-error" className="field-error"><ValidationError prefix="Assunto" field="subject" errors={state.errors} /></div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensagem <span>(obrigatório)</span></label>
              <textarea id="message" name="message" rows={4} placeholder="Conte um pouco sobre sua ideia ou oportunidade..." required aria-describedby="message-error" />
              <div id="message-error" className="field-error"><ValidationError prefix="Mensagem" field="message" errors={state.errors} /></div>
            </div>
            <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button type="submit" disabled={state.submitting} className="btn btn-primary">{state.submitting ? 'Enviando...' : 'Enviar mensagem'}<FiArrowUpRight aria-hidden="true" /></button>
            <div aria-live="polite" aria-atomic="true">
              {state.succeeded && <p className="form-success" role="status">Mensagem enviada! Obrigado pelo contato. Responderei o mais breve possível.</p>}
              {state.errors && <div className="field-error" role="alert"><p>Não foi possível enviar. Confira os campos e tente novamente ou entre em contato por e-mail.</p><ValidationError errors={state.errors} /></div>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
