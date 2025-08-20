import Descripcion from "./Descripcion";
import Titulo from "./Titulo";

const Header = () => {
  let contenidoTexto = "Aprende a tomar imágenes de tus productos como un profesional.";

  return (
    <div className="container-fluid backgroundHeader">
      <div className="container">
        <div className="row">
          <div className="col my-5 position-relative">
            <Titulo tipoCurso={"Cursos de"} nombreCurso={"Fotoproducto"} />
            <Descripcion texto={contenidoTexto} />

            {/* Contenedor de animaciones */}
            <div className="animaciones-header">
              
             

              {/* Cámaras flotantes dinámicas */}
              {[...Array(6)].map((_, index) => {
                const i = index + 1;
                const derecha = Math.floor(Math.random() * 90) + 10;
                const duracion = (5 + Math.random() * 3).toFixed(2);
                const delay = (Math.random() * 3).toFixed(2);

                return (
                  <div
                    key={`camara-${i}`}
                    className="camara-flotante"
                    style={{
                      "--i": i,
                      right: `${derecha}px`,
                      animation: `flotarCamara ${duracion}s linear ${delay}s infinite`,
                      zIndex: 2,  // detrás de los rayos
                    }}
                  ></div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Header;
