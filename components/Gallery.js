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
    <section id="gallery" className="section" style={{ background: 'var(--bg-light)' }}>
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

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {filtered.reduce((rows, item, idx) => {
              if (idx % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, []).map((row, ri) => (
              <tr key={ri}>
                {row.map((item, ci) => (
                  <td key={item.id} style={{ padding: 8, verticalAlign: 'top' }}
                      onClick={() => setOpen(ri * 3 + ci)}>
                    <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                  </td>
                ))}
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, ei) => <td key={`e${ei}`} style={{ padding: 8 }}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {item && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => { e.stopPropagation(); setOpen(null); }}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              width: 44, height: 44, borderRadius: '50%',
              background: '#d45c7a', border: '2px solid white',
              color: 'white', fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            ✕
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
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
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block', borderRadius: 4 }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
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

          <div style={{
            position: 'absolute', bottom: 24, left: 0, right: 0,
            textAlign: 'center', color: 'white',
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.title} — {open + 1}/{filtered.length}</p>
          </div>
        </div>
      )}

    </section>
  );
}
