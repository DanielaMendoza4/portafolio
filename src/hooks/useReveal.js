import { useEffect, useRef } from 'react';

/**
 * Aparición al hacer scroll.
 * Devuelve una ref que se asigna a la sección. Cuando el elemento entra en
 * pantalla, se le añade la clase "is-visible" (definida en index.css).
 *
 * Uso:
 *   const ref = useReveal();
 *   <section ref={ref} className="section reveal"> ... </section>
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const elemento = ref.current;

    // Si no hay elemento o el navegador no soporta IntersectionObserver,
    // se muestra el contenido sin animación.
    if (!elemento || typeof IntersectionObserver === 'undefined') {
      elemento?.classList.add('is-visible');
      return undefined;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return ref;
}
