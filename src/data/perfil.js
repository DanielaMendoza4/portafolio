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

  // Párrafo único del perfil profesional (máximo 3–4 líneas).
  resumen:
    'Me gusta transformar ideas en interfaces simples, ordenadas y accesibles, cuidando cada detalle visual. Complemento mi formación con cursos de frontend, bases de datos e IA, y trabajo con control de versiones y buenas prácticas de código en equipo.',

  // Datos rápidos escaneables que se muestran bajo el párrafo.
  // Formato "cifra + etiqueta": el componente solo los recorre con map.
  datosRapidos: [
    { cifra: 'V', etiqueta: 'Semestre en curso' },
    { cifra: 'Frontend + IoT', etiqueta: 'Áreas de interés' },
    { cifra: 'Git y GitHub', etiqueta: 'Control de versiones' },
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
