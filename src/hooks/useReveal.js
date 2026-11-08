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
    if (!elemento) return undefined;

    const mostrar = () => elemento.classList.add('is-visible');
    const movimientoReducido =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (movimientoReducido || typeof IntersectionObserver === 'undefined') {
      mostrar();
      return undefined;
    }

    const respaldo = window.setTimeout(mostrar, 1500);
    const observador = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((entrada) => entrada.isIntersecting)) return;
        mostrar();
        window.clearTimeout(respaldo);
        observador.disconnect();
      },
      { threshold: 0.05, rootMargin: '0px 0px 10% 0px' },
    );

    observador.observe(elemento);
    return () => {
      window.clearTimeout(respaldo);
      observador.disconnect();
    };
  }, []);

  return ref;
}
