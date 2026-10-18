// Datos personales, descripción, perfil profesional y educación.
// Reemplaza el texto de muestra por tu información real.

// La foto vive en src/assets/miFoto.png (Vite la procesa al importarla).
import miFoto from '../assets/miFoto.jpeg';

export const perfil = {
  nombre: 'Daniela',
  apellido: 'Mendoza',
  nombreCompleto: 'Daniela del Carmen Mendoza Jaimes',

  rol: 'Estudiante de Ingeniería de Software con Inteligencia Artificial',
  intereses: ['Desarrollo Frontend', 'Automatización con IA', 'IoT y sistemas embebidos'],

  institucion: 'SENATI',
  sede: 'Independencia, Lima',
  semestre: 'V semestre',

  // Descripción corta que aparece en el inicio (Banner)
  descripcionCorta:
    'Diseño y construyo interfaces web claras, accesibles y responsive, y me interesa unir el desarrollo frontend con la inteligencia artificial y el Internet de las Cosas. Estudio el quinto semestre de Ingeniería de Software con IA en SENATI.',

  // Tres párrafos del perfil profesional
  parrafos: [
    'Soy Daniela del Carmen Mendoza Jaimes, estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI, sede Independencia (Lima). A lo largo de la carrera descubrí que lo que más disfruto es transformar ideas en interfaces que se sientan simples, ordenadas y fáciles de usar, cuidando cada detalle visual y de accesibilidad.',
    'Complementé mi formación con certificaciones y cursos enfocados en desarrollo web frontend, bases de datos y fundamentos de inteligencia artificial. Esos estudios me dieron una base sólida para trabajar con metodologías de control de versiones, buenas prácticas de código y trabajo colaborativo en equipo.',
    'En el día a día trabajo con React y JavaScript moderno para el frontend, HTML y CSS para maquetación responsive, Git y GitHub para el control de versiones, SQL para el manejo de datos y Python para automatizaciones. También exploro proyectos de IoT con Arduino y ESP32 para conectar software y hardware.',
  ],

  foto: miFoto,

  // Educación y certificaciones. Si "certificadoUrl" está vacío,
  // el botón "Ver certificado" simplemente no se muestra.
  educacion: [
    {
      titulo: 'Ingeniería de Software con Inteligencia Artificial',
      institucion: 'SENATI',
      estado: 'En curso',
      detalle: 'Independencia, Lima · V semestre',
      certificadoUrl: '',
    },
    {
      titulo: 'Inglés Técnico para Tecnología',
      institucion: 'SENATI',
      estado: 'En curso',
      detalle: 'Comprensión de textos',
      certificadoUrl: '',
    },
    {
      titulo: 'Certificación en Desarrollo Web Frontend',
      institucion: 'SENATI',
      estado: 'En curso',
      detalle: 'HTML5, CSS3 y JavaScript',
      certificadoUrl: 'https://www.senati.edu.pe/',
    },
  ],
};
