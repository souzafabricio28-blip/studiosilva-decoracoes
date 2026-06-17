export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#461620',
        color: 'var(--cream)',
        padding: '60px 0 30px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: 'var(--rose-secondary)',
                marginBottom: 12,
              }}
            >
              Studio Silva<span style={{ color: 'var(--accent-gold)' }}>.</span>
            </h3>
            <p style={{ color: 'rgba(255,248,245,0.7)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              A vida é mais feliz com festa! 🎉 Decorações em balões para todos os tipos de evento.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', marginBottom: 16, color: 'var(--rose-secondary)' }}>
              Navegação
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Início', 'Sobre', 'Serviços', 'Galeria', 'Depoimentos', 'Contato'].map((item) => {
                const hrefs = {
                  'Início': '#hero',
                  'Sobre': '#about',
                  'Serviços': '#services',
                  'Galeria': '#gallery',
                  'Depoimentos': '#testimonials',
                  'Contato': '#contact',
                };
                return (
                <a
                  key={item}
                  href={hrefs[item]}
                  style={{ color: 'rgba(255,248,245,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--rose-secondary)'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255,248,245,0.6)'; }}
                >
                  {item}
                </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', marginBottom: 16, color: 'var(--rose-secondary)' }}>
              Serviços
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Mini Festa na Mesa', 'Pegue e Monte', 'Arco de Balão 2m', 'Arranjo de Balões', 'Convite Personalizado'].map((item) => (
                <span key={item} style={{ color: 'rgba(255,248,245,0.6)', fontSize: '0.9rem' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', marginBottom: 16, color: 'var(--rose-secondary)' }}>
              Redes Sociais
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/silva.decoracoees' },
                { label: 'WhatsApp', href: 'https://wa.me/5511960855115?text=Olá! Vi o site e quero um orçamento.' },
                { label: 'Email', href: 'mailto:studiosilvadecoracao@gmail.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255,248,245,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--rose-secondary)'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255,248,245,0.6)'; }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,248,245,0.1)',
            paddingTop: 30,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
          className="footer-bottom"
        >
          <p style={{ color: 'rgba(255,248,245,0.5)', fontSize: '0.85rem' }}>
            &copy; {year} Studio Silva Decorações. Todos os direitos reservados.
          </p>
          <p style={{ color: 'rgba(255,248,245,0.5)', fontSize: '0.85rem' }}>
            Feito com <span style={{ color: 'var(--rose-secondary)' }}>♥</span> para você
            <br />
            <a href="/admin" style={{ color: 'rgba(255,248,245,0.3)', fontSize: '0.75rem', textDecoration: 'none' }}>Admin</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
