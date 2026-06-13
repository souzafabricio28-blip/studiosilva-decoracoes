export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 50%, var(--rose-light) 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 164, 184, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 92, 122, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
          animation: 'fadeInUp 1s ease',
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            color: 'var(--rose-primary)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Decorações para Festas
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: 'var(--text-dark)',
            marginBottom: 12,
          }}
        >
          Studio Silva
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--rose-secondary)',
            marginBottom: 16,
            fontStyle: 'italic',
          }}
        >
          A vida é mais feliz com festa! 🎉
        </p>
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-soft)',
            maxWidth: 520,
            margin: '0 auto 40px',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Decorações em balões para todos os tipos de evento. Qualidade, carinho e criatividade em cada detalhe.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#gallery" className="btn btn-primary">
            Ver Galeria
          </a>
          <a href="#contact" className="btn btn-secondary">
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
        }}
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="var(--rose-secondary)" strokeWidth="2" />
          <circle cx="12" cy="14" r="3" fill="var(--rose-secondary)" />
        </svg>
      </div>
    </section>
  );
}
