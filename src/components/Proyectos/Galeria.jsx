import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi';
import './Galeria.css';

const UMBRAL_TOQUE = 50;

// Galería de un proyecto: portada con miniaturas y modal ampliado.
const Galeria = ({ imagenes = [], titulo = 'Proyecto' }) => {
  const [indiceAbierto, setIndiceAbierto] = useState(null);
  const dialogoRef = useRef(null);
  const tiraRef = useRef(null);
  const disparadorRef = useRef(null);
  const toqueInicialRef = useRef(null);

  const total = imagenes.length;
  const abierta = indiceAbierto !== null;
  const indiceActual = abierta ? Math.min(Math.max(indiceAbierto, 0), total - 1) : 0;
  const imagenActual = imagenes[indiceActual];

  const cerrar = useCallback(() => setIndiceAbierto(null), []);

  const abrir = (indice, evento) => {
    disparadorRef.current = evento.currentTarget;
    setIndiceAbierto(indice);
  };

  const manejarCierre = () => {
    cerrar();
    if (disparadorRef.current?.isConnected) disparadorRef.current.focus();
  };

  const irA = useCallback(
    (indice) => {
      setIndiceAbierto((actual) => (actual === null ? actual : (indice + total) % total));
    },
    [total],
  );

  const mover = useCallback(
    (paso) => {
      setIndiceAbierto((actual) => (actual === null ? actual : (actual + paso + total) % total));
    },
    [total],
  );

  // Abre y cierra el <dialog> nativo, que aporta foco atrapado y cierre con Esc.
  useEffect(() => {
    const dialogo = dialogoRef.current;
    if (!dialogo) return;

    if (abierta && !dialogo.open) {
      dialogo.showModal();
      dialogo.focus();
    } else if (!abierta && dialogo.open) {
      dialogo.close();
    }
  }, [abierta]);

  // Evita que la página de fondo se desplace mientras el modal está abierto.
  useEffect(() => {
    if (!abierta) return undefined;

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflowPrevio;
    };
  }, [abierta]);

  // Mantiene centrada la miniatura de la imagen que se está viendo.
  useEffect(() => {
    if (!abierta) return;

    const tira = tiraRef.current;
    const activa = tira?.querySelector('.galeria-modal-miniatura.activa');
    if (!tira || !activa) return;

    const rectTira = tira.getBoundingClientRect();
    const rectActiva = activa.getBoundingClientRect();
    const destino =
      rectActiva.left - rectTira.left + tira.scrollLeft - (tira.clientWidth - rectActiva.width) / 2;
    const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    tira.scrollTo({
      left: Math.max(0, destino),
      behavior: movimientoReducido ? 'auto' : 'smooth',
    });
  }, [abierta, indiceActual]);

  const manejarCancelar = (evento) => {
    evento.preventDefault();
    cerrar();
  };

  const manejarTeclado = (evento) => {
    if (evento.key === 'Escape') {
      cerrar();
      return;
    }

    if (total <= 1) return;

    if (evento.key === 'ArrowRight') {
      evento.preventDefault();
      mover(1);
    } else if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      mover(-1);
    } else if (evento.key === 'Home') {
      evento.preventDefault();
      irA(0);
    } else if (evento.key === 'End') {
      evento.preventDefault();
      irA(total - 1);
    }
  };

  const manejarClicFondo = (evento) => {
    if (evento.target === dialogoRef.current) cerrar();
  };

  const manejarToqueInicio = (evento) => {
    if (evento.touches.length !== 1) return;
    toqueInicialRef.current = evento.touches[0].clientX;
  };

  const manejarToqueFin = (evento) => {
    if (toqueInicialRef.current === null || total <= 1) return;

    const distancia = evento.changedTouches[0].clientX - toqueInicialRef.current;
    toqueInicialRef.current = null;

    if (Math.abs(distancia) < UMBRAL_TOQUE) return;
    mover(distancia < 0 ? 1 : -1);
  };

  if (total === 0) return null;

  const portada = imagenes[0];

  return (
    <div className="galeria">
      <button
        type="button"
        className="galeria-portada"
        onClick={(evento) => abrir(0, evento)}
        aria-label={
          total > 1
            ? `Ampliar galería de ${titulo} (${total} fotos)`
            : `Ampliar imagen de ${titulo}`
        }
      >
        <img
          src={portada.src}
          alt={portada.alt || `Vista del proyecto ${titulo}`}
          loading="lazy"
          decoding="async"
        />
        <span className="galeria-insignia">
          <FiMaximize2 aria-hidden="true" />
          {total > 1 ? `${total} fotos` : 'Ampliar'}
        </span>
      </button>

      {total > 1 ? (
        <ul className="galeria-miniaturas" aria-label={`Miniaturas de ${titulo}`}>
          {imagenes.map((imagen, i) => (
            <li key={`${imagen.src}-${i}`}>
              <button
                type="button"
                className="galeria-miniatura"
                onClick={(evento) => abrir(i, evento)}
                aria-label={`Abrir imagen ${i + 1} de ${total}`}
              >
                <img src={imagen.src} alt="" loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <dialog
        ref={dialogoRef}
        className="galeria-modal"
        aria-label={`Galería de imágenes de ${titulo}`}
        tabIndex={-1}
        onCancel={manejarCancelar}
        onClose={manejarCierre}
        onClick={manejarClicFondo}
        onKeyDown={manejarTeclado}
      >
        <div className="galeria-modal-panel">
          <header className="galeria-modal-barra">
            <p className="galeria-modal-titulo">{titulo}</p>

            <div className="galeria-modal-acciones">
              <span className="galeria-modal-contador" aria-live="polite">
                {indiceActual + 1} / {total}
              </span>
              <button
                type="button"
                className="galeria-modal-cerrar"
                onClick={cerrar}
                aria-label="Cerrar galería"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            className={`galeria-modal-escenario${
              total <= 1 ? ' galeria-modal-escenario--unica' : ''
            }`}
            onTouchStart={manejarToqueInicio}
            onTouchEnd={manejarToqueFin}
          >
            {total > 1 ? (
              <button
                type="button"
                className="galeria-modal-flecha galeria-modal-flecha--anterior"
                onClick={() => mover(-1)}
                aria-label="Imagen anterior"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
            ) : null}

            <figure className="galeria-modal-figura">
              <img
                key={imagenActual.src}
                src={imagenActual.src}
                alt={
                  imagenActual.alt ||
                  `Imagen ${indiceActual + 1} de ${total} del proyecto ${titulo}`
                }
                decoding="async"
              />
            </figure>

            {total > 1 ? (
              <button
                type="button"
                className="galeria-modal-flecha galeria-modal-flecha--siguiente"
                onClick={() => mover(1)}
                aria-label="Imagen siguiente"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <footer className="galeria-modal-pie">
            <p className="galeria-modal-descripcion">
              {imagenActual.alt || `Imagen ${indiceActual + 1} de ${total}`}
            </p>

            {total > 1 ? (
              <ul
                className="galeria-modal-miniaturas"
                ref={tiraRef}
                aria-label="Ir a otra imagen de la galería"
              >
                {imagenes.map((imagen, i) => (
                  <li key={`${imagen.src}-modal-${i}`}>
                    <button
                      type="button"
                      className={`galeria-modal-miniatura${
                        i === indiceActual ? ' activa' : ''
                      }`}
                      onClick={() => irA(i)}
                      aria-label={`Ver imagen ${i + 1} de ${total}`}
                      aria-current={i === indiceActual ? 'true' : undefined}
                    >
                      <img src={imagen.src} alt="" loading="lazy" decoding="async" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </footer>
        </div>
      </dialog>
    </div>
  );
};

export default Galeria;
