import { proyectos } from '../../data/proyectos';
import { useReveal } from '../../hooks/useReveal';
import Carrusel from './Carrusel';
import './Proyectos.css';

const normalizarEstado = (estado) => (estado ?? '').toLowerCase().replace(/\s+/g, '-');
const numeroProyecto = (indice) => String(indice + 1).padStart(2, '0');

// Sección de proyectos: filas alternadas imagen/texto con hover.
const Proyectos = () => {
  const ref = useReveal();

  return (
    <section id="proyectos" className="section reveal" ref={ref}>
      <div className="container">
        <header className="proyectos-encabezado">
          <p className="section-eyebrow">Portafolio</p>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-lead">
            Una selección de trabajos donde aplico lo que aprendo, desde interfaces web hasta
            proyectos de datos e IoT.
          </p>
        </header>

        <ol className="proyectos-lista">
          {proyectos.map((proyecto, indice) => (
            <li key={proyecto.titulo} className="proyecto">
              <div className="proyecto-media">
                {proyecto.imagenes && proyecto.imagenes.length > 0 ? (
                  <Carrusel imagenes={proyecto.imagenes} />
                ) : proyecto.imagen ? (
                  <img src={proyecto.imagen} alt={`Vista del proyecto ${proyecto.titulo}`} />
                ) : (
                  <div className="proyecto-placeholder" aria-hidden="true">
                    <span className="proyecto-placeholder-numero">{numeroProyecto(indice)}</span>
                    <span className="proyecto-placeholder-titulo">{proyecto.titulo}</span>
                  </div>
                )}
              </div>

              <div className="proyecto-info">
                <div className="proyecto-meta">
                  <span className="proyecto-indice">{numeroProyecto(indice)}</span>
                  {proyecto.estado ? (
                    <span className={`badge badge--${normalizarEstado(proyecto.estado)}`}>
                      {proyecto.estado}
                    </span>
                  ) : null}
                </div>

                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                {/* Tags de tecnologías (mapeo anidado) */}
                <ul className="proyecto-tags">
                  {(proyecto.tecnologias ?? []).map((tecnologia) => (
                    <li key={tecnologia} className="tag">
                      {tecnologia}
                    </li>
                  ))}
                </ul>

                <div className="proyecto-enlaces">
                  {proyecto.demoUrl ? (
                    <a
                      className="btn btn-primary"
                      href={proyecto.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver demo
                    </a>
                  ) : null}

                  {proyecto.codigoUrl ? (
                    <a
                      className="btn btn-outline"
                      href={proyecto.codigoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código
                    </a>
                  ) : null}

                  {proyecto.apkUrl ? (
                    <a
                      className="btn btn-outline"
                      href={proyecto.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Descargar APK
                    </a>
                  ) : null}

                  {proyecto.repoPrivado ? (
                    <span className="tag" aria-label="Repositorio privado">
                      Repositorio privado
                    </span>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Proyectos;
