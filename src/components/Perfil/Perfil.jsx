import { perfil } from '../../data/perfil';
import { useReveal } from '../../hooks/useReveal';
import './Perfil.css';

// Convierte el estado ("En curso", "Completado") en una clase CSS.
const claseEstado = (estado) => `badge badge--${estado.toLowerCase().replace(/\s+/g, '-')}`;

// Sección de perfil: un párrafo breve + datos rápidos y, al lado, la educación.
const Perfil = () => {
  const ref = useReveal();

  // Si todos los ítems comparten el mismo estado, se muestra una sola vez
  // de forma discreta bajo el subtítulo (evita badges repetidos).
  const estados = perfil.educacion.map((item) => item.estado);
  const estadoUnico =
    estados.length > 0 && estados.every((estado) => estado === estados[0]) ? estados[0] : null;

  return (
    <section id="sobre-mi" className="section reveal" ref={ref}>
      <div className="container perfil">
        <header className="perfil-encabezado">
          <p className="section-eyebrow">Sobre mí</p>
          <h2 className="section-title perfil-titulo">Perfil profesional</h2>
        </header>

        <div className="perfil-texto">
          <p className="perfil-resumen">{perfil.resumen}</p>

          {/* Datos rápidos: cifra + etiqueta, generados desde los datos */}
          <ul className="perfil-datos">
            {perfil.datosRapidos.map((dato) => (
              <li className="perfil-dato" key={dato.etiqueta}>
                <span className="perfil-dato-cifra">{dato.cifra}</span>
                <span className="perfil-dato-etiqueta">{dato.etiqueta}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="perfil-educacion">
          <div className="perfil-educacion-cabecera">
            <h3 className="perfil-subtitulo">Educación y certificaciones</h3>

            {/* Un solo badge, discreto, cuando el estado es el mismo en todos */}
            {estadoUnico ? <span className={claseEstado(estadoUnico)}>{estadoUnico}</span> : null}
          </div>

          <ul className="educacion-lista">
            {perfil.educacion.map((item) => (
              <li key={item.titulo} className="educacion-item">
                <div className="educacion-cabecera">
                  <h4 className="educacion-titulo">{item.titulo}</h4>

                  {/* Badge a la derecha del título, solo si aporta información */}
                  {!estadoUnico ? (
                    <span className={claseEstado(item.estado)}>{item.estado}</span>
                  ) : null}
                </div>
                <p className="educacion-institucion">{item.institucion}</p>
                <p className="educacion-detalle">{item.detalle}</p>

                {/* El enlace de certificado solo aparece si existe en los datos */}
                {item.certificadoUrl ? (
                  <a
                    className="educacion-enlace"
                    href={item.certificadoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver certificado
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Perfil;
