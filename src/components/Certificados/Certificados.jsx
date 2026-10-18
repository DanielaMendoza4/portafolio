import { certificados } from '../../data/certificados';
import { useReveal } from '../../hooks/useReveal';
import './Certificados.css';

// Sección de certificados: tarjetas con vista previa del documento.
const Certificados = () => {
  const ref = useReveal();

  return (
    <section id="certificados" className="section reveal" ref={ref}>
      <div className="container">
        <header className="certificados-encabezado">
          <p className="section-eyebrow">Formación</p>
          <h2 className="section-title">Certificados</h2>
          <p className="section-lead">
            Certificados de asistencia que complementan mi formación, con la vista previa del
            documento y su enlace para verlo completo.
          </p>
        </header>

        <ul className="certificados-grid">
          {certificados.map((certificado) => (
            <li key={certificado.titulo} className="certificado">
              <div className="certificado-media">
                {certificado.imagen ? (
                  <img src={certificado.imagen} alt={`Certificado ${certificado.titulo}`} />
                ) : (
                  <div className="certificado-placeholder" aria-hidden="true">
                    <span className="certificado-placeholder-titulo">{certificado.titulo}</span>
                  </div>
                )}
              </div>

              <div className="certificado-info">
                <div className="certificado-meta">
                  <span className="badge">{certificado.tipo}</span>
                  <span className="certificado-fecha">{certificado.fecha}</span>
                </div>

                <h3 className="certificado-titulo">{certificado.titulo}</h3>
                <p className="certificado-emisor">{certificado.emisor}</p>
                <p className="certificado-institucion">{certificado.institucion}</p>
                <p className="certificado-descripcion">{certificado.descripcion}</p>

                {/* Tags de tecnologías (mismo patrón que los proyectos) */}
                <ul className="certificado-tags">
                  {(certificado.tecnologias ?? []).map((tecnologia) => (
                    <li key={tecnologia} className="tag">
                      {tecnologia}
                    </li>
                  ))}
                </ul>

                {certificado.url ? (
                  <a
                    className="btn btn-outline"
                    href={certificado.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver certificado
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificados;
