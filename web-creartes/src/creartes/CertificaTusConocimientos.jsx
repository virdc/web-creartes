const CertificaTusConocimientos = () => {
    let contenido = "Taller de fotoproducto para emprendedores.";
    let ancho = 160;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-1">
                    <h2 className="titulo fw-bold">Suma experiencia</h2>
                    <p className="fs-3">{contenido}</p>
                </div>
                <div className="col-md-5 text-end">
                    <img src="/images/taller.jpg" alt="Certificado" width={ancho * 2} />
                </div>
            </div>
        </div>
    )
}

export default CertificaTusConocimientos