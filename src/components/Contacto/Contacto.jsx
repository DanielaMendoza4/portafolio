import { useState } from 'react';
import { contacto } from '../../data/contacto';
import { useReveal } from '../../hooks/useReveal';
import './Contacto.css';

// Íconos SVG para las redes (sin librerías externas)
const iconos = {
  github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.46-2.19 2.96V21H9z" />,
  email: (
    <>
      <path d="M3 5h18v14H3z" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
};

const estadoInicial = { nombre: '', email: '', mensaje: '' };

const Contacto = () => {
  const ref = useReveal();
  const [formulario, setFormulario] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  // onChange genérico: actualiza cualquier campo usando su atributo name
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((previo) => ({ ...previo, [name]: value }));
  };

  // Envío controlado: evita recargar la página y limpia el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setEnviado(true);
    setFormulario(estadoInicial);
  };

  return (
    <section id="contacto" className="section reveal" ref={ref}>
      <div className="container">
        <header className="contacto-encabezado">
          <p className="section-eyebrow">Contacto</p>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-lead">
            ¿Tienes una idea, una práctica o una colaboración en mente? Escríbeme y te responderé
            lo antes posible.
          </p>
        </header>

        {/* Datos de contacto y redes */}
        <ul className="contacto-datos">
          <li className="contacto-dato">
            <a href={`mailto:${contacto.email}`} className="contacto-dato-enlace">
              <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {iconos.email}
              </svg>
              {contacto.email}
            </a>
          </li>
          <li className="contacto-dato">
            <span className="contacto-dato-texto">{contacto.ubicacion}</span>
          </li>
          {contacto.redes.map((red) => (
            <li className="contacto-dato" key={red.nombre}>
              <a
                href={red.url}
                className="contacto-dato-enlace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  {iconos[red.icono]}
                </svg>
                {red.nombre}
              </a>
            </li>
          ))}
        </ul>

        {/* Formulario a ancho completo */}
        <form className="contacto-form" onSubmit={manejarEnvio} noValidate>
          <div className="campo">
            <label className="campo-etiqueta" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              className="campo-control"
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
          </div>

          <div className="campo">
            <label className="campo-etiqueta" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="campo-control"
              type="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="campo campo--ancho">
            <label className="campo-etiqueta" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="campo-control"
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder="Cuéntame en qué estás trabajando..."
              rows="5"
              required
            />
          </div>

          <div className="contacto-acciones">
            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>

            {enviado ? (
              <p className="contacto-confirmacion" role="status">
                ¡Gracias! Tu mensaje fue registrado.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
