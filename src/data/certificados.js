// Certificados del portafolio. El componente los recorre con .map(),
// así que puedes sumar más certificados agregando objetos a este array.
// - "tipo": se muestra como insignia (por ejemplo, 'Certificado de asistencia').
// - "imagen": captura del certificado, importada desde src/assets.
//   Si queda vacía, se muestra un marcador de posición con CSS.
// - "url": enlace para abrir el documento. Si queda vacío, el botón no se muestra.

import imgRedHat from '../assets/red-hat-rh124.png';
import imgEntrepreneurship from '../assets/Entrepre.jpg';
import imgGetConnected from '../assets/connect.jpg';
import imgCybersecurity from '../assets/Cibersegurity.jpg';
import imgIoT from '../assets/IoT.jpg';
import imgNetworking from '../assets/networking.jpg';
import imgPython from '../assets/Partner.jpg';
import imgJavaFundamentals from '../assets/Fundamentals.jpg';
import imgJavaFoundations from '../assets/Foundations.jpg';
import imgDatabaseSql from '../assets/Programming.jpg';
import imgDatabaseDesign from '../assets/Database_design.jpg';

export const certificados = [
  {
    titulo: 'Red Hat System Administration I (RH124)',
    tipo: 'Certificado de asistencia',
    emisor: 'Red Hat Training and Certification',
    institucion: 'SENATI – Independencia',
    fecha: '2 de junio de 2024',
    descripcion:
      'Certificado de asistencia al curso Red Hat System Administration I (RH124), dictado en SENATI – Independencia.',
    tecnologias: ['Linux', 'Red Hat', 'Administración de sistemas'],
    imagen: imgRedHat,
    url: '',
  },

  {
    titulo: 'Entrepreneurship',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '23 de mayo de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Entrepreneurship a través del programa Cisco Networking Academy.',
    tecnologias: ['Emprendimiento', 'Gestión', 'Cisco'],
    imagen: imgEntrepreneurship,
    url: '/certificados/Entrepreneurship_certificate.pdf',
  },

  {
    titulo: 'Get Connected',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '4 de mayo de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Get Connected a través del programa Cisco Networking Academy.',
    tecnologias: ['Redes', 'Conectividad', 'Cisco'],
    imagen: imgGetConnected,
    url: '/certificados/Get_Connected_certificate.pdf',
  },

  {
    titulo: 'Introduction to Cybersecurity',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '23 de mayo de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Introduction to Cybersecurity a través del programa Cisco Networking Academy.',
    tecnologias: ['Ciberseguridad', 'Seguridad informática', 'Cisco'],
    imagen: imgCybersecurity,
    url: '/certificados/Introduction_to_Cybersecurity_certificate.pdf',
  },

  {
    titulo: 'Introduction to IoT',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '1 de mayo de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Introduction to IoT a través del programa Cisco Networking Academy.',
    tecnologias: ['IoT', 'Internet de las cosas', 'Cisco'],
    imagen: imgIoT,
    url: '/certificados/Introduction_to_IoT_certificate.pdf',
  },

  {
    titulo: 'Networking Essentials',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '11 de agosto de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Networking Essentials a través del programa Cisco Networking Academy.',
    tecnologias: ['Redes', 'Networking', 'Cisco'],
    imagen: imgNetworking,
    url: '/certificados/Networking_Essentials_certificate.pdf',
  },

  {
    titulo: 'Partner: PCAP - Programming Essentials in Python',
    tipo: 'Certificado de finalización',
    emisor: 'Cisco Networking Academy',
    fecha: '23 de julio de 2023',
    descripcion:
      'Certificado por completar satisfactoriamente el curso Partner: PCAP - Programming Essentials in Python a través del programa Cisco Networking Academy.',
    tecnologias: ['Python', 'Programación', 'Cisco'],
    imagen: imgPython,
    url: '/certificados/Partner_Programming_Essentials_in_Python_certificate.pdf',
  },

  {
    titulo: 'Java Fundamentals - Español',
    tipo: 'Certificado de finalización',
    emisor: 'Oracle Academy',
    fecha: '19 de octubre de 2026',
    descripcion:
      'Award of Completion otorgado por completar satisfactoriamente todo el contenido del curso Java Fundamentals - Español. Instructor: Giancarlos Barboza Nieto.',
    tecnologias: ['Java', 'Programación', 'Oracle'],
    imagen: imgJavaFundamentals,
    url: '/certificados/Java_Fundamentals_Firma_Unificada.pdf',
  },

  {
    titulo: 'Java Foundations - Español',
    tipo: 'Certificado de finalización',
    emisor: 'Oracle Academy',
    fecha: '14 de octubre de 2026',
    descripcion:
      'Award of Completion otorgado por completar satisfactoriamente todo el contenido del curso Java Foundations - Español. Instructor: Giancarlos Barboza Nieto.',
    tecnologias: ['Java', 'Programación', 'Oracle'],
    imagen: imgJavaFoundations,
    url: '/certificados/Java_Foundations_Firma_Unificada.pdf',
  },

  {
    titulo: 'Database Programming with SQL - Español',
    tipo: 'Certificado de finalización',
    emisor: 'Oracle Academy',
    fecha: '14 de octubre de 2026',
    descripcion:
      'Award of Completion otorgado por completar satisfactoriamente todo el contenido del curso Database Programming with SQL - Español. Instructor: Giancarlos Barboza Nieto.',
    tecnologias: ['SQL', 'Bases de datos', 'Oracle'],
    imagen: imgDatabaseSql,
    url: '/certificados/Database_Programming_with_SQL_Firma_Unificada.pdf',
  },

  {
    titulo: 'Database Design - Español',
    tipo: 'Certificado de finalización',
    emisor: 'Oracle Academy',
    fecha: '14 de octubre de 2026',
    descripcion:
      'Award of Completion otorgado por completar satisfactoriamente todo el contenido del curso Database Design - Español. Instructor: Giancarlos Barboza Nieto.',
    tecnologias: ['Bases de datos', 'Diseño de datos', 'Oracle'],
    imagen: imgDatabaseDesign,
    url: '/certificados/Database_Design.pdf',
  },
];
