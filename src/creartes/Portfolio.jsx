import './Portfolio.css';

// Array de proyectos optimizado para fotografía
const proyectos = [
  {
    img: '/images/proyecto1.jpg',
    titulo: 'Fotoproducto Comercial',
    desc: 'Sesión de productos para e-commerce con iluminación profesional.',
    categoria: 'Producto',
    tipo: 'foto-producto' // Clase CSS específica
  },
  {
    img: '/images/proyecto2.jpg',
    titulo: 'Editorial de Moda',
    desc: 'Shooting editorial para revista de moda contemporánea.',
    categoria: 'Moda',
    tipo: 'foto-moda'
  },
  {
    img: '/images/proyecto3.jpg',
    titulo: 'Campaña Publicitaria',
    desc: 'Campaña visual para marca de lifestyle premium.',
    categoria: 'Publicidad',
    tipo: 'proyecto3' // Clase especial para cuadrado grande
  },
  {
    img: '/images/proyecto4.jpg',
    titulo: 'Retrato Corporativo',
    desc: 'Sesión de retratos ejecutivos para empresa tecnológica.',
    categoria: 'Corporativo',
    tipo: 'foto-producto'
  },
  {
    img: '/images/proyecto5.jpg',
    titulo: 'Fashion Week',
    desc: 'Cobertura fotográfica de desfile de moda primavera-verano.',
    categoria: 'Moda',
    tipo: 'foto-moda'
  },
  {
    img: '/images/proyecto6.jpg',
    titulo: 'Lookbook Colección',
    desc: 'Catálogo visual para nueva colección de accesorios.',
    categoria: 'Moda',
    tipo: 'foto-moda'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio Fotográfico</h2>
        <div className="row">
          {proyectos.map((proyecto, i) => (
            <div 
              className={`card ${proyecto.tipo}`} 
              key={i}
            >
              {/* Categoría que aparece en hover */}
              <div className="work-category">
                {proyecto.categoria}
              </div>
              
              <img
                src={proyecto.img}
                className="card-img-top"
                alt={proyecto.titulo}
                loading={i > 2 ? "lazy" : "eager"} // Optimización de carga
              />
              
              <div className="card-body">
                <h5 className="card-title">{proyecto.titulo}</h5>
                <p className="card-text">{proyecto.desc}</p>
                <a href="#" className="btn" aria-label={`Ver más sobre ${proyecto.titulo}`}>
                  Ver Detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;