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
  description: 'Decoração realizada pelo Studio Silva.',
}));

function GalleryModal({ items, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const item = items[currentIndex];
  if (!item) return null;

  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)',
        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); setImgError(false); }}
        style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
          border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
          opacity: currentIndex === 0 ? 0.25 : 1,
        }}
        aria-label="Anterior"
      >
        ←
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', width: '95vw', height: '95vh',
        }}
      >
        {imgError ? (
          <div style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
            <p>Imagem indisponível</p>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 4,
            }}
            onError={() => setImgError(true)}
          />
        )}
        <div style={{
          position: 'absolute', bottom: 24, left: 0, right: 0,
          textAlign: 'center', padding: '0 80px',
        }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'white', marginBottom: 2 }}>
            {item.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); setImgError(false); }}
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
          border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
          opacity: currentIndex === items.length - 1 ? 0.25 : 1,
        }}
        aria-label="Próximo"
      >
        →
      </button>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const prev = () => setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  const next = () => setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));

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
              onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
              style={{
                padding: '10px 24px', borderRadius: 50, border: 'none',
                fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.3s ease',
                background: activeCategory === cat.id ? 'var(--rose-primary)' : 'var(--bg-light)',
                color: activeCategory === cat.id ? 'var(--white)' : 'var(--text-soft)',
                boxShadow: activeCategory === cat.id ? 'none' : 'var(--shadow)',
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
              onClick={() => setLightboxIndex(idx)}
              style={{
                borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'pointer',
                position: 'relative', aspectRatio: '4/3',
                background: 'var(--bg-light)', boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease',
              }}
              className="gallery-item"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
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

      {lightboxIndex !== null && (
        <GalleryModal
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}

      <style jsx>{`
        .gallery-item:hover :global(img) {
          transform: scale(1.08) !important;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
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
      `}</style>
    </section>
  );
}
