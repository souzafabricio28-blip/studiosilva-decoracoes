import { useState } from 'react';

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
];

const services = [
  'Kit Luxo',
  'Kit Ouro',
  'Kit Bronze',
  'Kit Prata',
  'Balões Simples',
  'Balões Espiral',
  'Balões Desconstruído',
  'Balões Encapsulado',
  'Decoração Personalizada',
  'Outro',
];

export default function Scheduling() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '5511960855115';
    const text = `Olá! Quero agendar um serviço.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nServiço: ${form.service}\nData: ${form.date}\nHorário: ${form.time}\nObservações: ${form.notes || 'Nenhuma'}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
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
    <section id="scheduling" className="section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Agende seu Orçamento</h2>
        <p className="section-subtitle">
          Escolha a data e o horário ideal para conversarmos sobre seu evento.
        </p>

        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            background: 'var(--cream)',
            borderRadius: 'var(--radius)',
            padding: 48,
            boxShadow: 'var(--shadow)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 32 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--rose-primary)', marginBottom: 16 }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: 8 }}>Agendamento enviado!</h3>
              <p style={{ color: 'var(--text-soft)' }}>Em breve confirmaremos pelo WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Nome *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Seu nome" onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Telefone *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle} placeholder="(11) 96085-5115" onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Serviço desejado *</label>
                <select name="service" value={form.service} onChange={handleChange} required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'}>
                  <option value="">Selecione...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Data *</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required min={today} style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Horário *</label>
                  <select name="time" value={form.time} onChange={handleChange} required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'}>
                    <option value="">Selecione...</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 6, color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Observações</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Descreva seu evento..." onFocus={(e) => e.target.style.borderColor = 'var(--rose-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--rose-light)'} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center' }}>
                Agendar via WhatsApp
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3L9 15" /><path d="M5 11L9 15L13 11" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
