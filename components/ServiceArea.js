export default function ServiceArea() {
  return (
    <section id="service-area" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <h2 className="section-title">Região de Atendimento</h2>
        <p className="section-subtitle">
          Atendemos em toda a região metropolitana de São Paulo e Grande ABC.
        </p>

        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.941179468793!2d-46.908560317135074!3d-23.53163816207895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03c0e7a27e73%3A0x7b3d2abe4c0f9575!2zSmFuZGlyYSwgU1A!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Região de atendimento Studio Silva"
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 40,
            marginTop: 40,
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--rose-primary)',
              }}
            >
              Jandira
            </div>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: 4 }}>
              Sede e atendimento presencial
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--rose-primary)',
              }}
            >
              Região
            </div>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: 4 }}>
              Barueri, Carapicuíba,<br />Osasco, Cotia, Santana de Parnaíba
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--rose-primary)',
              }}
            >
              + Regiões
            </div>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: 4 }}>
              Consulte-nos para<br />outras localidades
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
