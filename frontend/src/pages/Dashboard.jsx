function Dashboard() {

  return (

    <div className="dashboard">

      <h1>
        Panel Administrativo
      </h1>

      <p>
        Sistema interno.
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h2>Ventas</h2>

          <p>
            S/ 12,450
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Usuarios</h2>

          <p>
            148 clientes
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Pedidos</h2>

          <p>
            53 activos
          </p>

        </div>

      </div>

    </div>

  )

}

export default Dashboard
