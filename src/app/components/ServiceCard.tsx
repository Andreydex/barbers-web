interface ServiceProps {
  nombre: string;
  precio: string;
}

export default function ServiceCard({ nombre, precio }: ServiceProps) {
  return (
    <div style={{ 
      background: 'var(--gris-card)', 
      padding: '30px', 
      borderRadius: '10px', 
      borderBottom: '4px solid var(--dorado)',
      minWidth: '220px'
    }}>
      <h3>{nombre}</h3>
      <p style={{ color: 'var(--dorado)', fontSize: '1.2rem', fontWeight: 'bold' }}>
        {precio}
      </p>
    </div>
  );
}