import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 96,
        right: 24,
        zIndex: 999,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--rose-primary)',
        border: 'none',
        cursor: 'pointer',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(212, 92, 122, 0.3)',
        transition: 'all 0.3s ease',
        animation: 'fadeInUp 0.3s ease',
        color: 'white',
        fontSize: '1.2rem',
      }}
      onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; }}
      aria-label="Voltar ao topo"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17L10 3" />
        <path d="M4 9L10 3L16 9" />
      </svg>
    </button>
  );
}
