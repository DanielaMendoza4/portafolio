import imgInvernadero from '../assets/demo-invernadero.png';
import imgBoutique from '../assets/boutique.png';

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
    titulo: 'Invernadero Inteligente con Energía Solar',
    descripcion:
      'Simulación en Tinkercad de un invernadero automatizado que monitorea las condiciones del ambiente y gestiona el consumo de energía a partir de un sistema solar. Diseñado como solución IoT para optimizar recursos.',
    tecnologias: ['Tinkercad', 'Arduino', 'IoT'],
    demoUrl: 'https://www.tinkercad.com/things/l27VzAtDYms-sistema-de-invernadero-inteligente-gestion-de-energia-solar?sharecode=N1sBbSQ0buSeLHL1pCbl91XkzYEcqGNoG_eCxDHVHi8',

    imagen: imgInvernadero,
    estado: 'completado',
  },
  {
    titulo: 'Boutique S&D, Tienda Online',
    descripcion:
      'Tienda online de ropa con catálogo de productos, registro e inicio de sesión, y carrito de compras. Incluye un panel de administrador con roles para gestionar productos y usuarios.',
    tecnologias: ['PHP', 'MySQL', 'Bootstrap', 'MVC'],
    demoUrl: '',
    codigoUrl: 'https://github.com/DanielaMendoza4/boutique-sd',
    imagen: imgBoutique,
    estado: 'completado',
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
