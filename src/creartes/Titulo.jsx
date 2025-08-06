const Titulo = (props) => {
    return (
        <>
            <button className="btn botonVerde">Contacto</button>
            <h1 className="text-white fw-bold"><span className="colorVerde">{props.tipoCurso}</span><br />{props.nombreCurso}</h1>
        </>
    )
}

export default Titulo