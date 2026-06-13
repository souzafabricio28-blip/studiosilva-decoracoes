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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233651.18026616745!2d-46.70796213883884!3d-23.68216040991315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335dae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1"
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
              São Paulo
            </div>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: 4 }}>
              Capital e Grande SP
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
              ABC
            </div>
            <div style={{ color: 'var(--text-soft)', fontSize: '0.9rem', marginTop: 4 }}>
              Santo André, São Bernardo,<br />São Caetano, Diadema
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
