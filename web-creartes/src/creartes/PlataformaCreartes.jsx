import React from "react"

class PlataformaCreartes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <h2 className="titulo fw-bold">Comparti tus productos</h2>
                        <p className="fs-4">Material adicional de estudio digitalizado.</p>
                        <ul>
                            <li className="fs-5"><b>Suma Experiencia</b> y creatividad.</li>
                            <li className="fs-5">Para que puedas realizar las fotografías de tus productos desde tu casa y <b>con Técnicas de fotografía de estudio iluminación, elección de fondo, flat lays</b>.</li>
                            <li className="fs-5">Mantente <b>conectado con la comunidad de emprendedores que se sumaron a los Talleres de Creartes</b>.</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <div className="video-container">
                            <video 
                                src="/images/fotoproducto.mp4" 
                                width="100%" 
                                autoPlay 
                                loop 
                                muted 
                                controls
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlataformaCreartes