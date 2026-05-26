import { useState } from 'react'

function Login() {

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  function iniciarSesion() {

    if (

      usuario === 'admin'
      &&
      password === '123456'

    ) {

      alert('Acceso concedido')

    } else {

      alert('Credenciales incorrectas')

    }

  }

  return (

    <div>

      <section className="page-title">

        <h1>Login Administrativo</h1>

        <p>
          Acceso restringido para administradores.
        </p>

      </section>

      <section className="login-container">

        <div className="login-card">

          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={iniciarSesion}>
            Iniciar sesión
          </button>

        </div>

      </section>

    </div>
  )
}

export default Login