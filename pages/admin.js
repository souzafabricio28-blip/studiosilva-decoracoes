import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function Admin() {
  const [form, setForm] = useState({
    cliente: '',
    evento: '',
    data: '',
    horario: '',
    local: '',
    contato: '',
    observacoes: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const gerarPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFillColor(212, 92, 122);
    doc.rect(0, 0, pageWidth, 50, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text('STUDIO SILVA DECORACOES', pageWidth / 2, 20, { align: 'center' });
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Decoracao em baloes para todos os tipos de evento', pageWidth / 2, 28, { align: 'center' });
    doc.text('@silva.decoracoees', pageWidth / 2, 36, { align: 'center' });

    doc.setDrawColor(212, 92, 122);
    doc.setLineWidth(0.5);
    doc.line(20, 60, pageWidth - 20, 60);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(70, 22, 32);
    doc.text('CONFIRMACAO DE PEDIDO', pageWidth / 2, 72, { align: 'center' });

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    const dataGeracao = new Date().toLocaleDateString('pt-BR') + ' as ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    doc.text('Gerado em: ' + dataGeracao, pageWidth / 2, 80, { align: 'center' });

    let y = 96;
    const lineHeight = 10;
    const labelX = 30;
    const valueX = 70;

    const fields = [
      { label: 'Cliente:', value: form.cliente },
      { label: 'Evento:', value: form.evento },
      { label: 'Data:', value: form.data },
      { label: 'Horario:', value: form.horario },
      { label: 'Local:', value: form.local },
      { label: 'Contato:', value: form.contato },
    ];

    fields.forEach((field) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(70, 22, 32);
      doc.text(field.label, labelX, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      doc.text(field.value || '-', valueX, y);
      y += lineHeight;
    });

    if (form.observacoes) {
      y += 4;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(70, 22, 32);
      doc.text('Observacoes:', labelX, y);
      y += 6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(50, 50, 50);
      const lines = doc.splitTextToSize(form.observacoes, pageWidth - 60);
      doc.text(lines, labelX, y);
      y += lines.length * 5;
    }

    y = Math.max(y + 20, 220);

    doc.setDrawColor(212, 92, 122);
    doc.setLineWidth(0.3);
    doc.line(20, y, pageWidth - 20, y);

    y += 10;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Studio Silva Decoracoes - ' + new Date().getFullYear(), pageWidth / 2, y, { align: 'center' });
    doc.text('WhatsApp: (11) 96085-5115 | Instagram: @silva.decoracoees | Email: studiosilvadecoracao@gmail.com', pageWidth / 2, y + 5, { align: 'center' });

    doc.save('confirmacao-' + (form.cliente || 'pedido').toLowerCase().replace(/\s+/g, '-') + '.pdf');
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '2px solid #f0d0d8',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#2d1a1a',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fdf6f3', padding: '40px 20px' }}>
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 48,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#461620', marginBottom: 4 }}>
            Studio Silva<span style={{ color: '#d45c7a' }}>.</span>
          </h1>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Gerar Confirmacao de Pedido</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Nome do Cliente *</label>
            <input type="text" name="cliente" value={form.cliente} onChange={handleChange} required style={inputStyle} placeholder="Nome do cliente" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Tipo de Evento</label>
            <input type="text" name="evento" value={form.evento} onChange={handleChange} style={inputStyle} placeholder="Ex: Aniversario, Casamento, 15 Anos" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Data *</label>
              <input type="date" name="data" value={form.data} onChange={handleChange} required style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Horario *</label>
              <input type="time" name="horario" value={form.horario} onChange={handleChange} required style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Local / Endereco *</label>
            <input type="text" name="local" value={form.local} onChange={handleChange} required style={inputStyle} placeholder="Endereco completo do evento" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Telefone do Cliente</label>
            <input type="text" name="contato" value={form.contato} onChange={handleChange} style={inputStyle} placeholder="(11) 99999-9999" />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 6, color: '#461620', fontWeight: 500, fontSize: '0.9rem' }}>Observacoes</label>
            <textarea name="observacoes" value={form.observacoes} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Informacoes adicionais..." />
          </div>

          <button
            onClick={gerarPDF}
            style={{
              marginTop: 16,
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #d45c7a, #b84a66)',
              color: '#fff',
              border: 'none',
              borderRadius: 50,
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
          >
            Gerar PDF de Confirmacao
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: '0.8rem', color: '#bbb' }}>
          <a href="/" style={{ color: '#d45c7a' }}>Voltar ao site</a>
        </p>
      </div>
    </div>
  );
}
