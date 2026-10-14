import { perfil } from '../../data/perfil';
import './Footer.css';

// Se calcula una sola vez al cargar el módulo (no durante el render).
const ANIO = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-nombre">
          {perfil.nombre} <span className="text-accent">{perfil.apellido}</span>
        </p>
        <p className="footer-copy">
          © {ANIO} {perfil.nombreCompleto}. Hecho con React + Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
