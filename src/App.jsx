import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './index.css';
import './App.css';

const TEMA_CLARO = 'light';
const TEMA_OSCURO = 'dark';

// Determina el tema inicial: preferencia guardada o preferencia del sistema.
const obtenerTemaInicial = () => {
  if (typeof window === 'undefined') return TEMA_CLARO;

  const guardado = window.localStorage.getItem('tema');
  if (guardado === TEMA_CLARO || guardado === TEMA_OSCURO) return guardado;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? TEMA_OSCURO : TEMA_CLARO;
};

function App() {
  // Tema global controlado con useState y reflejado en variables CSS.
  const [tema, setTema] = useState(obtenerTemaInicial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    window.localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((actual) => (actual === TEMA_CLARO ? TEMA_OSCURO : TEMA_CLARO));
  };

  return (
    <div className="app">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Navbar tema={tema} onToggleTema={alternarTema} />

      <main id="contenido" className="app-main">
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
