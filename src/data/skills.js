// Habilidades agrupadas por categoría. "nivel" es un valor de 0 a 100
// que se representa con una barra de nivel en el componente.
export const categoriasSkills = [
  {
    categoria: 'Frontend',
    descripcion: 'Interfaces y experiencia de usuario',
    skills: [
      {
        nombre: 'React',
        descripcion: 'Componentes, props, estado y hooks como useState y useEffect.',
      },
      {
        nombre: 'JavaScript',
        descripcion: 'ES6+, asincronía, manipulación del DOM y consumo de APIs.',
      },
      {
        nombre: 'HTML / CSS',
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
       
        descripcion: 'Scripts, automatización y consumo de servicios web.',
      },
      {
        nombre: 'Node.js',
        
        descripcion: 'Servidores básicos y APIs REST con Express.',
      },
      {
        nombre: 'APIs REST',
        
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
        
        descripcion: 'Consultas, joins, funciones de agregación y filtros.',
      },
      {
        nombre: 'MySQL',
        
        descripcion: 'Modelado de tablas, relaciones y administración básica.',
      },
      {
        nombre: 'Modelado de datos',
        
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
        
        descripcion: 'Lectura de sensores y control de actuadores.',
      },
      {
        nombre: 'ESP32',
        
        descripcion: 'Conectividad Wi-Fi y envío de datos a la nube.',
      },
      {
        nombre: 'Git / GitHub',
        
        descripcion: 'Control de versiones, ramas y trabajo colaborativo.',
      },
    ],
  },
];
