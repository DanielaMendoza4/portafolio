// Habilidades del portafolio.
// Para agregar una habilidad basta con añadir una línea aquí:
// { nombre, area, icono (componente de react-icons), color (color de marca CSS) }.
// El array de áreas se deriva de los datos, así que una área nueva
// también aparece automáticamente como pestaña en el componente.

import {
  SiArduino,
  SiCss,
  SiEspressif,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { TbApi, TbRelationOneToMany } from 'react-icons/tb';

export const habilidades = [
  // Frontend
  { nombre: 'React', area: 'Frontend', icono: SiReact, color: '#61dafb' },
  { nombre: 'JavaScript', area: 'Frontend', icono: SiJavascript, color: '#f7df1e' },
  { nombre: 'HTML', area: 'Frontend', icono: SiHtml5, color: '#e34f26' },
  { nombre: 'CSS', area: 'Frontend', icono: SiCss, color: '#1572b6' },

  // Backend
  { nombre: 'Python', area: 'Backend', icono: SiPython, color: '#3776ab' },
  { nombre: 'Node.js', area: 'Backend', icono: SiNodedotjs, color: '#5fa04e' },
  // Marca negra: light-dark() elige la variante según el tema activo.
  { nombre: 'Express', area: 'Backend', icono: SiExpress, color: 'light-dark(#000000, #ffffff)' },
  // Sin logo oficial: icono genérico con el color de acento del tema.
  { nombre: 'APIs REST', area: 'Backend', icono: TbApi, color: 'var(--color-accent)' },

  // Datos
  { nombre: 'SQL', area: 'Datos', icono: FaDatabase, color: 'var(--color-accent)' },
  { nombre: 'MySQL', area: 'Datos', icono: SiMysql, color: '#4479a1' },
  { nombre: 'Modelado de datos', area: 'Datos', icono: TbRelationOneToMany, color: 'var(--color-accent)' },

  // IoT
  { nombre: 'Arduino', area: 'IoT', icono: SiArduino, color: '#00979d' },
  { nombre: 'ESP32', area: 'IoT', icono: SiEspressif, color: '#e7352c' },
  { nombre: 'Git', area: 'IoT', icono: SiGit, color: '#f05032' },
  { nombre: 'GitHub', area: 'IoT', icono: SiGithub, color: 'light-dark(#181717, #ffffff)' },
];

// "Todas" siempre va primero; el resto de pestañas se generan de los datos.
export const areas = ['Todas', ...new Set(habilidades.map((habilidad) => habilidad.area))];
