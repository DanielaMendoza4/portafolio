import { categoriasSkills } from '../../data/skills';
import { useReveal } from '../../hooks/useReveal';
import './Habilidades.css';

// Sección de habilidades: agrupadas por categoría con barras de nivel.
const Habilidades = () => {
  const ref = useReveal();

  return (
    <section id="tech-stack" className="section reveal" ref={ref}>
      <div className="container">
        <header className="habilidades-encabezado">
          <p className="section-eyebrow">Tech stack</p>
          <h2 className="section-title">Habilidades por área</h2>
          <p className="section-lead">
            Las herramientas y tecnologías que uso para construir proyectos, organizadas por área
            y con un nivel de dominio estimado.
          </p>
        </header>

        <div className="habilidades-grid">
          {categoriasSkills.map((grupo) => (
            <article key={grupo.categoria} className="habilidad-grupo">
              <h3 className="habilidad-categoria">{grupo.categoria}</h3>
              <p className="habilidad-grupo-descripcion">{grupo.descripcion}</p>

              <ul className="habilidad-lista">
                {grupo.skills.map((skill) => (
                  <li key={skill.nombre} className="habilidad-item">
                    <div className="habilidad-fila">
                      <span className="habilidad-nombre">{skill.nombre}</span>
                     
                    </div>

                    {/* Barra de nivel nativa, sin estilos inline */}
                    <progress
                      className="habilidad-barra"
                      value={skill.nivel}
                      max="100"
                      aria-label={`Nivel de ${skill.nombre}: ${skill.nivel} por ciento`}
                    />

                    <p className="habilidad-descripcion">{skill.descripcion}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
