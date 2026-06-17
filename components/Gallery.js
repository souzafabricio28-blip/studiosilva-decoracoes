import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

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

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        cursor: 'pointer',
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: 'absolute',
          left: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          opacity: currentIndex === 0 ? 0.3 : 1,
        }}
        onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.3)'; }}
        onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.15)'; }}
        aria-label="Anterior"
      >
        ←
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 700,
          width: '100%',
          background: 'var(--white)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s ease',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '4/3',
            background: 'var(--cream-dark)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: 'contain' }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: 4 }}>
              {item.title}
            </h3>
            <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem' }}>
              {item.description}
            </p>
          </div>
          <div style={{ color: 'var(--text-soft)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: 'absolute',
          right: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          opacity: currentIndex === items.length - 1 ? 0.3 : 1,
        }}
        onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.3)'; }}
        onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.15)'; }}
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

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                border: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                  background: activeCategory === cat.id ? 'var(--rose-primary)' : 'var(--bg-light)',
                color: activeCategory === cat.id ? 'var(--white)' : 'var(--text-soft)',
                boxShadow: activeCategory === cat.id ? 'none' : 'var(--shadow)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="gallery-grid"
        >
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: '4/3',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease',
              }}
              className="gallery-item"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.6) 100%)',
                  padding: '40px 16px 12px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
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
        .gallery-item {
          overflow: hidden;
        }
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
