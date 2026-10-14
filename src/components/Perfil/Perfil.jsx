import { perfil } from '../../data/perfil';
import { useReveal } from '../../hooks/useReveal';
import './Perfil.css';

// Convierte el estado ("En curso", "Completado") en una clase CSS.
const claseEstado = (estado) => `badge badge--${estado.toLowerCase().replace(/\s+/g, '-')}`;

// Sección de perfil: una columna editorial + educación/certificaciones.
const Perfil = () => {
  const ref = useReveal();

  return (
    <section id="sobre-mi" className="section reveal" ref={ref}>
      <div className="container perfil">
        <header className="perfil-encabezado">
          <p className="section-eyebrow">Sobre mí</p>
          <h2 className="section-title perfil-titulo">Perfil profesional</h2>
        </header>

        <div className="perfil-texto">
          {perfil.parrafos.map((parrafo, indice) => (
            <p
              key={parrafo.slice(0, 24)}
              className={indice === 0 ? 'perfil-parrafo perfil-parrafo--destacado' : 'perfil-parrafo'}
            >
              {parrafo}
            </p>
          ))}
        </div>

        <aside className="perfil-educacion">
          <h3 className="perfil-subtitulo">Educación y certificaciones</h3>

          <ul className="educacion-lista">
            {perfil.educacion.map((item) => (
              <li key={item.titulo} className="educacion-item">
                <div className="educacion-cabecera">
                  <h4 className="educacion-titulo">{item.titulo}</h4>
                  <span className={claseEstado(item.estado)}>{item.estado}</span>
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
