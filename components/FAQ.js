import { useState } from 'react';

const faqs = [
  {
    q: 'Com quanta antecedência devo contratar o serviço?',
    a: 'Recomendamos o agendamento com pelo menos 15 dias de antecedência para garantir a disponibilidade e o melhor planejamento do seu evento.',
  },
  {
    q: 'Vocês atendem em quais regiões?',
    a: 'Atendemos em toda a região metropolitana de São Paulo. Consulte-nos para eventos em outras localidades.',
  },
  {
    q: 'Fazem decoração para todos os tipos de festa?',
    a: 'Sim! Trabalhamos com aniversários infantis, casamentos, 15 anos, eventos corporativos, chá de bebê, chá de panela e qualquer tipo de celebração.',
  },
  {
    q: 'Qual a forma de pagamento?',
    a: 'Aceitamos pagamento em dinheiro, PIX, transferência bancária e cartão de crédito (com acréscimo). Trabalhamos com sinal de 50% no ato da contratação e o restante na data do evento.',
  },
  {
    q: 'Vocês alugam os itens ou vendem?',
    a: 'Trabalhamos com locação dos kits de balões e decorações. Todos os materiais são retirados após o evento.',
  },
  {
    q: 'Quanto tempo leva a montagem?',
    a: 'O tempo de montagem varia conforme o kit contratado. Em média, leva de 1 a 3 horas. Chegamos com antecedência para que tudo esteja pronto no horário combinado.',
  },
  {
    q: 'E se chover no dia do evento?',
    a: 'Caso o evento seja ao ar livre e a chuva impeça a montagem, remarcamos sem custos adicionais, dentro da disponibilidade de agenda.',
  },
  {
    q: 'Como faço para solicitar um orçamento?',
    a: 'Você pode solicitar pelo formulário de contato do site, pelo WhatsApp (11) 96085-5115 ou pelo Instagram @studiosilva.',
  },
];

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div
      style={{
        border: '2px solid var(--rose-light)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
                    background: isOpen ? 'var(--bg-light)' : 'transparent',
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          fontWeight: 500,
          color: 'var(--text-dark)',
          textAlign: 'left',
        }}
      >
        <span>{faq.q}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            color: 'var(--rose-primary)',
            fontSize: '1.2rem',
            flexShrink: 0,
          }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1L8 8L15 1" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ padding: '0 24px 20px', color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.7 }}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section" style={{ background: 'var(--cream-dark)' }}>
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Tire suas principais dúvidas sobre nossos serviços.
        </p>

        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
