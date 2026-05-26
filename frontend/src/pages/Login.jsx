import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState('')

  const [password, setPassword] = useState('')

  function iniciarSesion() {

    if (usuario && password) {

      localStorage.setItem(

        'token',

        'authenticated'

      )

      navigate('/dashboard')

    }

  }

  return (

    <div>

      <section className="page-title">

        <h1>
          Portal Administrativo
        </h1>

        <p>
          Acceso interno.
        </p>

      </section>

      <section className="login-container">

        <div className="login-card">

          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) =>
              setUsuario(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={iniciarSesion}>

            Ingresar

          </button>

        </div>

      </section>

    </div>

  )

}

export default Login