import Descripcion from "./Descripcion"
import Titulo from "./Titulo"

const Header = () => {
    let contenidoTexto = "Aprende a tomar imagenes de tus productos como un profesional.";

    return (
        <div className="container-fluid backgroundHeader" style={{ marginTop: '80px' }}>
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                        <Titulo tipoCurso={"Cursos de"} nombreCurso={"Fotoproducto"} />
                        <Descripcion texto={contenidoTexto} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header