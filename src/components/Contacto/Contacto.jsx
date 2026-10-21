import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { contacto, emailjsConfig } from '../../data/contacto';
import { useReveal } from '../../hooks/useReveal';

import './Contacto.css';

// Íconos SVG para los datos de contacto (sin librerías externas)
const iconos = {
  github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.46-2.19 2.96V21H9z" />,
  email: (
    <>
      <path d="M3 5h18v14H3z" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  redes: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
};

const estadoInicial = { nombre: '', email: '', mensaje: '' };

// Lee la paleta del tema activo (claro u oscuro) desde las variables CSS.
// Así las alertas toman los colores de la identidad visual y cambian
// solos al alternar el modo claro/oscuro.
const leerPaleta = () => {
  const estilos = window.getComputedStyle(document.documentElement);
  const valor = (variable) => estilos.getPropertyValue(variable).trim();

  return {
    fondo: valor('--card'),
    texto: valor('--text'),
    acento: valor('--accent'),
    peligro: valor('--danger'),
  };
};

// Muestra una alerta de SweetAlert2 teñida con la paleta del tema.
const mostrarAlerta = async (tipo, contenido) => {
  const paleta = leerPaleta();
  const esExito = tipo === 'exito';

  await Swal.fire({
    title: contenido.titulo,
    text: contenido.texto,
    icon: esExito ? 'success' : 'error',
    background: paleta.fondo,
    color: paleta.texto,
    iconColor: esExito ? paleta.acento : paleta.peligro,
    confirmButtonColor: paleta.acento,
    confirmButtonText: contacto.textos.alertas.boton,
    customClass: { popup: 'alerta-portafolio' },
  });
};

const Contacto = () => {
  const ref = useReveal();
  const [formulario, setFormulario] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);

  // onChange genérico: actualiza cualquier campo usando su atributo name
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((previo) => ({ ...previo, [name]: value }));
  };

  // Envío con EmailJS: evita recargar la página, bloquea el formulario
  // mientras corre y limpia los campos cuando el mensaje sale con éxito.
  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    setCargando(true);

    if (!emailjsConfig.servicioId || !emailjsConfig.plantillaId || !emailjsConfig.clavePublica) {
      await mostrarAlerta('error', contacto.textos.alertas.configuracion);
      setCargando(false);
      return;
    }

    try {
      await emailjs.send(
        emailjsConfig.servicioId,
        emailjsConfig.plantillaId,
        {
          nombre: formulario.nombre,
          email: formulario.email,
          mensaje: formulario.mensaje,
        },
        emailjsConfig.clavePublica,
      );

      await mostrarAlerta('exito', contacto.textos.alertas.exito);
      setFormulario(estadoInicial);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      await mostrarAlerta('error', contacto.textos.alertas.error);
    } finally {
      setCargando(false);
    }
  };

  const { info, formulario: textosFormulario } = contacto.textos;

  return (
    <section id="contacto" className="section reveal" ref={ref}>
      <div className="container">
        <header className="contacto-encabezado">
          <p className="section-eyebrow">{contacto.textos.eyebrow}</p>
          <h2 className="section-title">{contacto.textos.titulo}</h2>
          <p className="section-lead">{contacto.textos.lead}</p>
        </header>

        <div className="contacto-cuerpo">
          {/* =======================================
              COLUMNA IZQUIERDA: INFORMACIÓN
          ======================================= */}
          <div className="contacto-info">
            <h3 className="contacto-info-titulo">{info.titulo}</h3>
            <p className="contacto-info-descripcion">{info.descripcion}</p>

            <ul className="contacto-datos">
              {/* Email */}
              <li className="contacto-dato">
                <span className="contacto-dato-icono">
                  <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    {iconos.email}
                  </svg>
                </span>
                <span className="contacto-dato-texto">
                  <span className="contacto-dato-etiqueta">{info.etiquetaEmail}</span>
                  <a href={`mailto:${contacto.email}`} className="contacto-dato-enlace">
                    {contacto.email}
                  </a>
                </span>
              </li>

              {/* Ubicación */}
              <li className="contacto-dato">
                <span className="contacto-dato-icono">
                  <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    {iconos.ubicacion}
                  </svg>
                </span>
                <span className="contacto-dato-texto">
                  <span className="contacto-dato-etiqueta">{info.etiquetaUbicacion}</span>
                  <span className="contacto-dato-valor">{contacto.ubicacion}</span>
                </span>
              </li>

              {/* Redes sociales */}
              <li className="contacto-dato">
                <span className="contacto-dato-icono">
                  <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    {iconos.redes}
                  </svg>
                </span>
                <span className="contacto-dato-texto">
                  <span className="contacto-dato-etiqueta">{info.etiquetaRedes}</span>
                  <span className="contacto-dato-enlaces">
                    {contacto.redes.map((red) => (
                      <a
                        key={red.nombre}
                        href={red.url}
                        className="contacto-dato-enlace contacto-dato-enlace--red"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="contacto-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          {iconos[red.icono]}
                        </svg>
                        {red.nombre}
                      </a>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* =======================================
              COLUMNA DERECHA: FORMULARIO
          ======================================= */}
          <div className="contacto-formulario">
            <form className="contacto-form" onSubmit={manejarEnvio}>
              <div className="contacto-campo">
                <label className="contacto-etiqueta" htmlFor="nombre">
                  {textosFormulario.nombre.etiqueta}
                </label>
                <input
                  id="nombre"
                  className="contacto-control"
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder={textosFormulario.nombre.placeholder}
                  autoComplete="name"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="contacto-campo">
                <label className="contacto-etiqueta" htmlFor="email">
                  {textosFormulario.email.etiqueta}
                </label>
                <input
                  id="email"
                  className="contacto-control"
                  type="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder={textosFormulario.email.placeholder}
                  autoComplete="email"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="contacto-campo contacto-campo--ancho">
                <label className="contacto-etiqueta" htmlFor="mensaje">
                  {textosFormulario.mensaje.etiqueta}
                </label>
                <textarea
                  id="mensaje"
                  className="contacto-control"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder={textosFormulario.mensaje.placeholder}
                  rows="5"
                  required
                  disabled={cargando}
                ></textarea>
              </div>

              <div className="contacto-acciones">
                <button
                  type="submit"
                  className="btn btn-primary contacto-enviar"
                  disabled={cargando}
                  aria-busy={cargando}
                >
                  {cargando ? (
                    <>
                      <span className="contacto-spinner" aria-hidden="true" />
                      {textosFormulario.botonEnviando}
                    </>
                  ) : (
                    textosFormulario.boton
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
