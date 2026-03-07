import Link from 'next/link';

export default function Contacto() {
  return (
    <main style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ color: 'var(--dorado)' }}>CONTACTO</h1>
      <p>Visítanos en nuestra sucursal principal</p>
      
      <div style={{ margin: '40px auto', maxWidth: '400px', background: 'var(--gris-card)', padding: '30px', borderRadius: '15px' }}>
        <p>📍Av. Buenos Aires, Fraccionamiento Serene #456, Puerto Vallarta, Jalisco</p>
        <p>📱 WhatsApp: 322 328 2394</p>
        <p>⏰ Lun - Sáb: 9am - 8pm</p>
      </div>

      <Link href="/" className="nav-link">← Volver al Inicio</Link>
    </main>
  );
}