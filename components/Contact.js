import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '5511960855115';
    const text = `Olá! Meu nome é ${formData.name}.\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nTipo de evento: ${formData.eventType || 'Não informado'}\nMensagem: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 8,
    border: '2px solid var(--rose-light)',
    background: 'var(--cream)',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Solicite seu orçamento ou tire suas dvidas. Estamos prontos para transformar seu evento em algo inesquecível!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: 'var(--text-dark)',
                marginBottom: 24,
              }}
            >
              Vamos conversar!
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                marginBottom: 32,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--rose-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="var(--rose-primary)">
                    <path d="M3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 3.44772 9 4V8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8V4Z" />
                    <path d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V8C19 8.55228 18.5523 9 18 9H14C13.4477 9 13 8.55228 13 8V4Z" />
                    <path d="M3 14C3 13.4477 3.44772 13 4 13H8C8.55228 13 9 13.4477 9 14V18C9 18.5523 8.55228 19 8 19H4C3.44772 19 3 18.5523 3 18V14Z" />
                    <path d="M13 14C13 13.4477 13.4477 13 14 13H18C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>
                    Instagram
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--rose-primary)', fontSize: '0.95rem' }}
                  >
                    @studiosilva
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--rose-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="var(--rose-primary)">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H17C18.1046 3 19 3.89543 19 5V17C19 18.1046 18.1046 19 17 19H5C3.89543 19 3 18.1046 3 17V5Z" />
                    <path d="M3 7L11 12L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>
                    Email
                  </div>
                  <a
                    href="mailto:contato@studiosilva.com"
                    style={{ color: 'var(--rose-primary)', fontSize: '0.95rem' }}
                  >
                    contato@studiosilva.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--rose-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="var(--rose-primary)">
                    <path d="M16 3H6C4.89543 3 4 3.89543 4 5V19L8 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3Z" />
                    <path d="M8 7H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 10H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: 4 }}>
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/5511960855115?text=Olá! Vi o site e quero um orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--rose-primary)', fontSize: '0.95rem' }}
                  >
                    (11) 96085-5115
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'var(--cream-dark)',
                borderRadius: 'var(--radius)',
                padding: 24,
              }}
            >
              <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--text-dark)' }}>Horário de atendimento:</strong>
                <br />
                Seg a Sex: 8h s 18h
                <br />
                Sbado: 9h s 14h
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                style={{
                  background: 'var(--rose-light)',
                  borderRadius: 'var(--radius)',
                  padding: 48,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3rem',
                    color: 'var(--rose-primary)',
                    marginBottom: 16,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: 8 }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: 'var(--text-soft)' }}>
                  Obrigada! Em breve entrarei em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    placeholder="Seu nome"
                    onFocus={(e) => { e.target.style.borderColor = 'var(--rose-primary)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--rose-light)'; }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      placeholder="seu@email.com"
                      onFocus={(e) => { e.target.style.borderColor = 'var(--rose-primary)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--rose-light)'; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      placeholder="(00) 00000-0000"
                      onFocus={(e) => { e.target.style.borderColor = 'var(--rose-primary)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--rose-light)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                    Tipo de evento
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--rose-primary)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--rose-light)'; }}
                  >
                    <option value="">Selecione...</option>
                    <option value="infantil">Festa Infantil</option>
                    <option value="casamento">Casamento</option>
                    <option value="15anos">15 Anos</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="tematico">Festa Temática</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Conte um pouco sobre o seu evento..."
                    onFocus={(e) => { e.target.style.borderColor = 'var(--rose-primary)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--rose-light)'; }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Enviar Mensagem
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3L9 15" />
                    <path d="M5 11L9 15L13 11" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
