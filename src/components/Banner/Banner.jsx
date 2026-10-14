import { perfil } from '../../data/perfil';
import { useReveal } from '../../hooks/useReveal';
import './Banner.css';

// Sección de inicio: dos columnas (texto + foto con forma de arco).
const Banner = () => {
  const ref = useReveal();

  return (
    <section id="inicio" className="banner reveal" ref={ref}>
      <div className="banner-inner">
        <div className="banner-texto">
          <p className="banner-eyebrow">
            {perfil.institucion} · {perfil.sede} · {perfil.semestre}
          </p>

          <h1 className="banner-titulo">
            {perfil.nombre} <span className="text-accent">{perfil.apellido}</span>
          </h1>

          <p className="banner-rol">{perfil.rol}</p>
          <p className="banner-descripcion">{perfil.descripcionCorta}</p>

          <ul className="banner-intereses">
            {perfil.intereses.map((interes) => (
              <li key={interes}>{interes}</li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary">
            Trabajemos juntas
          </a>
        </div>

        <div className="banner-foto">
          <div className="banner-foto-marco">
            <img src={perfil.foto} alt={`Retrato de ${perfil.nombreCompleto}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
