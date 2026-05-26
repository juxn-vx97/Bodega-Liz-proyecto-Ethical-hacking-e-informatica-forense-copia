import { Link } from 'react-router-dom'


function Lab() {

  return (

    <div>

      <section className="page-title">

        <h1>Laboratorio de Vulnerabilidades</h1>

        <p>
          Simulación educativa basada en OWASP Juice Shop.
        </p>

      </section>

      <section className="lab-container">

        <div className="lab-card">

          <h2>DOM XSS</h2>

          <p>
            Renderizado inseguro de HTML.
          </p>

          <Link to="/">
            <button>Probar</button>
          </Link>

        </div>

        <div className="lab-card">

          <h2>Broken Authentication</h2>

          <p>
            Login inseguro hardcodeado.
          </p>

          <Link to="/login">
            <button>Probar</button>
          </Link>

        </div>

        <div className="lab-card">

          <h2>Broken Access Control</h2>

          <p>
            Panel administrativo expuesto.
          </p>

          <Link to="/admin-debug">
            <button>Probar</button>
          </Link>

        </div>

        <div className="lab-card">

          <h2>Price Manipulation</h2>

          <p>
            Modificación de precios desde LocalStorage.
          </p>

          <Link to="/carrito">
            <button>Ver carrito</button>
          </Link>

        </div>

        <div className="lab-card">

          <h2>LocalStorage Exposure</h2>

          <p>
            Información sensible visible en frontend.
          </p>

          <Link to="/admin-debug">
            <button>Ver datos</button>
          </Link>

        </div>

      </section>

    </div>

  )
}

export default Lab