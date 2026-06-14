const kits = [
  {
    title: 'Kit Luxo',
    price: 'R$ 300,00',
    description: 'Nosso kit mais completo! Arcos de balões luxuosos com decoração especial para sua festa.',
    features: ['Decoração completa', 'Arcos de balões premium', 'Até 4 cores', 'Montagem profissional'],
    highlight: true,
  },
  {
    title: 'Kit Ouro',
    price: 'R$ 200,00',
    description: 'Kit premium com decoração elegante e sofisticada para eventos especiais.',
    features: ['Decoração completa', 'Arcos de balões', 'Até 3 cores', 'Montagem profissional'],
    highlight: false,
  },
  {
    title: 'Kit Bronze',
    price: 'R$ 160,00',
    description: 'Kit intermediário com ótimo custo-benefício para sua festa.',
    features: ['Decoração completa', 'Arcos de balões', 'Até 3 cores', 'Montagem profissional'],
    highlight: false,
  },
  {
    title: 'Kit Prata',
    price: 'R$ 130,00',
    description: 'Kit econômico sem abrir mão da qualidade e do carinho na decoração.',
    features: ['Decoração completa', 'Arcos de balões', 'Até 2 cores', 'Montagem profissional'],
    highlight: false,
  },
];

const balloonTypes = [
  {
    title: 'Balões Simples',
    price: 'R$ 100,00',
    description: 'Arco de balões simples, perfeito para decorações mais discretas.',
    specs: ['Até 2 cores', 'Medida de 2 metros por arco', 'Montagem simples'],
  },
  {
    title: 'Balões Espiral',
    price: 'R$ 120,00',
    description: 'Arco de balões no formato espiral, um charme à parte!',
    specs: ['Até 2 cores', 'Medida de 2 metros por arco', 'Efeito espiral'],
  },
  {
    title: 'Balões Desconstruído',
    price: 'R$ 160,00',
    description: 'Estilo desconstruído e moderno para quem busca algo diferente.',
    specs: ['Até 3 cores', 'Medida de 2 metros por arco', 'Estilo desconstruído'],
  },
  {
    title: 'Balões Desconstruído Encapsulado',
    price: 'R$ 200,00',
    description: 'O desconstruído ganha um toque extra com balões encapsulados.',
    specs: ['Até 3 cores', 'Medida de 2 metros por arco', 'Balões encapsulados'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <h2 className="section-title">Nossos Kits</h2>
        <p className="section-subtitle">
          Temos opções para todos os gustos e bolsos. Escolha o kit ideal para sua festa!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            marginBottom: 80,
          }}
          className="kits-grid"
        >
          {kits.map((kit, index) => (
            <div
              key={index}
              style={{
                background: kit.highlight
                  ? 'linear-gradient(135deg, var(--rose-primary), var(--rose-secondary))'
                  : 'var(--bg-light)',
                borderRadius: 'var(--radius)',
                padding: '36px 24px',
                textAlign: 'center',
                boxShadow: kit.highlight ? '0 8px 30px rgba(212, 92, 122, 0.3)' : 'var(--shadow)',
                transform: kit.highlight ? 'scale(1.05)' : 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              className="kit-card"
            >
              {kit.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: -30,
                    background: 'var(--accent-gold)',
                    color: 'var(--white)',
                    padding: '4px 40px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    transform: 'rotate(45deg)',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Popular
                </div>
              )}

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  color: kit.highlight ? 'var(--white)' : 'var(--text-dark)',
                  marginBottom: 8,
                }}
              >
                {kit.title}
              </h3>

              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: kit.highlight ? 'var(--white)' : 'var(--rose-primary)',
                  marginBottom: 16,
                }}
              >
                {kit.price}
              </div>

              <p style={{
                color: kit.highlight ? 'rgba(255,255,255,0.9)' : 'var(--text-soft)',
                fontSize: '0.9rem',
                marginBottom: 20,
                lineHeight: 1.6,
              }}>
                {kit.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {kit.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.85rem',
                      color: kit.highlight ? 'rgba(255,255,255,0.85)' : 'var(--text-soft)',
                    }}
                  >
                    <span style={{ color: kit.highlight ? 'var(--white)' : 'var(--rose-primary)' }}>✓</span>
                    {feat}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  padding: '10px 28px',
                  borderRadius: 50,
                  background: kit.highlight ? 'var(--white)' : 'var(--rose-primary)',
                  color: kit.highlight ? 'var(--rose-primary)' : 'var(--white)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.3s',
                }}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>

        <h2
          className="section-title"
          style={{ fontSize: '2rem', marginBottom: 12 }}
        >
          Avulsos
        </h2>
        <p className="section-subtitle">
          Quer algo mais simples? Confira nossas opções avulsas de arcos de balões.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
          className="kits-grid"
        >
          {balloonTypes.map((type, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-light)',
                borderRadius: 'var(--radius)',
                padding: '32px 20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease',
              }}
              className="kit-card"
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--rose-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '1.5rem',
                }}
              >
                🎈
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  color: 'var(--text-dark)',
                  marginBottom: 4,
                }}
              >
                {type.title}
              </h3>

              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--rose-primary)',
                  marginBottom: 12,
                }}
              >
                {type.price}
              </div>

              <p style={{
                color: 'var(--text-soft)',
                fontSize: '0.85rem',
                marginBottom: 16,
                lineHeight: 1.6,
              }}>
                {type.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                {type.specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.8rem',
                      color: 'var(--text-soft)',
                    }}
                  >
                    <span style={{ color: 'var(--rose-primary)' }}>•</span>
                    {spec}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  padding: '8px 24px',
                  borderRadius: 50,
                  border: '2px solid var(--rose-primary)',
                  color: 'var(--rose-primary)',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s',
                }}
              >
                Pedir Orçamento
              </a>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-soft)',
            fontSize: '0.9rem',
            marginTop: 32,
            fontStyle: 'italic',
          }}
        >
          * Arcos de balões e adicionais a mais do que a imagem so cobrados valores à parte.
        </p>
      </div>

      <style jsx>{`
        .kit-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--shadow-hover) !important;
        }
        @media (max-width: 992px) {
          .kits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .kits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
