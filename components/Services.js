const servicesList = [
  { title: 'Mini Festa na Mesa', price: 'A partir de R$ 65,00' },
  { title: 'Pegue e Monte', price: 'A partir de R$ 130,00' },
  { title: 'Decoração Completa com Montagem e Desmontagem', price: 'Consultar Valores' },
  { title: 'Arco de Balão 2 Metros', price: 'A partir de R$ 50,00' },
  { title: 'Arranjos de Balões', price: 'A partir de R$ 50,00' },
  { title: 'Aluguel de Itens Avulso', price: 'Consultar Valores' },
  { title: 'Convite Personalizado', price: 'A partir de R$ 25,00' },
];

const icons = ['🎉', '📦', '✨', '🎈', '🎊', '🪑', '💌'];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Trabalhamos com decoração em balões para todos os tipos de evento.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}
          className="services-grid"
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              style={{
                background: index === 0
                  ? 'linear-gradient(135deg, var(--rose-primary), var(--rose-secondary))'
                  : 'var(--bg-light)',
                borderRadius: 'var(--radius)',
                padding: '36px 24px',
                textAlign: 'center',
                boxShadow: index === 0 ? '0 8px 30px rgba(212, 92, 122, 0.3)' : 'var(--shadow)',
                transition: 'all 0.3s ease',
              }}
              className="service-card"
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: index === 0 ? 'rgba(255,255,255,0.2)' : 'var(--rose-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '1.8rem',
                }}
              >
                {icons[index] || '🎈'}
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  color: index === 0 ? 'var(--white)' : 'var(--text-dark)',
                  marginBottom: 4,
                }}
              >
                {service.title}
              </h3>

              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: index === 0 ? 'var(--white)' : 'var(--rose-primary)',
                  marginBottom: 12,
                }}
              >
                {service.price}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  padding: '8px 24px',
                  borderRadius: 50,
                  background: index === 0 ? 'var(--white)' : 'var(--rose-primary)',
                  color: index === 0 ? 'var(--rose-primary)' : 'var(--white)',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s',
                  marginTop: 12,
                }}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--shadow-hover) !important;
        }
        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
