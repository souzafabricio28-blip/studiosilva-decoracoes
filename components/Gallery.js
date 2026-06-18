import { useState, useEffect, useCallback } from 'react';

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'kits', label: 'Kits' },
  { id: 'baloes', label: 'Balões' },
  { id: 'decoracoes', label: 'Decorações' },
];

const kitNames = ['Luxo', 'Ouro', 'Bronze', 'Prata', 'Especial', 'Premium'];
const balloonNames = ['Simples', 'Espiral', 'Desconstruído', 'Encapsulado', 'Colorido', 'Arco 2m', 'Arranjo', 'Personalizado'];
const decorNames = ['Infantil', 'Casamento', '15 Anos', 'Temática', 'Especial', 'Chá de Lingerie', 'Chá de Bebê', 'Aniversário', 'Formatura', 'Corporativo', 'Luxo', 'Personalizada'];

const galleryItems = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  image: `/images/gallery-${i + 1}.jpg`,
  category: i < 6 ? 'kits' : i < 14 ? 'baloes' : 'decoracoes',
  title: i < 6
    ? `Kit ${kitNames[i]}`
    : i < 14
    ? `Balões ${balloonNames[i - 6]}`
    : `Decoração ${decorNames[i - 14]}`,
}));

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [open, setOpen] = useState(null);

  const filtered = active === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === active);

  const item = open !== null ? filtered[open] : null;

  const goNext = useCallback(() => {
    if (open === null) return;
    setOpen(open === filtered.length - 1 ? 0 : open + 1);
  }, [open, filtered.length]);

  const goPrev = useCallback(() => {
    if (open === null) return;
    setOpen(open === 0 ? filtered.length - 1 : open - 1);
  }, [open, filtered.length]);

  useEffect(() => {
    if (open === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, goNext, goPrev]);

  return (
    <section id="gallery" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <h2 className="section-title">Galeria</h2>
        <p className="section-subtitle">
          Confira alguns dos nossos trabalhos. Cada detalhe feito com muito carinho.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActive(cat.id); setOpen(null); }}
              style={{
                padding: '10px 24px', borderRadius: 50, border: 'none',
                fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.3s ease',
                background: active === cat.id ? 'var(--rose-primary)' : 'var(--bg-light)',
                color: active === cat.id ? 'var(--white)' : 'var(--text-soft)',
                boxShadow: active === cat.id ? 'none' : 'var(--shadow)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="gallery-grid">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setOpen(idx)}
              style={{
                borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'pointer',
                position: 'relative', paddingBottom: '75%',
                background: 'var(--bg-light)', boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease',
              }}
              className="gallery-item"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
              />
              <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.6) 100%)',
                  padding: '40px 16px 12px', opacity: 0, transition: 'opacity 0.3s ease',
                }}
                className="gallery-overlay"
              >
                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {item && (
        <div
          className="lightbox-overlay"
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              maxWidth: '95vw', maxHeight: '95vh', position: 'relative',
            }}
          >
            <div
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
              style={{
                position: 'absolute', top: 8, right: 8, zIndex: 10,
                width: 40, height: 40, borderRadius: '50%',
                background: '#d45c7a', border: '2px solid white',
                color: 'white', fontSize: '1.4rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold',
              }}
            >
              ✕
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(open === 0 ? filtered.length - 1 : open - 1); }}
              style={{
                position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)', border: 'none',
                color: 'white', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ←
            </button>

            <img
              src={item.image}
              alt={item.title}
              className="lightbox-img"
              style={{ objectFit: 'contain', borderRadius: 4, display: 'block', maxWidth: '90vw', maxHeight: '85vh' }}
            />

            <button
              onClick={(e) => { e.stopPropagation(); setOpen(open === filtered.length - 1 ? 0 : open + 1); }}
              style={{
                position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)', border: 'none',
                color: 'white', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              →
            </button>
          </div>

          <div style={{
            position: 'absolute', bottom: 24, left: 0, right: 0,
            textAlign: 'center', color: 'white',
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.title} — {open + 1}/{filtered.length}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.25) !important;
        }
        .gallery-item:hover :global(img) {
          transform: scale(1.08);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .lightbox-overlay {
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px) {
          .lightbox-overlay .lightbox-img {
            max-width: 92vw !important;
            max-height: 70vh !important;
          }
        }
      `}</style>
    </section>
  );
}
