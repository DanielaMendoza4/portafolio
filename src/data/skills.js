// Habilidades agrupadas por categoría. "nivel" es un valor de 0 a 100
// que se representa con una barra de nivel en el componente.
export const categoriasSkills = [
  {
    categoria: 'Frontend',
    descripcion: 'Interfaces y experiencia de usuario',
    skills: [
      {
        nombre: 'React',
        nivel: 80,
        descripcion: 'Componentes, props, estado y hooks como useState y useEffect.',
      },
      {
        nombre: 'JavaScript',
        nivel: 82,
        descripcion: 'ES6+, asincronía, manipulación del DOM y consumo de APIs.',
      },
      {
        nombre: 'HTML / CSS',
        nivel: 88,
        descripcion: 'Maquetación responsive, variables CSS y accesibilidad básica.',
      },
    ],
  },
  {
    categoria: 'Backend',
    descripcion: 'Lógica de servidor y servicios',
    skills: [
      {
        nombre: 'Python',
        nivel: 78,
        descripcion: 'Scripts, automatización y consumo de servicios web.',
      },
      {
        nombre: 'Node.js',
        nivel: 65,
        descripcion: 'Servidores básicos y APIs REST con Express.',
      },
      {
        nombre: 'APIs REST',
        nivel: 70,
        descripcion: 'Diseño de endpoints y manejo de JSON con fetch.',
      },
    ],
  },
  {
    categoria: 'Datos',
    descripcion: 'Almacenamiento y consulta',
    skills: [
      {
        nombre: 'SQL',
        nivel: 75,
        descripcion: 'Consultas, joins, funciones de agregación y filtros.',
      },
      {
        nombre: 'MySQL',
        nivel: 72,
        descripcion: 'Modelado de tablas, relaciones y administración básica.',
      },
      {
        nombre: 'Modelado de datos',
        nivel: 68,
        descripcion: 'Diseño de esquemas y normalización de información.',
      },
    ],
  },
  {
    categoria: 'IoT',
    descripcion: 'Software que se conecta al mundo físico',
    skills: [
      {
        nombre: 'Arduino',
        nivel: 70,
        descripcion: 'Lectura de sensores y control de actuadores.',
      },
      {
        nombre: 'ESP32',
        nivel: 60,
        descripcion: 'Conectividad Wi-Fi y envío de datos a la nube.',
      },
      {
        nombre: 'Git / GitHub',
        nivel: 76,
        descripcion: 'Control de versiones, ramas y trabajo colaborativo.',
      },
    ],
  },
];
