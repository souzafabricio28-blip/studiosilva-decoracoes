import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(255, 248, 245, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#hero"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--rose-primary)',
              letterSpacing: '1px',
              lineHeight: 1.2,
            }}
          >
            Studio
            <br />
            Silva
            <span style={{ color: 'var(--accent-gold)', fontWeight: 400 }}>.</span>
          </a>

          <nav
            style={{
              display: 'flex',
              gap: 32,
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--text-dark)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--rose-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-dark)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              zIndex: 1001,
            }}
            className="menu-toggle"
          >
            <div
              style={{
                width: 24,
                height: 2,
                background: 'var(--text-dark)',
                marginBottom: 5,
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: 'var(--text-dark)',
                marginBottom: 5,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: 24,
                height: 2,
                background: 'var(--text-dark)',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 248, 245, 0.98)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: 'var(--text-dark)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
