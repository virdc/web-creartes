import React, { useState, useEffect } from 'react';
import './Nosotras.css';  

const Nosotras = () => {
  const [hovered, setHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  console.log('Hovered:', hovered);

  return (
    <section id="nosotras" className="nosotras-section" style={{ backgroundPositionY: scrollY * 0.5 }}>
      <div className="nosotras-container">
        <h2 
          className={`nosotras-title ${hovered ? 'title-hover' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Mai <span className="and">&</span> Vir
        </h2>

        <div className="nosotras-grid">
          <div className="nosotras-text">
            <p className="reveal-text">
              Dos mentes curiosas que se encontraron en las aulas del <strong>ISET 18</strong> de Rosario. 
              Entre flashes y revelados, descubrimos que juntas la magia se multiplica.
            </p>
            <p className={`hidden-text ${hovered ? 'show' : ''}`}>
              Especialistas en <strong>fotoproducto</strong> y <strong>moda</strong>, pero siempre explorando nuevos lenguajes visuales. 
              ¿Nuestra marca registrada? La obsesión por los detalles y la luz perfecta.
            </p>
          </div>

          <div className="nosotras-images">
          <img 
           src="/images/mai.jpg" 
           alt="Mai fotografiando" 
           className="img-hover-effect"
           style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
          />
          <img 
          src="/images/vir.jpg" 
          alt="Vir en acción" 
          className="img-hover-effect"
          style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
          />

          </div>
        </div>

        <button className="curiosity-button" onClick={() => alert("¡Somos adictas al café y a los desafíos creativos!")}>
          ¿Sabías que...?
        </button>
      </div>
    </section>
  );
};

export default Nosotras;
