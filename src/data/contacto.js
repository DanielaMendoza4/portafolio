// Datos y textos de la sección de contacto.
// El componente NO escribe textos ni datos de contacto en el JSX: todo sale de aquí.

// "icono" debe ser una de las claves soportadas por el componente Contacto:
// 'github' | 'linkedin' | 'email' | 'ubicacion'.
export const contacto = {
  email: 'delcarmendani514@gmail.com',
  ubicacion: 'Lima - Perú',
  redes: [
    { nombre: 'GitHub', url: 'https://github.com/DanielaMendoza4', icono: 'github' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-usuario', icono: 'linkedin' },
  ],

  textos: {
    eyebrow: 'Contacto',
    titulo: 'Hablemos',
    lead: '¿Tienes una idea, una práctica o una colaboración en mente? Escríbeme y te responderé lo antes posible.',

    info: {
      titulo: 'Ponte en contacto',
      descripcion:
        '¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus flujos de trabajo? Me encantaría escucharte.',
      etiquetaEmail: 'Email',
      etiquetaUbicacion: 'Ubicación',
      etiquetaRedes: 'Redes',
    },

    formulario: {
      nombre: { etiqueta: 'Nombre', placeholder: 'Tu nombre' },
      email: { etiqueta: 'Email', placeholder: 'tucorreo@ejemplo.com' },
      mensaje: { etiqueta: 'Mensaje', placeholder: 'Cuéntame en qué estás trabajando...' },
      boton: 'Enviar mensaje',
      botonEnviando: 'Enviando...',
    },

    alertas: {
      exito: {
        titulo: '¡Mensaje enviado!',
        texto: 'Gracias por contactarme. Te responderé a la brevedad.',
      },
      error: {
        titulo: 'Error',
        texto: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
      },
      configuracion: {
        titulo: 'Configuración pendiente',
        texto: 'Faltan las credenciales de EmailJS. Revisa las variables VITE_EMAILJS_* del archivo .env.',
      },
      boton: 'Entendido',
    },
  },
};

// Credenciales de EmailJS. Se leen de las variables de entorno (.env) que
// Vite expone como import.meta.env. No se escribe ninguna clave a mano aquí.
// VITE_EMAILJS_SERVICES_ID se acepta como alias por compatibilidad.
export const emailjsConfig = {
  servicioId: import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICES_ID,
  plantillaId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  clavePublica: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
