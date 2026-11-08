import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error al renderizar la sección de proyectos:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section id="proyectos" className="section">
          <div className="container">
            <h2 className="section-title">No se pudo cargar la sección de proyectos</h2>
            <p className="section-lead">
              Recarga la página para volver a intentar. El error quedó registrado en la consola.
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
