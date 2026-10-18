import { useCallback, useEffect, useRef, useState } from 'react';

const Carrusel = ({ imagenes = [], intervalo = 4000 }) => {
  const [indice, setIndice] = useState(0);
  const [enInteraccion, setEnInteraccion] = useState(false);
  const [toqueInicio, setToqueInicio] = useState(null);
  const [toqueFin, setToqueFin] = useState(null);
  const timerRef = useRef(null);
  const total = imagenes.length;

  const avanzar = useCallback(() => setIndice((actual) => (actual + 1) % total), [total]);
  const retroceder = useCallback(() => setIndice((actual) => (actual - 1 + total) % total), [total]);
  const irA = (i) => setIndice(i);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || enInteraccion || total <= 1) return undefined;

    timerRef.current = window.setInterval(avanzar, intervalo);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [avanzar, enInteraccion, total, intervalo]);

  const manejarInicioToque = (e) => {
    setToqueInicio(e.changedTouches[0].clientX);
    setToqueFin(null);
    setEnInteraccion(true);
  };

  const manejarFinToque = (e) => {
    if (toqueInicio === null) return;
    setToqueFin(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (toqueInicio === null || toqueFin === null) return;
    const diferencia = toqueFin - toqueInicio;
    const umbral = 50;

    let accion = null;
    if (diferencia > umbral) accion = retroceder;
    if (diferencia < -umbral) accion = avanzar;

    setToqueInicio(null);
    setToqueFin(null);

    if (accion) {
      accion();
      setEnInteraccion(true);
      const limpiar = window.setTimeout(() => setEnInteraccion(false), 500);
      return () => window.clearTimeout(limpiar);
    }
    return undefined;
  }, [toqueInicio, toqueFin, avanzar, retroceder]);

  if (total === 0) return null;

  return (
    <div
      className="carrusel"
      onMouseEnter={() => setEnInteraccion(true)}
      onMouseLeave={() => setEnInteraccion(false)}
      onFocus={() => setEnInteraccion(true)}
      onBlur={() => setEnInteraccion(false)}
      onTouchStart={manejarInicioToque}
      onTouchEnd={manejarFinToque}
      role="region"
      aria-label="Carrusel de imágenes del proyecto"
    >
      <div className="carrusel-viewport">
        <div
          className="carrusel-track"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {imagenes.map((img, i) => (
            <div className="carrusel-slide" key={img.src + i}>
              <img src={img.src} alt={img.alt || `Imagen ${i + 1} del proyecto`} />
            </div>
          ))}
        </div>
      </div>

      {total > 1 ? (
        <>
          <button
            type="button"
            className="carrusel-flecha carrusel-flecha--anterior"
            onClick={() => {
              retroceder();
              setEnInteraccion(true);
            }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="carrusel-flecha carrusel-flecha--siguiente"
            onClick={() => {
              avanzar();
              setEnInteraccion(true);
            }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="carrusel-indicadores" role="tablist">
            {imagenes.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`carrusel-punto ${i === indice ? 'activo' : ''}`}
                onClick={() => {
                  irA(i);
                  setEnInteraccion(true);
                }}
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === indice ? 'true' : undefined}
                role="tab"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carrusel;
