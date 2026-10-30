import { useRef, useState, useCallback } from 'react'
import StackSection from '../components/StackSection.jsx'
import Modal from '../components/Modal.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

// EmailJS keys are public by design. Override with VITE_EMAILJS_* env vars if you like.
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '_k3XmegWA88yRn64b'
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_inj7qvs'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_0dgln3s'
const EMAIL = 'iqbalumar131@gmail.com'

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [modal, setModal] = useState(null)
  const close = useCallback(() => setModal(null), [])

  async function onSubmit(e) {
    e.preventDefault()
    setSending(true)
    try {
      // loaded only when the form is actually submitted, keeps the first load small
      const mod = await import('@emailjs/browser')
      const emailjs = mod.default || mod
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      formRef.current.reset()
      setModal({ title: 'Message Sent! ✅', desc: "Thanks for reaching out — I've received your message and will get back to you as soon as possible." })
    } catch (err) {
      console.error('EmailJS error:', err)
      setModal({
        title: 'Oops, something went wrong 😕',
        desc: `Your message couldn't be sent right now. Please try emailing directly:\n\n${EMAIL}\n\nError: ${(err && (err.text || err.message)) || 'Unknown error'}`,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <StackSection id="contact">
      <div className="container">
        <div className="contact-inner">
          <div>
            <p className="section-label">Let's Talk</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Got a <span className="accent">Project?</span></h2>
            <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>
            <div className="contact-info-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>{EMAIL}</span>
            </div>
            <div className="contact-info-item">
              <Icon name="instagram" size={18} />
              @umar_iqbal__
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
            <div className="form-group"><input type="text" name="from_name" placeholder="Your Name" className="form-input" required autoComplete="name" /></div>
            <div className="form-group"><input type="email" name="reply_to" placeholder="Your Email" className="form-input" required autoComplete="email" /></div>
            <div className="form-group"><textarea name="message" placeholder="Your Message" rows="5" className="form-input" required /></div>
            <button type="submit" className="form-submit" disabled={sending} style={{ opacity: sending ? 0.75 : 1 }}>
              <span>{sending ? 'Sending…' : 'Send Message'}</span>
              {sending ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ animation: 'spin .8s linear infinite' }} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <Modal data={modal} onClose={close} />
    </StackSection>
  )
}
