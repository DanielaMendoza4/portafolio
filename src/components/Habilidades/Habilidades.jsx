import { useState } from 'react';
import { areas, habilidades } from '../../data/habilidades';
import { useReveal } from '../../hooks/useReveal';
import './Habilidades.css';

// Sección de habilidades: tarjetas con logo + nombre, filtradas por área.
const Habilidades = () => {
  const ref = useReveal();
  const [areaActiva, setAreaActiva] = useState(areas[0]);

  const visibles =
    areaActiva === areas[0]
      ? habilidades
      : habilidades.filter((habilidad) => habilidad.area === areaActiva);

  return (
    <section id="tech-stack" className="section reveal habilidades" ref={ref}>
      <div className="container">
        <header className="habilidades-encabezado">
          <p className="section-eyebrow">Tech stack</p>
          <h2 className="section-title">Habilidades por área</h2>
          <p className="section-lead">
            Las tecnologías con las que construyo proyectos, filtradas por área.
          </p>
        </header>

        <div className="habilidades-tabs" role="tablist" aria-label="Filtrar habilidades por área">
          {areas.map((area) => (
            <button
              key={area}
              id={`habilidades-tab-${area.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              role="tab"
              aria-selected={area === areaActiva}
              aria-controls="habilidades-panel"
              className="habilidades-tab"
              onClick={() => setAreaActiva(area)}
            >
              {area}
            </button>
          ))}
        </div>

        <ul
          id="habilidades-panel"
          role="tabpanel"
          aria-labelledby={`habilidades-tab-${areaActiva.toLowerCase().replace(/\s+/g, '-')}`}
          className="habilidades-grid"
        >
          {visibles.map(({ nombre, icono: Icono, color }) => (
            <li key={nombre} className="habilidad" style={{ '--brand': color }}>
              <span className="habilidad-icono" aria-hidden="true">
                <Icono focusable="false" />
              </span>
              <span className="habilidad-nombre">{nombre}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Habilidades;
