function AdminDebug() {

  return (

    <div className="admin-container">

      <h1>
        Panel Administrativo
      </h1>

      <p>
        Acceso interno del sistema.
      </p>

      <div className="admin-card">

        <h2>
          Datos sensibles expuestos
        </h2>

        <p>
          API_KEY=BDLZ-DEV-2026-SECRET
        </p>

        <p>
          DEBUG_MODE=true
        </p>

        <p>
          BACKUP_SERVER=192.168.1.50
        </p>

      </div>

    </div>

  )
}

export default AdminDebug