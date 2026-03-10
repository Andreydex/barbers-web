'use client';
import Link from 'next/link';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  const servicios = [
<<<<<<< HEAD
    { id: 1, nombre: "Corte Clásico", precio: "$150.00 mxn" },
    { id: 2, nombre: "Barba Premium", precio: "$135.00 mxn" },
    { id: 3, nombre: "Combo Imperial", precio: "$250.00 mxn" },
    { id: 4, nombre: "Corte Infantil", precio: "$150.00 mxn" }
=======
    { id: 1, nombre: "Corte Clásico", precio: "$150.00$" },
    { id: 2, nombre: "Barba Premium", precio: "$135.00$" },
    { id: 3, nombre: "Combo Imperial", precio: "$250.00$" },
    { id: 4, nombre: "Corte Infantil", precio: "$150.00$" }
>>>>>>> c37beaaa9c2e4188757c9e925e48044e14fcaf7e
  ];

  const handleWhatsApp = () => {
    const telefono = "523223282394"; 
    const mensaje = encodeURIComponent("¡Hola Barber's! Me gustaría agendar una cita para un corte.");
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    window.open(url, '_blank'); 
  };

  return (
    <main>
      <nav className="navbar">
        <div className="nav-section"></div>
        <div className="nav-section center">
          <h1 style={{ color: 'var(--dorado)', margin: 0 }}>BARBER'S</h1>
        </div>
        <div className="nav-section right">
          <Link href="/contacto" className="nav-link">Contacto</Link>
        </div>
      </nav>

      <header className="hero">
        <h2 style={{ fontSize: '3rem' }}>ESTILO Y TRADICIÓN</h2>
        <p>Expertos en el arte de la barbería clásica.</p>
        
        <button className="btn-cita" onClick={handleWhatsApp}>
          AGENDAR CITA
        </button>
      </header>

      <section className="servicios-section">
        <h2>Nuestros Servicios</h2>
        <div className="grid-servicios">
          {servicios.map((s) => (
            <ServiceCard key={s.id} nombre={s.nombre} precio={s.precio} />
          ))}
        </div>
      </section>
      
      <section className="ubicacion-section">
  <h2 style={{ color: 'var(--dorado)' }}>Nuestra Ubicación</h2>
  <p>Visítanos estamos aquí</p>
  
  <div className="mapa-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.982904925911!2d-105.18899182497886!3d20.67027448089089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214f171725c2b9%3A0x65d2da3e3f1feb8b!2sVolcanes%20de%20Vallarta%2C%2048290%20Puerto%20Vallarta%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1772903946530!5m2!1ses-419!2smx" 
      width="100%" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
  </div>
</section>
        
       
    
    </main>
  );
}