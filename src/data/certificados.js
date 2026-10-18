// Certificados del portafolio. El componente los recorre con .map(),
// así que puedes sumar más certificados agregando objetos a este array.
// - "tipo": se muestra como insignia (por ejemplo, 'Certificado de asistencia').
// - "imagen": ruta pública del archivo (por ejemplo, '/certificados/mi-certificado.png').
//   Si queda vacía, se muestra un marcador de posición con CSS.
// - "url": enlace para abrir el documento. Si queda vacío, el botón no se muestra.

export const certificados = [
  {
    titulo: 'Red Hat System Administration I (RH124)',
    tipo: 'Certificado de asistencia',
    emisor: 'Red Hat Academy (Red Hat Training and Certification)',
    institucion: 'SENATI – Independencia',
    fecha: '2 de junio de 2024',
    descripcion:
      'Curso de administración de sistemas Linux con Red Hat, completado como parte de mi formación en SENATI.',
    tecnologias: ['Linux', 'Red Hat', 'Administración de sistemas'],
    imagen: '/certificados/red-hat-rh124.png',
    url: 'https://www.linkedin.com/in/daniela-mendoza-jaimes-a87969444/',
  },
];
