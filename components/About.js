import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Sobre Nós</h2>
        <p className="section-subtitle">
          Conheça o Studio Silva e nossa paixão por transformar momentos em memórias inesquecíveis.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: 'linear-gradient(135deg, var(--rose-light), var(--cream-dark))',
            }}
          >
            <Image
              src="/images/about.jpg"
              alt="Studio Silva Decorações"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: 'var(--rose-primary)',
                marginBottom: 20,
              }}
            >
              Transformando momentos em arte
            </h3>
            <p
              style={{
                color: 'var(--text-soft)',
                fontSize: '1.05rem',
                marginBottom: 16,
                lineHeight: 1.8,
              }}
            >
              No <strong>Studio Silva Decorações</strong>, acreditamos que toda festa merece um toque especial. 
              Trabalhamos com decorações em balões para todos os tipos de evento, desde aniversários íntimos 
              até grandes celebrações.
            </p>
            <p
              style={{
                color: 'var(--text-soft)',
                fontSize: '1.05rem',
                marginBottom: 16,
                lineHeight: 1.8,
              }}
            >
              Nossa missão é trazer alegria e cor para cada momento, com criatividade, qualidade e muito carinho 
              em cada detalhe. Cada arco de balões é pensado e montado com dedicação.
            </p>
            <p
              style={{
                color: 'var(--text-soft)',
                fontSize: '1.05rem',
                marginBottom: 32,
                lineHeight: 1.8,
              }}
            >
              Temos opções para todos os gostos e bolsos, com kits que variam do simples ao luxo. 
              Venha realizar sua festa conosco!
            </p>


          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
