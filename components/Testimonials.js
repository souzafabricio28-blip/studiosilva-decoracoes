import { useState } from 'react';

const testimonials = [
  {
    name: 'Andrea',
    role: 'Cliente',
    text: 'Passado para indicar o trabalho maravilhoso, tudo perfeito gratidão.',
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
      {Array.from({ length: rating }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="var(--accent-gold)">
          <path d="M9 0L11.5 6.5L18 7.5L13 12.5L14.5 19L9 15.5L3.5 19L5 12.5L0 7.5L6.5 6.5L9 0Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--cream-dark)' }}>
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">
          Veja o que nossos clientes dizem sobre o trabalho realizado.
        </p>

        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              background: 'var(--bg-light)',
              borderRadius: 'var(--radius)',
              padding: '48px 40px',
              textAlign: 'center',
              boxShadow: 'var(--shadow)',
              animation: 'fadeIn 0.5s ease',
            }}
            key={activeIndex}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3rem',
                color: 'var(--rose-primary)',
                lineHeight: 1,
                marginBottom: 16,
                opacity: 0.3,
              }}
            >
              "
            </div>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-dark)',
                lineHeight: 1.8,
                marginBottom: 24,
                fontStyle: 'italic',
              }}
            >
              {testimonials[activeIndex].text}
            </p>

            <StarRating rating={testimonials[activeIndex].rating} />

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--text-dark)',
                marginBottom: 4,
              }}
            >
              {testimonials[activeIndex].name}
            </div>
            <div
              style={{
                color: 'var(--text-soft)',
                fontSize: '0.9rem',
              }}
            >
              {testimonials[activeIndex].role}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginTop: 32,
            }}
          >
            <button
              onClick={prev}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '2px solid var(--rose-secondary)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                color: 'var(--rose-primary)',
                fontSize: '1.2rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--rose-light)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              ←
            </button>

            <div
              style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? 24 : 10,
                    height: 10,
                    borderRadius: 5,
                    border: 'none',
                    background: i === activeIndex ? 'var(--rose-primary)' : 'var(--rose-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '2px solid var(--rose-secondary)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                color: 'var(--rose-primary)',
                fontSize: '1.2rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--rose-light)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
