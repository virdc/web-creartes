const Titulo = (props) => {
  return (
    <>
      <a
        href="https://instagram.com/direct/new/?username=creartes.fotografia"
        target="_blank"
        rel="noopener noreferrer"
        className="btn botonVerde"
        aria-label="Enviar mensaje privado a Instagram Creartes Fotografía"
      >
        Contacto
      </a>
      <h1 className="text-white fw-bold">
        <span className="colorVerde">{props.tipoCurso}</span>
        <br />
        {props.nombreCurso}
      </h1>
    </>
  );
};

export default Titulo;
