import { useEffect, useState } from 'react';
import { navegacion } from '../../data/navegacion';
import { perfil } from '../../data/perfil';
import './Navbar.css';

// Íconos SVG integrados (sin librerías externas)
const IconoMenu = ({ abierto }) => (
  <svg className="navbar-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    {abierto ? (
      <path d="M6 6 L18 18 M18 6 L6 18" />
    ) : (
      <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
    )}
  </svg>
);

const IconoTema = ({ tema }) =>
  tema === 'dark' ? (
    <svg className="navbar-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2 V4 M12 20 V22 M2 12 H4 M20 12 H22 M5 5 L6.5 6.5 M17.5 17.5 L19 19 M19 5 L17.5 6.5 M6.5 17.5 L5 19" />
    </svg>
  ) : (
    <svg className="navbar-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 14.5 A8.5 8.5 0 1 1 9.5 4 A7 7 0 0 0 20 14.5 Z" />
    </svg>
  );

const Navbar = ({ tema, onToggleTema }) => {
  // Estado para abrir/cerrar el menú móvil.
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState(navegacion[0].id);

  const cerrarMenu = () => setMenuAbierto(false);

  useEffect(() => {
    const secciones = navegacion
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!('IntersectionObserver' in window)) return undefined;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibles[0]) setSeccionActiva(visibles[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    secciones.forEach((seccion) => observador.observe(seccion));
    return () => observador.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo: nombre + apellido resaltado con el color de acento */}
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={() => {
        setSeccionActiva('inicio');
        cerrarMenu();
          }}
        >
          {perfil.nombre} <span className="text-accent">{perfil.apellido}</span>
        </a>

        <div className="navbar-actions">
          {/* Botón de modo claro/oscuro */}
          <button
            type="button"
            className="navbar-tema"
            onClick={onToggleTema}
            aria-label={tema === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            <IconoTema tema={tema} />
          </button>

          {/* Botón hamburguesa (solo móvil/tablet) */}
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-label={menuAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
          >
            <IconoMenu abierto={menuAbierto} />
          </button>
        </div>

        {/* Menú de navegación: enlaces generados desde los datos */}
        <nav
          id="menu-principal"
          className={`navbar-menu ${menuAbierto ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {navegacion.map((enlace) => (
            <a
              key={enlace.id}
              href={`#${enlace.id}`}
              className={`navbar-enlace${seccionActiva === enlace.id ? ' is-active' : ''}`}
              aria-current={seccionActiva === enlace.id ? 'location' : undefined}
              onClick={() => {
                setSeccionActiva(enlace.id);
                cerrarMenu();
              }}
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
