import { useState, useEffect } from 'react';

const WHATSAPP_MSG = 'Olá! Vi o site e quero um orçamento.';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const url = `https://wa.me/5511960855115?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 999,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#25D366',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        animation: 'fadeInUp 0.5s ease',
      }}
      onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
      onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
        <path d="M14 0C6.268 0 0 6.268 0 14C0 17.234 1.112 20.186 3.02 22.54L1.05 27L5.72 25.08C8.018 26.868 10.868 28 14 28C21.732 28 28 21.732 28 14C28 6.268 21.732 0 14 0ZM21.826 19.762C21.476 20.736 20.412 21.42 19.376 21.686C18.662 21.868 17.738 22.05 14.476 20.664C10.528 18.928 7.966 14.994 7.7 14.602C7.434 14.21 5.768 11.984 5.768 9.674C5.768 7.364 6.958 6.314 7.434 5.81C7.868 5.348 8.4 5.208 8.75 5.208C9.1 5.208 9.45 5.222 9.716 5.236C9.982 5.25 10.304 5.124 10.626 5.838C10.948 6.552 11.732 8.33 11.844 8.554C11.956 8.778 12.04 9.03 11.9 9.296C11.76 9.562 11.578 9.8 11.396 10.024C11.214 10.248 10.99 10.556 10.836 10.71C10.654 10.892 10.472 11.102 10.682 11.41C14.294 16.828 15.078 17.136 15.92 17.444C16.268 17.57 16.562 17.52 16.8 17.28C17.08 16.998 17.57 16.366 17.9 15.904C18.172 15.526 18.508 15.582 18.856 15.708C19.204 15.834 21.056 16.716 21.434 16.912C21.812 17.108 22.064 17.194 22.176 17.376C22.288 17.558 22.26 18.078 21.826 19.762Z" />
      </svg>
    </a>
  );
}
