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
              Cotia - SP
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
