import { perfil } from '../../data/perfil';
import { useReveal } from '../../hooks/useReveal';
import './Banner.css';

// Sección de inicio: dos columnas (texto + foto con forma de arco).
const Banner = () => {
  const ref = useReveal();

  return (
    <section id="inicio" className="banner reveal" ref={ref}>
      <div className="banner-inner">
        <svg className="banner-destellos" viewBox="0 0 220 160" aria-hidden="true" focusable="false">
          <path d="M47 4 54 25 75 32 54 39 47 60 40 39 19 32 40 25 47 4Z" />
          <path d="m174 91 5 15 15 5-15 5-5 15-5-15-15-5 15-5 5-15Z" />
        </svg>
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
