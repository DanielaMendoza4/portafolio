// Proyectos del portafolio. El componente los recorre con .map().
// - "estado": 'completado' | 'en proceso'  (se muestra como insignia)
// - "demoUrl" / "codigoUrl": si están vacíos, ese botón no se muestra.
// - "imagen": importa aquí tus capturas, por ejemplo:
//   import imgInventario from '../assets/proyecto-inventario.png';
//   y luego usa: imagen: imgInventario
//   Si "imagen" queda en null, se muestra un marcador de posición con CSS.

export const proyectos = [
  {
    titulo: 'Panel de Inventario',
    descripcion:
      'Aplicación web para registrar, editar y buscar productos de un inventario, con filtros por categoría y persistencia local. Diseñada con enfoque mobile-first.',
    tecnologias: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    demoUrl: 'https://example.com/panel-inventario',
    codigoUrl: 'https://github.com/tu-usuario/panel-inventario',
    imagen: null,
    estado: 'completado',
  },
  {
    titulo: 'Asistente de Estudio con IA',
    descripcion:
      'Prototipo que resume apuntes y genera preguntas de repaso a partir de un texto. Estoy integrando un modelo de lenguaje y una interfaz de chat.',
    tecnologias: ['React', 'Python', 'FastAPI', 'IA'],
    demoUrl: '',
    codigoUrl: 'https://github.com/tu-usuario/asistente-estudio',
    imagen: null,
    estado: 'en proceso',
  },
  {
    titulo: 'Sistema de Monitoreo IoT',
    descripcion:
      'Estación que mide temperatura y humedad con sensores conectados a un ESP32 y envía los datos a un panel web en tiempo real.',
    tecnologias: ['Arduino', 'ESP32', 'C++', 'Node.js'],
    demoUrl: 'https://example.com/monitoreo-iot',
    codigoUrl: 'https://github.com/tu-usuario/monitoreo-iot',
    imagen: null,
    estado: 'completado',
  },
  {
    titulo: 'Analizador de Datos Académicos',
    descripcion:
      'Script que limpia y analiza datos de calificaciones desde una base de datos SQL y genera gráficos para detectar tendencias por curso.',
    tecnologias: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    demoUrl: '',
    codigoUrl: 'https://github.com/tu-usuario/analizador-datos',
    imagen: null,
    estado: 'completado',
  },
];
