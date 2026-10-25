import re
with open('src/data/proyectos.js','r',encoding='utf-8') as f:
    s = f.read()
# remove boutique imports
for n in ['imgBoutique','imgBoutiqueAdmin','imgBoutiqueCarrito','imgBoutiqueComprar','imgBoutiqueIniciar','imgBoutiqueProducto','imgBoutiqueUsuario']:
    s = re.sub(r'^\s*import\s+'+re.escape(n)+r'\s+from.*\n','',s,flags=re.M)
# replace the boutique project object
old = """  {
    titulo: 'Boutique S&D, Tienda Online',
    descripcion:
      'Tienda online de ropa con cat\\u00e1logo de productos, registro e inicio de sesi\\u00f3n, y carrito de compras. Incluye un panel de administrador con roles para gestionar productos y usuarios.',
    tecnologias: ['PHP', 'MySQL', 'Bootstrap', 'MVC'],
    demoUrl: '',
    codigoUrl: 'https://github.com/DanielaMendoza4/boutique-sd',
    imagenes: [
      { src: imgBoutique, alt: 'Portada de la tienda online Boutique S&D' },
      { src: imgBoutiqueIniciar, alt: 'Pantalla de inicio de sesi\\u00f3n de Boutique S&D' },
      { src: imgBoutiqueProducto, alt: 'Cat\\u00e1logo de productos de Boutique S&D' },
      { src: imgBoutiqueComprar, alt: 'Proceso de compra en Boutique S&D' },
      { src: imgBoutiqueCarrito, alt: 'Carrito de compras de Boutique S&D' },
      { src: imgBoutiqueAdmin, alt: 'Panel de administrador de Boutique S&D' },
      { src: imgBoutiqueUsuario, alt: 'Gesti\\u00f3n de usuarios en Boutique S&D' },
    ],
    estado: 'completado',
  },"""
new = """  {
    titulo: 'La Esquina Minimarket',
    descripcion:
      'SPA que simula un minimarket de Lima. El cliente explora 128 productos en 9 categor\\u00edas, busca y filtra en tiempo real, arma su carrito con control de stock y ve el costo de delivery (gratis desde S/ 50). Incluye un formulario de contacto que env\\u00eda mensajes reales con EmailJS.',
    tecnologias: ['React 19', 'Vite', 'React Router', 'Bootstrap / React Bootstrap', 'EmailJS', 'SweetAlert2', 'Lucide React'],
    demoUrl: 'https://minimarket-gamma.vercel.app/',
    codigoUrl: 'https://github.com/DanielaMendoza4/minimarket',
    resumen: 'Tienda web de barrio con cat\\u00e1logo, carrito y delivery.',
    aspectosDestacados: [
      'Filtros sincronizados con la URL (?cat=, ?sub=, ?q=), por lo que se pueden compartir.',
      'Carrito con reglas de stock, subtotal, delivery y barra de progreso hacia el env\\u00edo gratis.',
      'Dise\\u00f1o responsive con identidad propia (paleta crema y verde, tipograf\\u00edas Bitter y Hanken Grotesk).',
      'Accesibilidad: aria-live, aria-pressed, role=\"progressbar\" y HTML sem\\u00e1ntico.',
    ],
    imagenes: [
      { src: imgMinimarketInicio, alt: 'Captura de inicio de La Esquina Minimarket' },
      { src: imgMinimarketCatalogo, alt: 'Captura del cat\\u00e1logo con buscador y filtros por categor\\u00eda' },
      { src: imgMinimarketCarrito, alt: 'Captura del carrito con resumen de compra y delivery' },
      { src: imgMinimarketDelivery, alt: 'Captura de la vista con costo de delivery y progreso hacia env\\u00edo gratis' },
      { src: imgMinimarketContacto, alt: 'Captura del formulario de contacto de La Esquina Minimarket' },
    ],
    estado: 'completado',
  },"""
if old in s:
    s = s.replace(old, new)
    with open('src/data/proyectos.js','w',encoding='utf-8') as f:
        f.write(s)
    print('OK')
else:
    print('NOT FOUND')