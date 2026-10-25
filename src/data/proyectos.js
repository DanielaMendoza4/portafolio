import imgInvernadero from '../assets/tinkercad/demo-invernadero.png';
import imgBasket from '../assets/tinkercad/basket.jpeg';


import imgSofiInicio from '../assets/sofi/sofi-web.jpeg';
import imgSofiDashboard from '../assets/sofi/dashboard-sofi.jpeg';
import imgSofiCalendario from '../assets/sofi/calendar-sofi.jpeg';
import imgSofiCursos from '../assets/sofi/cursos-sofi.jpeg';
import imgSofiRegistros from '../assets/sofi/registros-sofi.jpeg';

import imgMinimarketInicio from '../assets/minimarket/inicio.png';
import imgMinimarketCatalogo from '../assets/minimarket/catalogo.png';
import imgMinimarketCarrito from '../assets/minimarket/carrito.png';
import imgMinimarketDelivery from '../assets/minimarket/delivery.png';
import imgMinimarketContacto from '../assets/minimarket/contacto.png';

import imgEcolimLogin from '../assets/ecolim/login-eco.jpeg';
import imgEcolimRegistro from '../assets/ecolim/registro-eco.jpeg';
import imgEcolimAdmin from '../assets/ecolim/admin-eco.jpeg';

// Proyectos del portafolio. El componente los recorre con .map().
// - "estado": 'completado' | 'en proceso'  (se muestra como insignia; opcional)
// - "demoUrl" / "codigoUrl" / "apkUrl": si están vacíos, ese botón no se muestra.
// - "imagen": importa aquí tus capturas, por ejemplo:
//   import imgInventario from '../assets/proyecto-inventario.png';
//   y luego usa: imagen: imgInventario
//   Si "imagen" queda en null, se muestra un marcador de posición con CSS.
// - "imagenes": lista de { src, alt } para mostrar la galería con modal.

export const proyectos = [
  {
    titulo: 'SOFI-WEB, Frontend',
    descripcion:
      'Proyecto de colaboración en equipo dentro de mi empresa, en el que aporto en el frontend. Trabajo en el rediseño visual (tema oscuro, tipografía y dashboard), en una arquitectura modular por features y en componentes reutilizables como las tablas de datos. Usamos desarrollo guiado por especificaciones con OpenSpec.',
    tecnologias: ['Frontend', 'Arquitectura modular', 'OpenSpec', 'Trabajo en equipo'],
    demoUrl: '',
    codigoUrl: '',
    repoPrivado: true,
    imagenes: [
      { src: imgSofiInicio, alt: 'Pantalla de inicio de sesión de SOFI-WEB' },
      { src: imgSofiDashboard, alt: 'Dashboard principal de SOFI-WEB' },
      { src: imgSofiCalendario, alt: 'Vista de calendario de SOFI-WEB' },
      { src: imgSofiCursos, alt: 'Vista de cursos de SOFI-WEB' },
      { src: imgSofiRegistros, alt: 'Vista de registros de SOFI-WEB' },
    ],
    estado: 'en proceso',
  },
  {
    titulo: 'Invernadero Inteligente con Energía Solar',
    descripcion:
      'Simulación en Tinkercad de un invernadero automatizado que monitorea las condiciones del ambiente y gestiona el consumo de energía a partir de un sistema solar. Diseñado como solución IoT para optimizar recursos.',
    tecnologias: ['Tinkercad', 'Arduino', 'IoT'],
    demoUrl:
      'https://www.tinkercad.com/things/l27VzAtDYms-sistema-de-invernadero-inteligente-gestion-de-energia-solar?sharecode=N1sBbSQ0buSeLHL1pCbl91XkzYEcqGNoG_eCxDHVHi8',
    imagen: imgInvernadero,
    estado: 'completado',
  },
  {
    titulo: 'La Esquina Minimarket',
    descripcion:
      'SPA que simula un minimarket de Lima. El cliente explora 128 productos en 9 categorías, busca y filtra en tiempo real, arma su carrito con control de stock y ve el costo de delivery (gratis desde S/ 50). Incluye un formulario de contacto que envía mensajes reales con EmailJS.',
    tecnologias: ['React 19', 'Vite', 'React Router', 'Bootstrap / React Bootstrap', 'EmailJS', 'SweetAlert2', 'Lucide React'],
    demoUrl: 'https://minimarket-gamma.vercel.app/',
    codigoUrl: 'https://github.com/DanielaMendoza4/minimarket',
    resumen: 'Tienda web de barrio con catálogo, carrito y delivery.',
    aspectosDestacados: [
      'Filtros sincronizados con la URL (?cat=, ?sub=, ?q=), por lo que se pueden compartir.',
      'Carrito con reglas de stock, subtotal, delivery y barra de progreso hacia el envío gratis.',
      'Diseño responsive con identidad propia (paleta crema y verde, tipografías Bitter y Hanken Grotesk).',
      'Accesibilidad: aria-live, aria-pressed, role="progressbar" y HTML semántico.',
    ],
    imagenes: [
      { src: imgMinimarketInicio, alt: 'Captura de inicio de La Esquina Minimarket' },
      { src: imgMinimarketCatalogo, alt: 'Captura del catálogo con buscador y filtros por categoría' },
      { src: imgMinimarketCarrito, alt: 'Captura del carrito con resumen de compra y delivery' },
      { src: imgMinimarketDelivery, alt: 'Captura de la vista con costo de delivery y progreso hacia envío gratis' },
      { src: imgMinimarketContacto, alt: 'Captura del formulario de contacto de La Esquina Minimarket' },
    ],
    estado: 'completado',
  },
  {
    titulo: 'Marcador de Canasta con Arduino',
    descripcion:
      'Simulación en Tinkercad de un marcador electrónico para un juego de canasta. Un sensor ultrasónico detecta la entrada del balón, el Arduino suma los puntos en una pantalla LCD 16x2 y se acompaña con señales de luz (LED) y sonido (buzzer).',
    tecnologias: ['Arduino', 'Tinkercad', 'Sensor ultrasónico', 'IoT'],
    demoUrl:
      'https://www.tinkercad.com/things/8TwVYPi3ooC-marcador-de-canasta-con-arduino?sharecode=CJK8f9rHa5YOmkpERY74e2rcJVESL-9X3Qw_7dMve54',
    codigoUrl: '',
    imagen: imgBasket,
    estado: 'completado',
  },
  {
    titulo: 'ECOLIM · Gestión de residuos sólidos',
    descripcion:
      'App Android para registrar residuos con foto, administrar el historial con CRUD y exportarlo a CSV. Funciona 100 % offline con login por roles.',
    tecnologias: ['Java', 'SQLite', 'Material Design 3', 'Cámara', 'ML Kit'],
    demoUrl: '',
    codigoUrl: 'https://github.com/DanielaMendoza4/appEcolim',
    apkUrl: 'https://github.com/DanielaMendoza4/appEcolim/releases/tag/v1.0',
    imagenes: [
      { src: imgEcolimLogin, alt: 'Pantalla de inicio de sesión de ECOLIM' },
      { src: imgEcolimRegistro, alt: 'Registro de residuos con foto en ECOLIM' },
      { src: imgEcolimAdmin, alt: 'Panel de administración de ECOLIM' },
    ],
    estado: 'completado',
  },
];
